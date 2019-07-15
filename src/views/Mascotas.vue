<template>
    <div class="mt-4 container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="display-4">Mascotas</h1>
            <FormProd/>
        </div>
        <hr>
        <ul>
        <div class="card border-success mb-3" 
                v-for="Mascota in Mascotas" :key="Mascota.id"
                >
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3>{{Mascota.nombre_prod}}</h3>
                        <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
                    </div>
                    <div class="card-body">   
                        <p class="card-text">{{Mascota.descripcion}}</p>
                    </div>
                </div>
        </ul>
    </div>
</template>

<script>

export default {
    
    components:{
    },
    data(){
        return{
            Mascotas:[
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
.display-4{
  text-align: center;
}


</style>
