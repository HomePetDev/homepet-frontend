<template>
  <div>
    <form>
      <div class="form-group" >
          <label >Cedula cliente</label>
          <input type="text" class="form-control" placeholder="Inserte Cedula">
      </div>

      <div class="form-group">
          <label>Contraseña</label>
          <input type="password" class="form-control" placeholder="Inserte contraseña asignada">
      </div>
      <div class="form-group">
          <label>Nombre Cliente</label>
          <input type="text" class="form-control" placeholder="Inserte Nombre">
      </div>
      <div class="form-group">
          <label>Direccion</label>
          <input type="text" class="form-control" placeholder="Inserte Direccion">
      </div>
      <div class= "form-group">
          <label>Telefono</label>
          <input type="text" class="form-control" placeholder="Inserte Telefono">
      </div>
      <div class="form-group">
          <label>Correo Electronico</label>
          <input type="text" class="form-control" placeholder="Inserte Correo">
      </div>
      
      <button type="submit" class="btn btn-primary">Agregar Cliente</button>

    </form>


  </div>
</template>

<script>
export default {

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
    .form-group{
        min-width:30% ;
    }
</style>