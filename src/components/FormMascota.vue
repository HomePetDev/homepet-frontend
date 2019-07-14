<template>
    <div>
        <form>
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
    <label>Fecha de Nacimiento</label>
    <form class="form-inline">
    <div class="form-group form-group-inline">
        <input type="text" class="form-control" placeholder="DD">
    </div>
    <div class="form-group form-group-inline">
        <input type="text" class="form-control" placeholder="MM">
    </div>
    <div class="form-group form-group-inline">
        <input type="text" class="form-control" placeholder="AAAA">
    </div>
    </form>
    

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

      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>

</form>
<form>
    <fieldset>
        <div>
            <label>Cedula Veterinario</label>
            <input type="text" class="form-control" placeholder="Inserte Cedula">
        </div>
        <div>
            <label>Telefono Veterinario</label>
            <input type="text" class="form-control" placeholder="Inserte Nro. de Telefono">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
</form>

<form>
    <fieldset>
        <div>
            <label>Enfermedades</label>
            <input type="text" class="form-control" placeholder="Inserte Enfermedad">
            <small> inserte una enfermedad y haga submit por cada enfermedad que haya contraido la mascota</small>

        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
</form>


    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .form-group{
        min-width:30% ;
    }


</style>
