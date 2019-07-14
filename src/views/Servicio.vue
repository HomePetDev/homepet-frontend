<template>
<div class="mt-4 container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-4"> Tus Servicios</h1>
      <FormServicio/>
    </div>
    <hr>

    <ul>
      <div class="card border-success mb-3" 
        v-for="servicio in servicios" :key="servicio.id"
      >
        <div class="card-header d-flex justify-content-between align-items-center">
            <h3>{{servicio.nombre}}</h3>
            <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
        </div>
        <div class="card-body">   
          <p class="card-text">{{servicio.desc_servicio}}</p>
        </div>
      </div>
    </ul>
    

  </div>
</template>

<script>
import FormServicio from "@/components/FormServicio.vue"
import {mapState} from "vuex";

export default {
    name:'Servicio',
    components:{
        FormServicio
    },
    data(){
      return{
        
      }
    },
    computed:{
      ...mapState("homepet", ["servicios"]),
    }

}
</script>

<style scope>
 
.card{
  cursor: pointer;
}

.edit-icon:hover{
  color: lightgreen;
}


</style>