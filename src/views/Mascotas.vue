<template>
    <div class="mt-4 container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="display-4">Mascotas</h1>
            <FormProd/>
        </div>
        <hr>
        <ul>
        <div class="card border-success mb-3" 
                v-for="Mascota in mascotas" :key="Mascota.id"
                >
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3>{{Mascota.nombre}}</h3>
                        <font-awesome-icon class="edit-icon" style="font-size:24px cursor:pointer" icon="pencil-ruler" />
                    </div>
                    <div class="card-body">   
                        <p class="card-text">{{Mascota.fec_reg}}</p>
                    </div>
                </div>
        </ul>
    </div>
</template>

<script>
import {mapstate, mapState} from "vuex";

export default {
    name:'Mascotas',
    components:{
    },
    computed:{
        ...mapState("homepet",["mascotas"])
    }
}
</script>

<style>
.display-4{
  text-align: center;
}


</style>
