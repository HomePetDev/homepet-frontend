<template>
  <div id="app">
    <Navbar v-show="!isInLoginPage"/>
    <div id="main-container" class="container" >
      <router-view/>
    </div>
    <Alert/>
    <FooterVue v-show="!isInLoginPage"/>
  </div>
</template>

<script>

  import {mapState, mapActions} from "vuex"


  import Navbar from "@/components/Navbar.vue";
  import FooterVue from "@/components/Footer.vue";
  import Alert from "@/components/Alert.vue";
export default {
  name:'app',
  components:{
    Navbar, FooterVue, Alert
  },
  computed:{
    
    isInLoginPage(){
      return this.$route.path === '/login'
    }
  },
  methods:{
    ...mapActions("auth", ["loggedIn"]),
  },
  created(){
    this.loggedIn();
    
  }
}
</script>


<style>
  
  html, body, #app{
    height: 100%;
    margin: 0;
  }

  
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }

  #main-container{
    flex: 1 0 auto;

  }
 


</style>
