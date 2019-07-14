<template>
  <div class="text-center">
    <h1>Hello Estas en la pagina de gerentes Llena el siguiente formulario para registrarte!</h1>
    <SignInForm> </SignInForm>

    <h1 v-show="loading" >Loading</h1>
  </div>

</template>

<script>
  import SignInForm from "@/components/SignInForm.vue"
  import { mapState } from "vuex"
 
  export default {
    name:"gerentesignin",
    components:{
      SignInForm,
    },
    data(){
      return{

      }
    },
    computed:{
      ...mapState('control', ['loading'])
    }
  }
</script>

<style scoped>

</style>
