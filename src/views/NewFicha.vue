<template>
  <div class="container mt-4">
    <h4>Aqui puedes registrar un nuevo cliente con su mascota y el servicio a solicitar</h4>
    <hr>
    <form class="form-container"
      @submit.prevent="onSubmit()"
    >
      <div class="form-1">
        <h4>Nueva mascota</h4>
        <div class="form-group" >
          <label>Nombre<strong class="text-danger"> *</strong></label>
          <input v-model="form.nomMascota" type="text" class="form-control" >
        </div>
        <div class="form-group">
          <label>Alimento<strong class="text-danger"> *</strong></label>
          <input v-model="form.alimento" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Cantidad<strong class="text-danger"> *</strong></label>
          <input v-model="form.cantidad" type="text" class="form-control" >
        </div>
        <div class="form-group">
          <label>Fecha de nacimiento<strong class="text-danger"> *</strong></label>
          <input v-model="form.fecha_nac" type="date" class="form-control" >
        </div>
        <div class="form-group">
          <label>Raza<strong class="text-danger"> *</strong></label>
          <input v-model="form.raza" type="text" class="form-control" >
        </div>
        <div class="form-group">
          <label>Sexo<strong class="text-danger"> *</strong></label>
          <input v-model="form.sexo" type="text" class="form-control" >
        </div>
      </div>
      <div class="form-2">
        <h4>Dueño</h4>
        <div class="form-group" >
            <label >Cedula<strong class="text-danger"> *</strong></label>
            <input v-model="form.cedula" type="text" class="form-control" >
        </div>
        <div class="form-group">
            <label>Nombre<strong class="text-danger"> *</strong></label>
            <input v-model="form.nomDueño" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Direccion<strong class="text-danger"> *</strong></label>
            <input v-model="form.direccion" type="text" class="form-control" >
        </div>
        <div class= "form-group">
            <label>Telefono<strong class="text-danger"> *</strong></label>
            <input v-model="form.telefono" type="text" class="form-control" >
        </div>
        <div class="form-group">
            <label>Correo Electronico<strong class="text-danger"> *</strong></label>
            <input v-model="form.email" type="text" class="form-control" >
        </div>

      </div>

      <div class="form-3">
        <h4>Detalles del servicio</h4>
        <div class="form-group" >
            <label >Servicio<strong class="text-danger"> *</strong></label>
            <input v-model="form.servicio" type="text" class="form-control" >
        </div>
        <div class="form-group">
            <label>Fecha Entrada  <strong class="text-danger"> *</strong></label>
            <input v-model="form.fec_entrada" type="date" class="form-control" >
        </div>
        <div class="form-group">
            <label>Fecha Salida<strong class="text-danger"> *</strong></label>
            <input v-model="form.fec_salida_est" type="date" class="form-control" >
        </div>
        <h4>Autorizado</h4>
        <div class="form-group">
            <label>Nombre</label>
            <input v-model="form.nombre_auth" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Cedula</label>
            <input  v-model="form.cedula_auth" type="text" class="form-control" >
        </div>
        <div class= "form-group">
            <label>Telefono</label>
            <input v-model="form.tlf_auth" type="text" class="form-control" >
        </div>

      </div>

      <div class="button-container mt-4">
        <button type="submit" class="btn btn-success btn-lg">Registrar orden
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  
  import {mapActions} from "vuex";

  export default {
   
    data(){
      return{
          form:{
            nomMascota:null, alimento:null,cantidad:null, raza:null, fecha_nac:null,
            sexo:null, cedula:null, nomDueño:null, direccion:null, telefono:null, email:null, 
            servicio:null, fec_entrada:null, fec_salida_est:null, nombre_auth:null, cedula_auth:null, tlf_auth:null
          }
      }
    },
    methods:{
      ...mapActions("homepet",["newFicha"]),
      onSubmit(){
        this.newFicha(this.form)
          .then(()=>{
              this.form = {
                nomMascota:null, alimento:null,cantidad:null, raza:null, fecha_nac:null,
                sexo:null, cedula:null, nomDueño:null, direccion:null, telefono:null, email:null, 
                servicio:null, fec_entrada:null, fec_salida_est:null, nombre_auth:null, cedula_auth:null, tlf_auth:null
              }
               this.$router.push('/gerente/myhomepet')
              event.target.reset()

          })
          .catch(()=>{

          })
        

      }
    }
  }
</script>

<style scoped>
  
  .form-1, .form-1, .form-3{
    min-width: 25%;

  }

  .form-container{
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap
    
  }

  .button-container{
    flex-shrink: 0;
    flex-basis: 100%;
    text-align: center;
  }

  .button-container button{
    width: 40%;

  }


</style>
