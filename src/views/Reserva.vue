<template>
    <div class="mt-4 container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="display-4"> Reservas</h1>
            <FormReserva/>
        </div>
        <hr>
        <ul>
            <div class="card border-success mb-3" 
            v-for="Reserva in Reservas" :key="Reserva.id"
            >
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>{{Reserva.nombre_prod}}</h3>
                    <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
                </div>
                <div class="card-body">   
                    <p class="card-text">{{Reserva.descripcion}}</p>
                </div>
            </div>
        </ul>
    </div>    
</template>

<script>
import FormReserva from "@/components/FormReserva.vue"

export default {
    name:'Reserva',
    components:{
        FormReserva
    },
    data(){
        return{
            Reservas:[
                {
                    nombre_prod:'cocaina', 
                    descripcion:'baking soda' 
                },{
                    nombre_prod:'cripi',
                    descripcion:'smoku smoki' 
                },{
                    nombre_prod:'heroina', 
                    descripcion:'capitana marvel'
                },{
                    nombre_prod:'carrito', 
                    descripcion:'pa que te montes' 
                }
            ]
        }
        
    }

}
</script>

<style>

</style>
