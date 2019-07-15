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
    methods:{
      navigateToActividades(servicio){
        this.$router.push({
          path:`/gerente/actividades/${servicio.nombre}`,
          params:{ servicio }
        })
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