<template>
    <div class="mt-4 container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="display-4"> Reservas</h1>
            <FormReserva/>
        </div>
        <hr>
    </div>    
</template>

<script>
import FormReserva from "@/components/FormReserva.vue"

export default {
    name:'Reserva',
    components:{
        FormReserva
    }

}
</script>

<style>

</style>
