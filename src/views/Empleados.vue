<template>
  <div class="mt-4 container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-4"> Tus Empleados</h1>
      <FormEmp/>
    </div>
    <hr>
    <ul>
      <div class="card border-success mb-3" 
            v-for="Empleado in Empleados" :key="Empleado.id"
            >
            <router-link class="nav-link" :to="`/gerente/empleados/${Empleado.nombre_prod}`">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>{{Empleado.nombre_prod}}</h3>
                    <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
                </div>
                <div class="card-body">   
                    <p class="card-text">{{Empleado.descripcion}}</p>
                </div>
                </router-link>
            </div>
            
    </ul>

  </div>

</template>

<script>
import FormEmp from "@/components/FormEmp.vue"


export default {
    name: 'Empleados',
    components: {
        FormEmp
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

</style>
