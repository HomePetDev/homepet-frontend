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

export default{
  getUserByCI, getHomepetByCI
}