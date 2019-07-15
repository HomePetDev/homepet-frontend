<template>
  <div >
    <form class="bg-info p-4 text-white rounded form-container d-flex flex-column"
    @submit.prevent="onSubmit()"
    >
      <div class="form-group">
        <label> Rif </label>
        <input v-model="form.rif" type="text" class="form-control" placeholder="Enter Rif">
        <label> Capacidad </label>
        <input v-model="form.capacidad"  type="text" class="form-control" placeholder="La capacidad de tu homepet">
        <label> Ciudad </label>
        <input v-model="form.ciudad" type="text" class="form-control" placeholder="Nombre">
        <label> Sector </label>
        <input v-model="form.sector"  type="text" class="form-control" placeholder="Enter Direccion">
        <label> Telefono </label>
        <input v-model="form.telefono" type="text" class="form-control" placeholder="Telefono">
        <div class="form-group mt-3">
          <label> Especialidad </label>  
          <select v-model="form.especialidad" class="custom-select">
            <option>Perros</option>
            <option>Gatos</option>
            <option>Hamster</option>
            <option>Delfines</option>
          </select>
        </div>
      </div>
      <button class="btn btn-danger btn-large m-3 text-center">Crear</button>
    </form>  
  </div>
</template>

<script>

  import {mapActions } from "vuex";

  export default {
    data(){
      return{
        form:{
          rif:'',
          capacidad:'',
          ciudad:'',
          sector:'',
          telefono:'',
          especialidad:''
        }
      }
    },
    methods:{
      ...mapActions('homepet',['getInfoHomepet']),
      onSubmit(){
        this.getInfoHomepet(this.form);
        event.target.reset(); // remeber reset form objec values - Borra los campos del formulario 
      },

    }
    
  }
</script>

<style>

</style>
