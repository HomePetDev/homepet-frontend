<template>
  <div class="mt-4 container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="display-4"> Tus Empleados</h1>
      <FormEmp/>
    </div>
    <hr>
  </div>

</template>

<script>
import FormEmp from "@/components/FormEmp.vue"


export default {
    name: 'Empleados',
    components: {
        FormEmp
    }

}
</script>

<style>

</style>
