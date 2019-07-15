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
        <h4>Nuevo empleado</h4>
        <button @click="toggleForm(false)" type="button" class="close" >&times;</button>
      </div>
      <div class="form-group" >
        <label >Cedula Empleado <strong class="text-danger">*</strong> </label>
        <input v-model="form.cedula_id" type="text" class="form-control" placeholder="Inserte Cedula">
      </div>

      <div class="form-group">
        <label>Contraseña<strong class="text-danger"> *</strong></label>
        <input v-model="form.pass" type="password" class="form-control" placeholder="Inserte contraseña asignada">
      </div>
      <div class="form-group">
          <label>Nombre Empleado <strong class="text-danger"> *</strong></label>
          <input v-model="form.nombre" type="text" class="form-control" placeholder="Inserte Nombre">
      </div>
      <div class="form-group">
          <label>Direccion <strong class="text-danger"> *</strong></label>
          <input v-model="form.direccion" type="text" class="form-control" placeholder="Inserte Direccion">
      </div>
      <div class= "form-group">
          <label>Telefono <strong class="text-danger"> *</strong></label>
          <input v-model="form.telefono" type="text" class="form-control" placeholder="Inserte Telefono">
      </div>
      <div class="form-group">
          <label>Sueldo <strong class="text-danger"> *</strong></label>
          <input  v-model="form.sueldo" type="number" class="form-control" placeholder="Inserte Sueldo">
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
        cedula_id:null, pass:null, nombre:null, direccion:null, telefono:null, sueldo:null 
      }
    }
  },
  methods:{
    toggleForm(value){
        this.isOpen=value;
    },
    onSubmit(){

      // console.log(this.form);
      // // Aqui handleamos el formulario

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
