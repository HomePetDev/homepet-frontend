<template>
    <div class="mt-4 container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="display-4">Inventario</h1>
            <FormProd/>
        </div>
        <hr>
        <ul>
            <div class="card border-success mb-3" 
            v-for="producto in productos" :key="producto.id"
            >
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>{{producto.nombre_prod}}</h3>
                    <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
                </div>
                <div class="card-body">   
                    <p class="card-text">{{producto.descripcion}}</p>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import FormProd from "@/components/FormProd.vue"

export default {
    name:'Inventario',
    components:{
        FormProd
    },
    data(){
        return{
<<<<<<< HEAD

            
        }
=======
            productos:[
                {
                    nombre_prod:'cocaina', 
                    descripcion:'baking soda', 
                    precio:99, 
                    instrucciones:'raketazo' 
                },{
                    nombre_prod:'cripi',
                    descripcion:'smoku smoki', 
                    precio:25, 
                    instrucciones:'enrolalo pure' 
                },{
                    nombre_prod:'heroina', 
                    descripcion:'capitana marvel', 
                    precio:78, 
                    instrucciones:'nada men' 
                },{
                    nombre_prod:'carrito', 
                    descripcion:'pa que te montes', 
                    precio:1500, 
                    instrucciones:'run run' 
                }
            ]
        }
        
>>>>>>> 7acc4d1099173f1d43923fde9d5aca247c0ee6ff
    }

}
</script>

<style>

</style>
