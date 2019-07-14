<template>
  <div class="mt-4 container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-4">Mascotas</h1>
      <FormMascota/>
    </div>
    <hr>
    
  </div>
</template>

<script>
import FormMascota from "@/components/FormMascota.vue"

export default {
    name:'Mascotas',
    components:{
        FormMascota
    }

}
</script>

<style>

</style>
