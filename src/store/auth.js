import API from "@/API"

const state = {
  token: "",
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
          reject({msg:"Cedula o contraseña invalidas", type:"alert-danger"});        
        }else{
          

          const user = await API.getUserByCI(cedula_id);
          const homepet = await API.getHomepetByCI(cedula_id)
          context.commit("setUser", user);
          context.commit("setToken", data.token);
          context.commit("setIsLoggedIn", true) 
          context.commit("homepet/setHomepet", homepet, {root:true});
          context.commit('control/setLoading', false, {root:true});
          resolve();
        }
        

      }



    });    

  }
}
const getters = {



}
export default {
  namespaced:true,
  state,mutations,actions,getters
}