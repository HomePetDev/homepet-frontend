const API_URL = "http://localhost:3000/api"

async function getUserByCI(cedula_id){
  const res = await fetch(`${API_URL}/usuarios/${cedula_id}`,{
    method:'GET', 
    headers:{
      'Content-Type': 'application/json'
    }});
  return await res.json()   
}

async function getHomepetByCI(cedula_id){
  const res = await fetch(`${API_URL}/homepets/owner/${cedula_id}`,{
    method:'GET', 
    headers:{
      'Content-Type': 'application/json'
    }});
  return await res.json()  
}

async function getServices(rif){
  const res = await fetch(`${API_URL}/servicios/${rif}`,{
    method:'GET', 
    headers:{
      'Content-Type': 'application/json'
    }});
  return await res.json()  

}

async function getMascotas(rif){
  const res = await fetch (`${API_URL}/mascotas/${rif}`,{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }});
    return await res.json()
    }

    async function getClientes(rif){
      const res = await fetch (`${API_URL}/clientes/${rif}`,{
        method: 'GET',
        headers:{
          'Content-Type' : 'application/json'
        }});
      return await res.json()
    }


export default{
  getUserByCI, getHomepetByCI , getServices
}