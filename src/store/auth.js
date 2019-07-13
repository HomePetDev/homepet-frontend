
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
  async logIn (payload){
    console.log(payload);
    

  }
}
const getters = {



}
export default {
  namespaced:true,
  state,mutations,actions,getters
}