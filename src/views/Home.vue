<template>
  <div class="jumbotron">
    <h1 class="display-3">Bienvenidos a HomePet</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>Si deseas crear tu franquicia, puedes hacerlo en unos simples pasos...</p>
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
    height: 500px;
  }

</style>
