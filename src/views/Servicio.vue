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
              <div class="buttons">
                <router-link :to="{path:`/gerente/actividades/${servicio.nombre}`,params:{nombre:servicio.nombre}}">
                  <button class="btn btn-info">
                    <font-awesome-icon class="edit-icon" icon="pencil-alt" />
                  </button>
                </router-link>
                <button @click="onDelete(servicio.nombre)" class="btn btn-danger ml-4">
                  <font-awesome-icon class="edit-icon" icon="times"/>
                </button>
              </div>
              
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
import {mapState, mapActions} from "vuex";

export default {
    name:'Servicio',
    components:{
        FormServicio
    },
    data(){
      return{
        
      }
    },
    methods:{
      ...mapActions("homepet", ["removeService"]),
      onDelete(nombre){
        this.removeService(nombre)
          .then(()=>{
          
      
          })
          .catch(()=>{})
      }
      
      
    },
    computed:{
      ...mapState("homepet", ["servicios"]),
    }

}
</script>

<style scope>

  .edit-icon{
    font-size: 24px;
  }

</style>