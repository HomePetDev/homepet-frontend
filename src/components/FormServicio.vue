<template>
  <div>
    <button  @click="toggleForm(true)" class="btn btn-info btn-lg">
      <font-awesome-icon icon="plus" />

    </button>
      <form
          @submit.prevent="onSubmit()"
          v-show="isOpen" class="form-container p-4 bg-light rounded text-dark shadow-sm mb-4"
      >

      <div class="mb-4 d-flex justify-content-between align-items-center">
          <h4>Nuevo Servicio</h4>
          <button @click="toggleForm(false)" type="button" class="close" >&times;</button>
      </div>
      
      <div class="form-group" >
          <label>Nombre de Servico <strong class="text-danger">*</strong> </label>
          <input v-model="form.nombre" type="text" class="form-control" placeholder="Inserte Nombre">
      </div>

      <div class="form-group" >
          <label >Descipcion de Servicio <strong class="text-danger">*</strong> </label>
          <input v-model="form.desc_servicio" type="text" class="form-control" placeholder="Inserte Descripcion">
      </div>

      <div class="button-container">
          <button id="submitButton" class="btn btn-lg btn-info">
              <h5  class="mb-0">Añadir</h5>   
          </button>  
      </div>
      </form>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
    data(){
    return{
      isOpen:false,
      form:{
        nombre:null, desc_servicio:null 
      }
    }
  },
  methods:{
    ...mapActions("homepet", ["newService"]),
    ...mapActions("control", ["showAlert"]),
    toggleForm(value){
        this.isOpen = value;
    },
    onSubmit(){
      this.newService(this.form)
        .then(()=>{
          this.form={nombre:null, desc_servicio:null}
          this.toggleForm(false);
          event.target.reset();
          // do something with good response
        })
        .catch((alert) => this.showAlert(alert))
    }
  }

}
</script>

<style scoped>
  .form-container{
    position: fixed;
    top: 20px;
    width: 40%;
    left: 30%;
    z-index:1000
  }

  .button-container{
    text-align: center;
    width: 30%;
    margin:0 auto;
  }

  .close{
    color: black
  }
</style>