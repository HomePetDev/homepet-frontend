<template>
  <div class="mt-4 container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-4"> Tus Empleados</h1>
      <FormEmp/>
    </div>
    <hr>
    <ul>
      <div class="card border-success mb-3" 
            v-for="empleado in empleados" :key="empleado.id"
            >
            <router-link class="nav-link" :to="`/gerente/empleados/${empleado.nombre}`">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>{{empleado.nombre}}</h3>
                    <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
                </div>
                <div class="card-body">   
                    <p class="card-text">{{empleado.direccion}}</p>
                </div>
                </router-link>
            </div>
            
    </ul>

  </div>

</template>

<script>
import FormEmp from "@/components/FormEmp.vue"
import {mapState} from "vuex";

export default {
    name: 'Empleado',
    components: {
        FormEmp
    },
    data(){
        return{
        
        }
    },
        computed:{
      ...mapState("homepet", ["empleados"]),
     
    }

}
</script>

<style>

</style>
