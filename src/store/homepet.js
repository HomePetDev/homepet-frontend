
const state={
  homepet:Object,
}
const mutations = {
  setHomepet (state, payload){
    state.homepet = {...payload}
  }
}

const actions = {
  createNewHomepet(context, payload){
    return new Promise( async (resolve, reject) => {

      const { rif, capacidad, especializacion, ciudad, sector , telefono} = payload
      if ( !rif || !capacidad || !especializacion || !ciudad || !sector || !telefono ){
        reject({msg:"Por favor completa los campos", type:"alert-danger"});
      }else{
        const cedula = context.rootState.auth.user.cedula_id;
        if (cedula){
          context.commit('control/setLoading', true, {root:true});
          const res = await fetch(`http://localhost:3000/api/homepets/new/${cedula}`,
          {
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
              resolve({msg:"Todo correcto, ya puedes comenzar a utilizar HomePet", type:"alert-success"});
            }, 2 * 1000)
          }else{
            context.commit('control/setLoading', false, {root:true});
            reject({msg:"Error al registrar el homepet", type:"alert-danger"});
          }
        }else{
          reject({msg:"El homepet no tiene encargado", type:"alert-danger"});
        }
      }
    });
  }
}
const getters = {

}
export default {
  namespaced:true,
  state, mutations, actions, getters,
}