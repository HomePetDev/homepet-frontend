import API from "@/API"

const state = {
  token:null,
  user:{
    id_acceso:1,
  },
  isLoggedIn: false,
}

const mutations = {
  setUser (state, payload){
    state.user = {...state.user, ...payload}
  },
  setToken(state, token){
    state.token = token
  },
  setIsLoggedIn (state, value){
    state.isLoggedIn = value;
  }
}

const actions = {
  signIn(context , payload){
    return new Promise(async (resolve, reject) => {
      const { cedula_id, pass, direccion, nombre, telefono} = payload;
      if (!cedula_id || !pass || !direccion || !nombre || !telefono){
        reject({msg:"Por favor completa los campos", type:"alert-danger"});
      }else if(pass.length < 4){ 
        reject({msg:"Tu contraseña debe contener almenos 5 caracteres", type:"alert-warning"});
      }else{
        context.commit('control/setLoading', true, {root:true});
        const res = await fetch('http://localhost:3000/api/auth/signin',{
          method:'POST',
          body: JSON.stringify({payload}), 
          headers:{
            'Content-Type': 'application/json'
          } 
        });
        const data = await res.json();
        if (!data.error){
          await setTimeout(()=> {
            context.commit('control/setLoading', false, {root:true});
            context.commit('setUser', data);
            resolve();
          }, 2 * 1000)
        }else{
          context.commit('control/setLoading', false, {root:true});
          reject({msg:"El usuario ya se encuentra registrado", type:"alert-danger"});
        }
      }
    })

  },


  async logIn (context, payload){
    return new Promise (async (resolve, reject)=>{
      const {cedula_id, pass} = payload;
      if (!cedula_id || !pass){
        reject({msg:"Por favor completa los campos", type:"alert-danger"});
      }else{
        context.commit('control/setLoading', true, {root:true});
        const res = await fetch('http://localhost:3000/api/auth/login',{
          method:'POST',
          body: JSON.stringify({payload}), 
          headers:{
            'Content-Type': 'application/json'
          } 
        });
        const data = await res.json();
       
        

        if (data.error){
          context.commit('control/setLoading', false, {root:true});        
          reject({msg:"Cedula o contraseña invalidas", type:"alert-danger"});
        }else{
          const user = await API.getUserByCI(cedula_id);
          const homepet = await API.getHomepetByCI(cedula_id);
          const servicios = await API.getServices(homepet.rif);
          if(!servicios.error)
            context.commit("homepet/setServicios", servicios, {root:true});
          if(!homepet.error)
            context.commit("homepet/setHomepet", homepet, {root:true});
          if(!user.error){
            context.commit("setUser", user);
            context.commit("setToken", data.token);
            localStorage.setItem("token", data.token)
            context.commit("setIsLoggedIn", true) ;
          }
          context.commit('control/setLoading', false, {root:true});
          resolve();
        }
      }
    });    
  },
  async logOut(context){
    return new Promise( async (resolve) =>{
      localStorage.setItem('token' , null);
      context.commit("setIsLoggedIn", false);
      context.commit("homepet/setHomepet", null, {root:true});
      context.commit("homepet/setServicios", [], {root:true});
      context.commit("setUser", {id_acceso:1});
      resolve(); 
    });
    

  },
  async loggedIn(context){
    return new Promise( async(resolve)=>{
      const token = localStorage.getItem('token');
      if(token){
        const {cedula_id} = parseJwt(token);
        const user = await API.getUserByCI(cedula_id);
        const homepet = await API.getHomepetByCI(cedula_id);
        const servicios = await API.getServices(homepet.rif);
        if(!servicios.error)
          context.commit("homepet/setServicios", servicios, {root:true});
        if(!user.error)
          context.commit("setUser", user);
        if(!homepet.error)
          context.commit("homepet/setHomepet", homepet, {root:true});
        context.commit("setIsLoggedIn", true);
        resolve();
      } 
    });
  }  
}



const getters = {


}

const parseJwt = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}


export default {
  namespaced:true,
  state,mutations,actions,getters
}