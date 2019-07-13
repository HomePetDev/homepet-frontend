<template>
  <div class="container mt-5">
    <h1 class="display-4 font-weight-bold">Unete a HomePet</h1>
    <p class="lead text-secondary">La mejor forma de administrar tu franquicia</p>
    
    <form @submit.prevent="onSubmit()">
      <div class="d-flex justify-content-around align-items-center mt-3 mb-3">
        <section class="section one">
          <h3 class="mt-4 mb-4" >Paso 1: Crea tu cuenta personal</h3>
          <div class="form-group">
            <label >Cedula de Identidad <strong class="text-danger"> * </strong></label>
            <input v-model="form.cedula_id" type="text" class="form-control">
            <small id="emailHelp" class="form-text text-muted">No compartiremos esta informacion</small>
          </div>
          <div class="form-group">
            <label >Contraseña<strong class="text-danger"> *</strong></label>
            <input v-model="form.pass" type="password" class="form-control" >
            <small id="emailHelp" class="form-text text-muted">Asegurate de que sea al menos de 5 caracteres</small>
          </div>
        </section>

        <section class="section two">
          <div class="form-group">
            <label >Nombre<strong class="text-danger"> *</strong></label>
            <input v-model="form.nombre" type="text" class="form-control" >
          </div>
          <div class="form-group">
              <label >Direccion<strong class="text-danger"> *</strong></label>
              <input v-model="form.direccion" type="text" class="form-control" >
            </div>
            <div class="form-group">
              <label >Telefono<strong class="text-danger"> *</strong></label>
              <input v-model="form.telefono" type="text" class="form-control" >
            </div>
        </section>
      </div>
      <div class="button-container">
        <button id="submitButton" class="btn btn-lg btn-success">
          <h5 v-if="!isLoading" class="mb-0">Crea una cuenta</h5>   
          <Loading v-else-if="isLoading" :width="25" :color="'white'"/>
        </button>  
      </div>
    </form>
  </div>
</template>

<script>
  import Loading from "@/components/Loading.vue"
  import { mapState, mapActions} from "vuex"
 
  export default {
    name:"gerentesignin",
    components:{
      Loading
    },
    data(){
      return{
        form:{ cedula_id:null, pass:null , nombre:null , direccion:null , telefono:null}
      }
    },
    computed:{
      ...mapState('control', ['isLoading'])
    },
    methods:{
     ...mapActions('auth', ['signIn']),
     ...mapActions('control', ['showAlert']),
      onSubmit(){
        this.signIn(this.form)
          .then(()=>{            
            this.form = { cedula_id:null, pass:null , nombre:null , direccion:null , telefono:null};
            this.$router.push('/gerente/homepet/new');
            event.target.reset();
          })
          .catch((alert) => { this.showAlert(alert)})
      }
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
