<template>
   <div>
      <button  @click="toggleForm(true)" class="btn btn-info btn-lg">
        <font-awesome-icon icon="plus"/>
      </button>

        <form
            @submit.prevent="onSubmit()"
            v-show="isOpen" class="form-container p-4 bg-light rounded text-dark shadow-sm mb-4"
        >
          <div class="mb-4 d-flex justify-content-between align-items-center">
              <h4>Nueva Actvidad</h4>
              <button @click="toggleForm(false)" type="button" class="close" >&times;</button>
          </div>

          <div class="form-group" >
              <label >Nombre de Reserva <strong class="text-danger">*</strong> </label>
              <input v-model="form.nombre_serv" type="text" class="form-control" placeholder="Inserte Nombre">
          </div>

          <div class="form-group" >
              <label >Descripcion de Actividad <strong class="text-danger">*</strong> </label>
              <input v-model="form.desc_actividad" type="text" class="form-control" placeholder="Inserte Descripcion">
          </div>

          <div class="form-group" >
              <label >Precio de la Actividad <strong class="text-danger">*</strong> </label>
              <input v-model="form.precio" type="number" class="form-control" placeholder="Inserte Precio">
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
export default {
    data(){
    return{
      isOpen:false,
      form:{
        nombre_serv :null, desc_actividad:null, precio:null 
      }
    }
  },
  methods:{
    toggleForm(value){
        this.isOpen=value;
    },
    onSubmit(){

      console.log(this.form);
      // Aqui handleamos el formulario

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
    z-index: 1000;
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