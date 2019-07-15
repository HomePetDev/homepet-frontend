<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <img src="../assets/Logo_2.png" alt="" width="150">
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
            <router-link class="nav-link" :to="'/gerente/myhomepet'">My Homepet</router-link>
          </li>
          <li class="nav-item">
            <router-link class ="nav-link" :to="'/gerente/empleados'">Empleados</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/gerente/inventario'">Inventario</router-link>
          </li>
          <li class="nav-item">
            <router-link class ="nav-link" :to="'/gerente/clientes'">Clientes</router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="'/gerente/mascotas'">Mascotas</router-link>
          </li>

          <li>
            <router-link class="nav-link" :to="'/gerente/reservas'">Reservas</router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="'/gerente/servicios'">Servicios</router-link>
          </li>
           <li>
            <router-link class="nav-link" :to="'/gerente/estadisticas'">Estadisticas</router-link>
          </li>
        </div>
      </ul>

      <div v-show="!isLoggedIn" class="auth-buttons">
        <router-link class="navbar-brand" :to="'/login'">
          <button type="button" class="btn btn-success">Ingresa</button>
        </router-link>
       
      </div>

      <div v-show="isLoggedIn" class="auth-buttons">
        <button @click="onLogOut()" class="btn btn-danger">
          <font-awesome-icon icon="sign-out-alt" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>

  import { mapState,mapActions } from 'vuex'

  export default {
    name:'navbar',
    data(){
      return{
        accesos:[0,1,2,3,4]
      }
    },
    methods:{
      ...mapActions("auth", ["logOut"]),
      onLogOut(){
        this.logOut().then(()=>{
          this.$router.push("/")

        })
        
      }
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
