<template>
<div>
    <button  @click="toggleForm(true)" class="btn btn-info btn-lg">
        <font-awesome-icon icon="plus" />
    </button>
    <form
        @submit.prevent="onSubmit()"
        v-show="isOpen" class="form-container p-4 bg-light rounded text-dark shadow-sm mb-4"    
    >
        <div class="mb-4 d-flex justify-content-between align-items-center">
            <h4>Nueva Reserva</h4>
            <button @click="toggleForm(false)" type="button" class="close" >&times;</button>
        </div>
        <div>
            <label>Fecha de entrada<strong class="text-danger"> *</strong></label>
            <input v-model="form.fec_entrada" type="date" class="form-control" placeholder="AAAA/MM/DD">
        </div>
        
        <div class="form-group" >
            <label >Descripcion<strong class="text-danger"> *</strong></label>
            <input v-model="form.descripcion" type="text" class="form-control" placeholder="Inserte Descripcion">
        </div>
        <div class="form-group">
            <label>Ficha de Servicio<strong class="text-danger"> *</strong></label>
            <input v-model="form.id_fichaserv" type="text" class="form-control" placeholder="Inserte Id Ficha de servicio">
        </div>
        <div class="button-container">
            <button id="submitButton" class="btn btn-lg btn-info">
                <h5  class="mb-0">Añadir</h5>   
            </button>  
        </div>
    </form>
</div>
</template>

<script>
export default {
    data(){
    return{
      isOpen:false,
      form:{
        fec_entrada:null, descripcion:null, id_fichaserv:null
      }
    }
  },
  methods:{
    toggleForm(value){
        this.isOpen=value;
    },
    onSubmit(){

      console.log(this.form);
      // Aqui handleamos el formulario

    }
  }

}
</script>

<style scoped>
    .form-container{
    position: fixed;
    top: 20px;
    width: 40%;
    left: 30%;
    z-index:1000
  }

  .button-container{
    text-align: center;
    width: 30%;
    margin:0 auto;
  }

  .close{
    color: black
  }

</style>
