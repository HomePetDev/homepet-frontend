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

async function signIn(payload){
  const res = await fetch(`${API_URL}/auth/signin/`,{
    method:'POST', 
    body: JSON.stringify({payload}),
    headers:{
      'Content-Type': 'application/json'
    }});
  return await res.json()  
}

async function createClient(payload){
  const res = await fetch(`${API_URL}/clientes`,{
    method:'POST', 
    body: JSON.stringify({payload}),
    headers:{
      'Content-Type': 'application/json'
    }});
  return await res.json()  
}

async function createMascota(cedula, payload){
  const res = await fetch(`${API_URL}/mascotas/${cedula}`,{
    method:'POST', 
    body: JSON.stringify({payload}),
    headers:{
      'Content-Type': 'application/json'
    }});
  return await res.json()  
}

async function crearFicha(rif,ficha, servicio){
  const res = await fetch(`${API_URL}/fichas/${rif}`,{
    method:'POST', 
    body: JSON.stringify({payload:{ficha, servicio}}),
    headers:{
      'Content-Type': 'application/json'
    }});
  return await res.json()  
}

export default{
  getUserByCI, getHomepetByCI , getServices, signIn, createClient, createMascota,crearFicha
}