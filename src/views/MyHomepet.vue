<template>
  <div>
    <div v-show="isLoggedIn">
      <h1>Bienvenido {{user.nombre}}</h1>
      <h1>Tu homepet tiene estas caracteristicas</h1>
      <ul>
        <li>Rif:  {{ homepet.rif}}</li>
        <li>Capacidad:  {{ homepet.capacidad}}</li>
        <li>Ciudad:   {{ homepet.ciudad}}</li>
        <li>Sector:   {{ homepet.sector}}</li>
        <li>Telefono:   {{ homepet.telefono}}</li>
        <li>Especialidad:   {{ homepet.especializacion}}</li>
      </ul>
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

<style>

</style>
