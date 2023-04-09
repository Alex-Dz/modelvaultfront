<template>
  <Nav/>
  <router-view/>
</template>

<script>
  import Nav from './components/NavComponent.vue'
  export default {
    nameItem: "App",
    components: {
      Nav
    }
  }

</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  
  body{
  background-color: #D9E7F3;
  }
  
  #app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  }
</style>