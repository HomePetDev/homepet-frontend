<template>
  <div>
    <img :src="getLoadingGif()" alt="" :width="width">
  </div>

</template>

<script>

  import white from "@/assets/rolling-white.gif"
  import black from "@/assets/rolling-black.gif"
  import blue from "@/assets/rolling-blue.gif"
  import green from "@/assets/rolling-green.gif"

  export default {
    name:"loading",
    data(){
      return{
        src:{
          white,
          black,
          blue,
          green
        }
      }
    },
    props:{
      width: Number,
      color: String,
    },
    computed:{
     
      },
    methods:{
      getLoadingGif(){
        return this.src[this.color];
      }
    }
  }
</script>

<style>

</style>
