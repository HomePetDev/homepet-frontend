<template>
  <div class="jumbotron">
    <h1 class="display-3">Bienvenidos a HomePet</h1>
    <p class="lead">Donde buscamos lo mejor para tu mascota</p>
    <hr class="my-4">
    <p>Si deseas crear tu franquicia, puedes hacerlo siguiendo unos simples pasos...</p>
    <router-link :to="'/gerente/signin'">
      <button class="btn btn-success btn-lg">Crea un nuevo Homepet</button>
    </router-link>   
  </div>
  
</template>

<script>


  export default {
    name:"home",
    components:{
    },
    data(){
      return{        
      }
    },
    computed:{
    }
  }
</script>


<style scoped>
  .jumbotron{
    margin-top: 25px;
    border-radius: 15px;
    text-align: center;
  }
  

</style>
