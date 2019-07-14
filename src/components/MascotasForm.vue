<template>
  
    <form class="bg-info p-4 text-white rounded form-container d-flex flex-column"
      @submit.prevent="onSubmit()"
    >
      <div class="form-group">
          
        <label > Fecha de Nacimiento </label>
        <input v-model="form.nacimiento" type="date" class="form-control" placeholder="Fecha de Nacimiento">

        <fieldset class="form-group">
      <label>Sexo</label>
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
          Masculino
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Femenino
        </label>
      </div>
    </fieldset>

        <label > Tipo Alimento </label>
        <input v-model="form.tipo_alimento" type="text" class="form-control" placeholder="Tipo Alimento">

        <label > Direccion </label>
        <input v-model="form.direccion" type="text" class="form-control" placeholder="Direccion">

        <label > Enfermedades </label>
        <input v-model="form.enfermedades" type="text" class="form-control" placeholder="Enfermedades">


      </div>

      <button class="btn btn-danger btn-large m-3 text-center">Registar Mascota</button>
    </form>  
</template>

<script>

  import {mapActions} from "vuex"

  export default {
    name:'mascotasform',
    data(){
      return{
        form:{ tipo_alimento:'', nacimiento:'' , nombre:'' , direccion:'' , enfermedades:'', sexo:''}
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

