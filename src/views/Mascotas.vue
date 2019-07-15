<template>
<div class="d-flex justify-content-between align-items-center">
  <div class="mt-4 container">
    
      <h1 class="display-4">Mascotas</h1>
      <ul>
      <div class="card border-success mb-3" 
            v-for="Empleado in Empleados" :key="Empleado.id"
            >
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>{{Empleado.nombre_prod}}</h3>
                    <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
                </div>
                <div class="card-body">
                    <p class="card-text">{{Empleado.descripcion}}</p>
                </div>
            </div>
    </ul>
    </div>
    <FormMascota/>
    <hr>
    
  </div>
</template>

<script>
import FormMascota from "@/components/FormMascota.vue"

export default {
    name:'Mascotas',
    components:{
        FormMascota
    },
    data(){
        return{
            Empleados:[
                {
                    nombre_prod:'cocaina', 
                    descripcion:'baking soda' 
                },{
                    nombre_prod:'cripi',
                    descripcion:'smoku smoki' 
                },{
                    nombre_prod:'heroina', 
                    descripcion:'capitana marvel'
                },{
                    nombre_prod:'carrito', 
                    descripcion:'pa que te montes' 
                }
            ]
        }
    }
}
</script>

<style>
.display-4{
  text-align: center;
}


</style>
