<template>
   <div>
        <form>

            <div class="form-group" >
                <label >Nombre de Servicio</label>
                <input type="text" class="form-control" placeholder="Inserte Nombre">
            </div>

            <div class="form-group">
                <label>Descripcion de Servicio</label>
                <input type="text" class="form-control" placeholder="Inserte Descripcion">
            </div>
            <button type="submit" class="btn btn-primary">Agregar Servicio</button>

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