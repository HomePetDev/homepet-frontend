<template>
<div class="mt-4 container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-4"> Tus Servicios</h1>
      <FormServicio/>
    </div>
    <hr>
  </div>
</template>

<script>
import FormServicio from "@/components/FormServicio.vue"

export default {
    name:'Servicio',
    components:{
        FormServicio
    }

}
</script>

<style scope>
 



</style>