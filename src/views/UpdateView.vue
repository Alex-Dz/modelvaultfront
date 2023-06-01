<template>
    <section>
        <NavComponent/>
        <div class="form-container">
            <form class="form" @submit.prevent="submitForm">
                <h3>Actualiza tu idea</h3>
                <div>
                    <h4>{{ title }}</h4>
                </div>
                <div>
                    <input type="text" id="title" placeholder="Título" v-model="title" required>
                </div>
                <div>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="Descripción" v-model="description" required></textarea>
                </div>
<!--                <div class="container-archivo">
                    <label for="archivo">Adjunta tu Archivo</label>
                    <input class="archivo" v-on:change="onFileChange" id="archivo" type="file">
                    <span v-show="check">✅</span>
                </div>-->
                <button type="submit">Actualizar Idea</button>
<!--                <button id="deleteButton" class="btn btn-danger" type="button" @click="edit">Delete</button>-->
            </form>
        </div>
<!--        <div class="cambios">
            <versions-component/>
        </div>-->
    </section>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken, getAuthenticatedUsername} from '@/dataStorage';
import NavComponent from '../components/NavComponent.vue'
/*import versionsComponent from '../components/versionsComponent.vue'*/

const requestPath = '/api/publication/';
const requestPathEdit = '/api/publication/edit'

export default {
    name: 'UpdateView',
    components: {
        /*versionsComponent,*/
        NavComponent
    },
    data() {
        return {
            title: "",
            description: "",
            publitacion: Object
        }
    },
    beforeCreate() {
        if( getAuthenticationToken() == null + ' ' + null ) {
            this.$router.push( {name: 'LoginView'} )
            console.log('need to login: redirect to login');
        } else {
            console.log(this.$store.state.backURL + requestPath + this.$route.params.id)
            axios.get(this.$store.state.backURL + requestPath + this.$route.params.id,
              {
                  'headers': {
                      'Authorization' : getAuthenticationToken()
                  }
              }).then( response => {
                  if(response.status !== 202){
                      alert("Error de servidor");
                  }else{
                      /*console.log(response);*/
                      this.publication = response.data;
                      /*console.log(this.publication);*/
                      this.title = this.publication.title;
                      this.description = this.publication.description;
                  }
              }).catch( error => {
                  console.log(error);
                  if( error.response.status === 400){
                      alert(error)
                  }else{
                      alert("Error de servidor")
                  }
              });
        }
    },
    created() {
        // Aquí debes cargar los datos existentes del proyecto a actualizar.
    },
    methods: {
        submitForm() {
            axios.post(this.$store.state.backURL + requestPathEdit,
               {
                   id: this.publication.id,
                   title: this.title.trim(),
                   description: this.description.trim(),
                   username: getAuthenticatedUsername(),
                   imagesList: [],
                   filesList: []
               },
               {
                   'headers': {
                       'Authorization' : getAuthenticationToken()
                   }
               }).then( response => {
                   if(response.status !== 201){
                       alert("Error de servidor");
                   }else{
                       /*console.log(response);*/
                       this.$router.push( {name: 'ProjectsInfoView', params: {id: response.data.id}} )
                   }
               }).catch( error => {
                   console.log(error);
                   if( error.response.status === 400){
                       alert(error)
                   }else{
                       alert("Error de servidor")
                   }
               });
        },
        onFileChange(event){
            this.file = event.target.files[0];
            this.check = !!this.file;
        }
    }
};
</script>

<!-- Los estilos se mantienen iguales -->
<style scoped>

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Cambiar a 100vh para ajustar a la altura de la ventana */
    width: 70%; /* Cambiar a 100vw para ajustar al ancho de la ventana */
    border: 2px solid #3f80a6;
    border-radius: 15px;
    padding: 2rem;
    box-sizing: border-box;
    margin-top: 3rem;
}

.form {
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-content: center;
  width: 50%; /* Ajustar el ancho del formulario al contenedor */
  height: 100%; /* Ajustar la altura del formulario al contenedor */
  box-sizing: border-box; /* Incluir el padding en las dimensiones del formulario */
}

.form > h3 {
  display: flex;
  justify-content: center;
}

div {
  width: 100%;
}

input,
textarea {
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  border: 0;
  margin: 5px 0;
  resize: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container-archivo{
    display: flex;
    justify-content: center;
}

input[type="file"]{
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

label[for="archivo"]{
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    transition: all .2s;
    cursor: pointer;
    padding: 2px;
    width: fit-content;
    text-align: center;
}

label[for="archivo"]:hover{
    color: #9F19FF;
}

button {
  margin-top: 2rem;
  border: 0;
  border-radius: 5px;
  padding: 1rem;
  background-color: #9F19FF;
  font-size: 1rem;
  font-weight: bold;
}

.cambios{
    margin-top: 1rem;
    background-color: aliceblue;
    width: 40%;
    border-radius: 10px;
}
</style>