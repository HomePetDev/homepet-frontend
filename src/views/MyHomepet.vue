<template>
  <div>
    <div v-show="isLoggedIn">

      <h1 align="center"> ¡Bienvenido  <medium class="text-info">{{user.nombre}}</medium>!</h1>

      <h3 align="center" class="mt-4" >Característica de tu HomePet </h3>


      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Rif
          <span class="badge badge-success">{{ homepet.rif}}</span>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
          Capacidad
          <span class="badge badge-success">{{ homepet.capacidad}}</span>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
          Ciudad
          <span class="badge badge-success">{{ homepet.ciudad}}</span>
        </li>

         <li class="list-group-item d-flex justify-content-between align-items-center">
          Sector
          <span class="badge badge-success">{{ homepet.sector}}</span>
        </li>

         <li class="list-group-item d-flex justify-content-between align-items-center">
          Telefono
          <span class="badge badge-success">{{ homepet.telefono}}</span>
        </li>

         <li class="list-group-item d-flex justify-content-between align-items-center">
          Especialidad
          <span class="badge badge-success">{{ homepet.especializacion}}</span>
        </li>


      </ul>
    </div>

    <div class="button-container">
        <router-link :to="'/NewFicha'">
            <button class="btn btn-success">
              Nueva mascota
            </button> 
        </router-link>
    </div>

  </div>
</template>

<script>
  import {mapState} from  "vuex"

  export default {
    name:'gerente',
    data(){
      return{

      }
    },
    computed:{
      ...mapState('auth',['isLoggedIn','user']),
      ...mapState('homepet',['homepet']),

    }


  }
</script>

<style scoped>
  .list-group{

    width: 40%;
    margin: 0 auto;
    
  }

  .btn-success{

    width: 40%;
    height:100%
  
  }
  .button-container{
    width: 40%;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;

  }

  
</style>
