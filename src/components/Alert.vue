<template>
  <div>
    <div class="notification alert alert-dismissible alert-danger"
      v-show="alert.type == 'alert-danger'"
    >
      <button  @click="closeAlert()" type="button" class="close" >&times;</button>
      <p class="mb-0">{{alert.msg}} </p>
    </div>
    <div class="notification alert alert-dismissible alert-warning"
      v-show="alert.type == 'alert-warning'"
    >
      <button @click="closeAlert()" type="button" class="close" >&times;</button>
      <p class="mb-0">{{alert.msg}} </p>
    </div>
    <div class="notification alert alert-dismissible alert-success"
      v-show="alert.type == 'alert-success'"
    >
      <button @click="closeAlert()" type="button" class="close" >&times;</button>
      <p class="mb-0">{{alert.msg}} </p>
    </div>
    <div class="notification alert alert-dismissible alert-info"
      v-show="alert.type == 'alert-info'"
    >
      <button @click="closeAlert()" type="button" class="close" >&times;</button>
      <p class="mb-0">{{alert.msg}} </p>
    </div>
  </div>


</template>

<script>

  import { mapState, mapActions } from "vuex"

  export default {
    name:"alert",
    data(){
      return{

      }
    },
    computed:{
      ...mapState('control', ["alert"]),
    },
    methods:{
      ...mapActions("control",["closeAlert"])
    }
  }
</script>

<style scoped>
  .notification{
    position: fixed;
    bottom: 5px;
    left:2%;
  }


</style>
