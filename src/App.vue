<template>
   <Nav/>
  <router-view/>
  <FooterComponent/>
</template>

<script>
import Nav from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
  export default {
    nameItem: "App",
    components: {
      Nav,
      FooterComponent
    }
  }

</script>

<style>

    
  /*html, body{
    !*background-color: var(--dark-theme);*!
    width: 100%;
    height: 100%;
    }*/
</style>