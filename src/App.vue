<template>
  <!-- <Nav/> -->
  <router-view/>
</template>

<script>
  //import Nav from './components/NavComponent.vue'
  export default {
    nameItem: "App",
    components: {
      //Nav
    }
  }

</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    
  html, body{
    /*background-color: var(--dark-theme);*/
    width: 100%;
    height: 100%;
    }
    
  #app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    background-color: var(--dark-theme);
    }
</style>