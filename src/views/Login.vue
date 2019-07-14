<template>
  <div class="container d-flex align-items-center flex-column">
    <router-link :to="'/'">
      <img src="../assets/Logo_1.png" alt="" width="300">
    </router-link>
    <h4 class="mt-3">Ingresa a HomePet</h4>
    <form
      id="login-form" 
      class="bg-light text-dark"
      @submit.prevent="onSubmit()"
    >
      <div class="form-group">
        <h5> Cedula </h5>
        <input v-model="form.cedula_id" type="text" class="form-control" placeholder="">
        <h5 class="mt-3"> Contraseña </h5>
        <input v-model="form.pass" type="password" class="form-control" placeholder="">
      </div>
      <div class="d-flex justify-content-center">

        <button class="btn btn-primary btn-large text-center">Ingresar</button>
      </div>
    </form>  

    <ul class="navbar-nav d-flex flex-row ustify-content-between mt-4">
        <li class="nav-item">
          <router-link  :to="'/'">
            <a class="nav-link">Inicio</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link  :to="'#'">
            <a class="nav-link">Terminos</a>
           </router-link>
        </li>
        <li class="nav-item">
          <router-link  :to="'#'">
            <a class ="nav-link" >Privacidad</a>
          </router-link>
        </li>
    </ul>  
  </div>
</template>


<script>

  import {mapActions} from "vuex"

  export default {
    name:'login',
    data(){
      return{
        form :{
          cedula_id:null, pass:null
        }
      }
    },
    computed:{

    },
    methods:{
      ...mapActions("auth", ["logIn"]),
      ...mapActions("control", ["showAlert"]),
      onSubmit(){
        this.logIn(this.form)
          .then(()=>{
            console.log("handle success");
          })
          .catch(alert => this.showAlert(alert));

        
      }
    }
  }
</script>

<style scoped>

  *{margin: 0;}
  
  .container{
    margin-top: 4rem;
  }

  #login-form{
    color: #111;
    margin: 20px;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid lightgreen; 
    min-width: 300px;
  }

  #login-form button{
    font-size: 1.2rem;
  }

  .navbar-nav li{
      margin-right: 8px;
  }
 




</style>
