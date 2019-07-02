import router from '../router'

const state = {
  token: "",
  user:{
    id_acceso:0,
  },
  isLoggedIn: false,
}

const mutations = {
  setUser (state, payload){
      state.user = payload
  },
  setIsLoggedIn (state, value){
    state.isLoggedIn = value;
  }
}

const actions = {
  async signIn(context , payload){

    context.commit('control/setLoading', true, {root:true});

    /* Aqui es donde deberiamos hacer la request al backend para registrar el usuario */

    // const {cedula_id,pass,nombre,direccion,telefono} = payload;
    // const res = await fetch('http://localhost:3000/api/auth/signin',{
    //   method:'POST',
    //   body: JSON.stringify({cedula_id,pass, nombre,direccion,telefono}), 
    //   headers:{
    //     'Content-Type': 'application/json'
    //   } 
    // });
    // const user = await res.json();  

    // Simulando la api request con un timeout
    await setTimeout(() => {
      context.commit('setIsLoggedIn', true);
      context.commit('setUser', {...payload, id_acceso:4});
      context.commit('control/setLoading', false, {root:true});
      router.push('/gerente/homepet/new');
    }, 3000);

  },
  async logIn (){

  }

}

const getters = {

}

export default {
  namespaced:true,
  state,mutations,actions,getters
}