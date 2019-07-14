<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" :to="'/'">
          <img src="../assets/Logo_2.png" alt="" width="150">
      </router-link>
      <ul class="navbar-nav mr-auto">

        <div class="d-flex" v-if="user.id_acceso == 1">

          <li class="nav-item">
            <router-link class="nav-link" :to="'/'">
              <h5>Inicio</h5>
            </router-link>
          </li>

          <li class="nav-item">
            <!-- <router-link class ="nav-link" :to="'/tiendas'"> -->
              <h5 class="nav-link">Tiendas</h5>
            <!-- </router-link> -->
          </li>

          <li class="nav-item">
            <router-link class ="nav-link" :to="'/Conocenos'">
              <h5>Conocenos</h5>
            </router-link>
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
            <router-link class ="nav-link" :to="'/empleado/Actividad'">Actividades</router-link>
          </li>

          <li class="nav-item">
            <router-link class ="nav-link" :to="'/empleado/Servicio'">Servicios</router-link>
          </li>

          <li class="nav-item">
            <router-link class ="nav-link" :to="'/empleado'">Perfil</router-link>
          </li>
        </div>


        <div class="d-flex" v-if="user.id_acceso == 4">
          <li class="nav-item">
            <a class="nav-link" href="#">My Homepet</a>
          </li>

          <li class="nav-item">
            <router-link class ="nav-link" :to="'/gerente/empleados'">Empleados</router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Clientes</a>
          </li>
        </div>

      </ul>

      <div v-show="!isLoggedIn" class="auth-buttons">
        <router-link class="navbar-brand" :to="'/login'">
          <button type="button" class="btn btn-success mr-2">Ingresa</button>
        </router-link>

        <!--<button type="button" class="btn btn-info">Registrate</button>-->

        
      </div>
    </div>
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
      ...mapState('auth', ['user', 'isLoggedIn']),
    }
  }
</script>

<style >
  .auth-buttons button{
    margin: 0 auto;
    font-size: 1.1rem;
  }



</style>
