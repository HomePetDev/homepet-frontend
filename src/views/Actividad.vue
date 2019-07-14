<template>
   <div class="mt-4 container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-5">Actividades de {{props.servicio.nombre}}</h1>
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
    },
    props:{
      servicio:Object
    }
}
</script>

<style lang="css">
 



</style>