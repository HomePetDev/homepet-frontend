import router from '../router'

const state={
  homepet:Object,
}

const mutations = {
  setHomepet (state, payload){
    state.homepet = payload
  }


}

const actions = {
 async getInfoHomepet ({commit}, payload){
  commit('control/setLoading', true, {root:true});

  /* Aqui es donde deberiamos hacer la request al backend para registrar el nuevo homepet */

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
    commit('setHomepet', payload);
    commit('control/setLoading', false, {root:true});
    router.push('/gerente');
  }, 3000);
 }

}
const getters = {

}

export default {
  namespaced:true,
  state, mutations, actions, getters,
}