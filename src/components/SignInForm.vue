<template>
  
    <form class="bg-primary p-4 text-white rounded form-container d-flex flex-column"
      @submit.prevent="onSubmit()"
    >
      <div class="form-group">
        <label > Cedula </label>
        <input v-model="form.cedula_id" type="text" class="form-control" placeholder="Enter Cedula">
        <label > Contraseña </label>
        <input v-model="form.pass" type="password" class="form-control" placeholder="Contraseña menor..">
        <label > Nombre </label>
        <input v-model="form.nombre" type="text" class="form-control" placeholder="Nombre">
        <label > Direccion </label>
        <input v-model="form.direccion" type="text" class="form-control" placeholder="Enter Direccion">
        <label > Telefono </label>
        <input v-model="form.telefono" type="text" class="form-control" placeholder="Telefono">
      </div>
      <button class="btn btn-danger btn-large m-3 text-center">Ingresar</button>
    </form>  
</template>

<script>

  import {mapActions} from "vuex"

  export default {
    name:'siginform',
    data(){
      return{
        form:{ cedula_id:'', pass:'' , nombre:'' , direccion:'' , telefono:''}
      }
    },
    methods:{
      ...mapActions('auth', ['signIn']),
      onSubmit(){
        this.signIn(this.form);
        event.target.reset(); // remeber reset form objec values 
      },
    }
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

