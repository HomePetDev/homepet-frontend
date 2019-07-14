<template>
   <div>
        <form>

            <div class="form-group" >
                <label >Nombre de Actividad</label>
                <input type="text" class="form-control" placeholder="Inserte Nombre">
            </div>

            <div class="form-group">
                <label>Descripcion de Actividad</label>
                <input type="text" class="form-control" placeholder="Inserte Descripcion">
            </div>
            <div class="form-group">
                <label>Precio de Actividad</label>
                <input type="number" class="form-control" placeholder="Inserte Precio">
            </div>
            <button type="submit" class="btn btn-primary">Agregar Actividad</button>

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