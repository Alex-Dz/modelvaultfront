<template>
    <Nav />
    <Home />
</template>

<script>

/*
    Es el componente que va a reurnir todos los demás componentes de nuestro proyecto
*/

import Nav from './components/NavComponent.vue'
import Home from './components/HomeComponent.vue'

export default {
name: 'App',
components: {
    Nav,
    Home,
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
