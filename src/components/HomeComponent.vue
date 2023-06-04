<template>
<!--    <div class="container">
        <div class="poster">
            <input class="bar" placeholder="Bienvenido, ¿Qué estas buscando?">
                <a class="boton-buscar">Buscar</a>
        </div>
    </div>-->
    <div class="container py-3">
            <div class="row mx-auto">
                <div class="col">
                    <section class="py-2 py-xl-3">
                        <div class="container">
                            <div class="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3" data-bss-baguettebox="">
                                <div class="col" v-for="publication in publications" :key="publication.id">
                                    <a :href="'/publication/' + publication.id + '?version=last'">
                                        <div class="home-card">
                                            <img class="rounded fit-cover img-fluid d-block"
                                                :src="publication.cover.fileData">
                                        </div>
                                        <div class="py-4">
                                            <h4>{{publication.title}}</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <loading v-model:active="isLoading" :color="'#9F19FF'" :background="'#2D123A'" :is-full-page="true"></loading>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken} from '@/dataStorage';
import Loading from 'vue-loading-overlay';

const requestPath = '/api/publication/post'

export default {

    name: 'HomeComponent',
    data(){
        return{
            publications: [],
            isLoading: false,
        }
    },
    components: {
        Loading
    },
    beforeCreate() {
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
}
</script>
    
<style>
    /*.container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }*/
</style>