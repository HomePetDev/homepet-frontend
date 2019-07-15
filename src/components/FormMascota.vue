<template>
  <div>
    <form 
      class="form-container p-4 bg-light rounded text-dark shadow-sm mb-4"
    >
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h4>Nueva mascota</h4>
        <button  type="button" class="close" >&times;</button>
      </div>
      <div class="form-group" >
        <label >Nombre Mascota</label>
        <input type="text" class="form-control" placeholder="Introducir Nombre">
      </div>
      <div class="form-group">
        <label>Alimento</label>
        <input type="text" class="form-control" placeholder="Inserte tipo de alimento">
      </div>
      <div class="form-group">
        <label>Cantidad</label>
        <input type="text" class="form-control" placeholder="Inserte Cantidad">
      </div>
      <div class="form-group">
        <label>Cedula Dueño</label>
        <input type="text" class="form-control" placeholder="Inserte Cedula">
      </div>
      <fieldset class="form-group">
        <label >Sexo</label>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
            Masculino
          </label>
        </div>
        <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
            Femenino
        </label>
        </div>
      </fieldset>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
      return{
        isOpen:false
      }
    },
    methods:{
      toggleForm(){
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
