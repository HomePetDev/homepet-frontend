<template>
<div class="searcher" >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
    <input class="form-control mr-sm-2" type="text" placeholder="Buscar mascotas...">
    <button class="btn btn-primary mr-sm-2" type="button" >Buscar</button>
    <router-link to="/gerente/mascotas/crear">
                <button type="button" class="btn btn-info">+Agregar</button>
            </router-link>
    </nav>

        <h2>Estas son las mascotas</h2>
 </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
    .searcher{
        padding: 10px;
    }
</style>
