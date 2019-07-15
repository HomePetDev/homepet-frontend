<template>
  
    <form class="bg-info p-4 text-white rounded form-container d-flex flex-column"
      @submit.prevent="onSubmit()"
    >
      <div class="form-group">
        <label > Cedula </label>
        <input v-model="form.cedula_id" type="text" class="form-control" placeholder="Enter Cedula">

        <label > Direccion </label>
        <input v-model="form.direccion" type="text" class="form-control" placeholder="Enter Direccion">

        <label > Telefono </label>
        <input v-model="form.telefono" type="text" class="form-control" placeholder="Telefono">

        <label > Fecha Ingreso </label>
        <input v-model="form.date" type="date" class="form-control" placeholder="Fecha Ingreso">

      </div>

        <router-link to="/gerente/empleados">
            <button class="btn btn-danger btn-large m-3 text-center">Crear Usuario</button>
        </router-link>
      
    </form>  
</template>

<script>

  import {mapActions} from "vuex"

  export default {
    name:'empleadosform',
    data(){
      return{
        form:{ cedula_id:'', date:'' , nombre:'' , direccion:'' , telefono:''}
      }
    },
  }
</script>

<style >
  .form-container{
    width: 60%;
    margin:  0 auto;
  }

  .form-container button {
    justify-content: center;
  }
</style>

