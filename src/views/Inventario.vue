<template>
    <div class="mt-4 container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="display-4">Inventario</h1>
            <FormProd/>
        </div>
    </div>
</template>

<script>
import FormProd from "@/components/FormProd.vue"

export default {
    name:'Inventario',
    components:{
        FormProd
    }

}
</script>

<style>

</style>
