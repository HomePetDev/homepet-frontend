<template>
 <div class="container mt-5">
    <h1 class="display-4 font-weight-bold">Unete a HomePet</h1>
    <p class="lead text-secondary">La mejor forma de administrar tu franquicia</p>
    
    <form @submit.prevent="onSubmit()">
      <div class="d-flex justify-content-around align-items-center mt-3 mb-3">
        <section class="section one">
          <h3 class="mt-4 mb-4" >Paso 2: Crea una franquicia</h3>
          <div class="form-group">
            <label >RIF <strong class="text-danger"> * </strong></label>
            <input v-model="form.rif" type="text" class="form-control">
            <small class="form-text text-muted">No compartiremos esta informacion</small>
          </div>
          <div class="form-group">
            <label >Capacidad<strong class="text-danger"> *</strong></label>
            <input v-model="form.capacidad" type="number" class="form-control" >
            <small class="form-text text-muted">Cantidad de mascotas a las cuales tu franquicia puede dar servicio a la vez</small>
          </div>
          <div class="form-group mt-3">
            <label>Especialidad<strong class="text-danger"> *</strong></label> 
            <select v-model="form.especializacion" class="custom-select">
              <option>perro</option>
              <option>gato</option>
              <option>hamster</option>
              <option>delfin</option>
            </select>
            <small class="form-text text-muted">Elige una especie a la cual se dedicara tu franquicia</small>
          </div>
        </section>

        <section class="section two">
          <div class="form-group">
            <label >Ciudad<strong class="text-danger"> *</strong></label>
            <input v-model="form.ciudad" type="text" class="form-control" >
            <small class="form-text text-muted">Dinos donde localizarte</small>
          </div>
          <div class="form-group">
              <label >Sector<strong class="text-danger"> *</strong></label>
              <input v-model="form.sector" type="text" class="form-control" >
            </div>
            <div class="form-group">
              <label >Telefono<strong class="text-danger"> *</strong></label>
              <input v-model="form.telefono" type="text" class="form-control" >
              <small class="form-text text-muted">Telefono de contacto o oficina</small>
            </div>
            
        </section>
      </div>
      <div class="button-container">
        <button id="submitButton" class="btn btn-lg btn-success">
          <h5 v-if="!isLoading" class="mb-0">Crea una franquicia</h5>   
          <Loading v-else-if="isLoading" :width="25" :color="'white'"/>
        </button>  
      </div>
    </form>
  </div>
</template>

<script>
  import Loading from "@/components/Loading.vue"
  import { mapState, mapActions } from "vuex";


  export default {
    components:{
      Loading
    },
    data(){
      return{
        form:{ rif:null, capacidad:null , ciudad:null , sector:null , telefono:null, especializacion:null}
      }
    },
    computed:{
      ...mapState('control', ['isLoading'])
    },
    methods:{
      ...mapActions("homepet", ["createNewHomepet"]),
      ...mapActions('control', ['showAlert']),
      onSubmit(){
        this.createNewHomepet(this.form)
          .then((alert)=>{
            this.showAlert(alert);
            this.form = { rif:null, capacidad:null , ciudad:null , sector:null , telefono:null, especializacion:null};
            this.$router.push('/login');
            event.target.reset();
          })
          .catch((alert)=>{ this.showAlert(alert)})
      },
    }
  }
</script>

<style scoped>
  .section{
    min-width: 40%;
  }

  .button-container{
    cursor: pointer;
    text-align: center;
    width: 30%;
    margin:0 auto;
  }

  #submitButton{
    min-width: 100%;
  }


</style>


