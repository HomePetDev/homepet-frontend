<template>
  <div>
   <h1>Hello World Home Pet *Guau*/*miau*</h1>
   
    <router-link :to="'/gerente/signin'">
      <button id="myButton" class="btn btn-primary btn-large">Crea un nuevo Hompet</button>
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


<style>

</style>
