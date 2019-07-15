import API from "../API";

const state={
  homepet:Object,
  servicios:Array,
  empleados:[],
}
const mutations = {
  setHomepet (state, payload){
    state.homepet = {...payload}
  },
  setServicios(state, servicio){
    if (Array.isArray(servicio))
      state.servicios = servicio
    else    
      state.servicios = [servicio]
  }
}

const actions = {
  newFicha(context, payload){
    return new Promise ( async (resolve, reject)=>{
      const {
        nomMascota, alimento,cantidad, raza, fecha_nac,
        sexo, cedula, nomDueño, direccion, telefono, email, 
        servicio, fec_salida_est,fec_entrada, nombre_auth, cedula_auth, tlf_auth
      } = payload;

      const nombre_especie = context.state.homepet.especializacion; 
      const rif_homepet = context.state.homepet.rif;   

      const newUsuario = {cedula_id: cedula, nombre:nomDueño, direccion, telefono }
      const newCliente = {cedula, email}
      const newMascota = { nombre: nomMascota, fecha_nac, sexo, cantidad, 
        nombre_raza:raza, nombre_especie, cedula_owner:cedula, alimento }

      const usuario = await API.signIn(newUsuario);
      if(usuario.error){
        reject()
      }else{
        const cliente= await API.createClient(newCliente);
        if(cliente.error){
          reject();
        }else{
          const mascota = await API.createMascota(cliente.cedula, newMascota);
          if(mascota.error){
            reject();
          }else{
            const id_mascota = mascota.id_mascota;
            const cedula_cliente = cliente.cedula;
            const newFicha = { id_mascota, rif_homepet, cedula_cliente, fec_salida_est, fec_entrada,
              nombre_auth, tlf_auth, cedula_auth
            }
            const ficha = await API.crearFicha(rif_homepet, newFicha, servicio)
            if (ficha.error) {
              reject();
            }else{
              resolve();
            }
          }
        }
      }
    });
  },




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
  },
  newService(context, payload){
    return new Promise(async (resolve,reject)=>{
      const rif = context.state.homepet.rif;
      const { nombre, desc_servicio } = payload
      if ( !nombre  || !desc_servicio ){
        reject({msg:"Por favor completa los campos", type:"alert-danger"});
      }else{
        payload = {rif, nombre, desc_servicio}
        const res = await fetch(`http://localhost:3000/api/servicios/${rif}`,
          {
            method:'POST',
            body: JSON.stringify({payload}), 
            headers:{
              'Content-Type': 'application/json'
            } 
          });

          const data = await res.json();
          if (data.error){
            reject({msg:"Error al insertar el servicio", type:"alert-danger"});
          }else{
            const servicios = await API.getServices(rif);
            context.commit("setServicios", servicios)
            resolve();
          }
      }
    });
  },
  removeService(context, nombre){
    return new Promise(async (resolve, reject)=>{
      const rif = context.state.homepet.rif
      const res = await fetch(`http://localhost:3000/api/servicios/${rif}/${nombre}`,
      {
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        } 
      });
      // const data = await res.json();
      
      const servicios = await API.getServices(rif);
      
      if(servicios.error){
        context.commit("setServicios", [])
      }else{
        context.commit("setServicios",servicios)
      } 
    })
  }
}


const getters = {

}
export default {
  namespaced:true,
  state, mutations, actions, getters,
}