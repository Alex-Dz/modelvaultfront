<template>
  <SignUp/>
  
</template>

<script>
  import SignUp from './views/SignUp.vue'
  export default {
    nameItem: "singUp",
    components: {
      SignUp
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