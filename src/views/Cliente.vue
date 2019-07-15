<template>
    <div class="mt-4 container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="display-4">Cliente</h1>
        </div>
        <hr>
        <ul>
            <div class="card border-success mb-3"
            v-for="Cliente in Clientes" :key="Cliente.id"
            >
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>{{Cliente.nombre_prod}}</h3>
                    <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
                </div>
                <div class="card-body">   
                    <p class="card-text">{{Cliente.descripcion}}</p>
                </div>
            </div>
        </ul>
    </div>

</template>

<script>
import FormCliente from "@/components/FormCliente.vue"

export default {
    name:'Cliente',
    components:{
        FormCliente
    },
    data(){
        return{
            Clientes:[
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
                    nombre_prod:'pipi', 
                    descripcion:'pa que te montes'
                }
            ]
        }       
    }
}
</script>

<style lang="css">
 
</style>