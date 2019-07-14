<template>
  <div class="container mt-4">
    <h4>Aqui puedes registrar un nuevo cliente con su mascota y el servicio a solicitar</h4>
    <hr>
    <FormMascota/>
    <FormCliente/>
  </div>
</template>

<script>
  import FormMascota from "@/components/FormMascota.vue";
  import FormCliente from "@/components/FormCliente.vue";
  export default {
    components:{
      FormMascota, FormCliente
    },
    data(){
      return{


      }
    }
  }
</script>

<style>

</style>
