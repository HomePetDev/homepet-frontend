<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
     <router-link class="navbar-brand" :to="'/'">Home pet</router-link>
    <ul class="navbar-nav mr-auto">
      <div class="d-flex" v-if="user.id_acceso == 0">
        <li class="nav-item">
          <router-link class="nav-link" :to="'/'">Inicio</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tiendas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Conocenos</a>
        </li>
      </div>
      <div class="d-flex" v-if="user.id_acceso == 2">
        <li class="nav-item">
          <a class="nav-link" href="#">Homepets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tus Mascotas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Perfil</a>
        </li>
      </div>
      <div class="d-flex" v-if="user.id_acceso == 3">
        <li class="nav-item">
          <a class="nav-link" href="#">Asignaciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Perfil</a>
        </li>
      </div>
      <div class="d-flex" v-if="user.id_acceso == 4">
        <li class="nav-item">
          <a class="nav-link" href="#">My Homepet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Empleados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Clientes</a>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>

  import { mapState, } from 'vuex'

  export default {
    name:'navbar',
    data(){
      return{
        accesos:[0,1,2,3,4]
      }
    },
    methods:{
      
    },
    computed:{
      ...mapState('auth', ['user']),
    }
    
  }
</script>

<style>

</style>
