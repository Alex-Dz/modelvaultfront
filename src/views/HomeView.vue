<template>
    <section>
        <NavComponent/>
        <div class="container">
            
            <div class="row">
                <HomeComponent/>
                <router-view></router-view>
            </div>
        </div>
    </section>
    
</template>

<script>
import {getAuthenticationToken} from '@/dataStorage';
import HomeComponent from '../components/HomeComponent.vue'
import NavComponent from '../components/NavComponent.vue'

export default{
    name: "HomeView",
    components: { 
        HomeComponent,
        NavComponent,
    },
    beforeCreate( ){
        if( getAuthenticationToken() == null + ' ' + null ) {
            /*this.$router.push( {name: 'LoginView'} )*/
            console.log('need to login: redirect to login');
        }
    }
}
</script>

<style>
    .container, .row {
        overflow: auto;
    }

    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100%;
    }
    .row{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .row > * {
        flex-shrink: 0;
    }
    
</style>
