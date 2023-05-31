<template>
    <section>
        <div class="container">
            <div class="crear-container">
                <a href="/crear-proyecto" class="crear">Crea Proyecto</a>
            </div>
            <Card   v-for="publication in publications"
                    :key="publication.id"
                    :publication="publication"
            />
        </div>
        <loading v-model:active="isLoading" :color="'#9F19FF'" :background="'#2D123A'" :is-full-page="true"></loading>
    </section>

</template>

<script>
import axios from 'axios';
import {getAuthenticationToken} from '@/dataStorage';
import Card from '@/components/CardComponet.vue';

import Loading from 'vue-loading-overlay';
//import '/vue-loading-overlay/dist/css/vue-loading.css';

const requestPath = '/api/publication/all'

export default {
    name: 'ProyectsView',
    data(){
        return{
            publications: [],
            isLoading: false,
        }
    },
    components: {
        Card,
        Loading,
    },
    beforeCreate(){
        if( getAuthenticationToken() == null + ' ' + null ) {
            this.$router.push( {name: 'LoginView'} )
            console.log('need to login: redirect to login');
        } else {
            this.isLoading = true;
            axios.get(this.$store.state.backURL + requestPath,
              {
                  'headers': {
                      'Authorization' : getAuthenticationToken()
                  }
              }).then( response => {
                  if(response.status !== 200){
                      alert("Error de servidor");
                  }else{
                      console.log(response);
                      this.publications = response.data;
                  }
              }).catch( error => {
                  console.log(error);
                  if( error.response.status === 400){
                      alert(error)
                  }else{
                      alert("Error de servidor")
                  }
              }).finally(() => {
                  this.isLoading = false;
              });
        }
    },
};

</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
}

.crear-container{
    display: flex;
    justify-content: flex-end;
    width: 50rem;
}

a {
    padding: 0;
    text-decoration: none;
    color: black;
}

.crear{
    width: 8rem;
    height: 2rem;
    border-radius: 10px;
    background-color: #9F19FF;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.crear:hover{
    cursor: pointer;
}

</style>