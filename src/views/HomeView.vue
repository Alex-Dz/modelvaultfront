<template>
    <div class="container">
        <div class="row">
            <HomeComponent/>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {getAuthenticationToken} from '@/dataStorage';
import HomeComponent from '../components/HomeComponent.vue'

export default{
    name: "HomeView",
    components: { HomeComponent },
    beforeCreate( ){
        if( getAuthenticationToken() == null + ' ' + null ) {
            /*this.$router.push( {name: 'LoginView'} )*/
            console.log('need to login: redirect to login');
        }
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
