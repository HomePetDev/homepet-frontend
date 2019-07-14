<template>
   <div class="mt-4 container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-4"> Tus Actividades</h1>
      <FormActividad/>
    </div>
    <hr>
  </div>
</template>

<script>
import FormActividad from "@/components/FormActividad.vue"

export default {
    name:'Actividad',
    components:{
        FormActividad
    }
}
</script>

<style lang="css">
 



</style>