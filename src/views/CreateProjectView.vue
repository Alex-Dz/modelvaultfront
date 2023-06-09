<template>
    <section>
<!--        <NavComponent/>-->
        <div class="form-container">
            <form class="form" @submit.prevent="submitForm">
                <h3>Crea tu nueva idea</h3>
                <div>
                    <input type="text" id="title" placeholder="Título" v-model="title" required>
                </div>
                <div>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="Descripción" v-model="description" required></textarea>
                </div>
                <div class="container-archivo">
                    <label for="imageFiles">Adjunta tus imágenes</label>
                    <fileBase64 id="imageFiles" :multiple=true :done="getImages" :accept="'image/*'" ></fileBase64>
                    <span v-show="checkImages">✅</span>
                </div>
                <div class="container-archivo">
                    <label for="modelFiles">Adjunta tus archivos</label>
                    <fileBase64 id="modelFiles" :multiple=true :done="getFiles" :accept="'.stl'" ></fileBase64>
                    <span v-show="checkModels">✅</span>
                </div>
                <button type="submit">Crear Idea</button>
                <!--<div v-if="checkImages">
                    <img :src="preview" />
                </div>-->
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken,getAuthenticatedUsername} from '@/dataStorage';
import fileBase64 from '../components/vue-file-base64.vue'
/*import NavComponent from '../components/NavComponent.vue'*/

const requestPath = '/api/publication/new'

export default {
    name: 'CreateProjectView',
    components: {
        /*NavComponent,*/
        fileBase64
    },
    beforeCreate( ){
        if( getAuthenticationToken() == null + ' ' + null ) {
            this.$router.push( {name: 'LoginView'} )
            console.log('need to login: redirect to login');
        }
    },
    data() {
        return {
            title: "",
            description: "",
            imagesList: [],
            filesList: [],
            file: null,
            checkImages: false,
            checkModels: false,
            preview: undefined,
        }
    },
    methods: {
        submitForm() {
            /*console.log(getAuthenticationToken());*/
            axios.post(this.$store.state.backURL + requestPath,
                {
                    title: this.title.trim(),
                    description: this.description.trim(),
                    username: getAuthenticatedUsername(),
                    imagesList: this.imagesList,
                    filesList: this.filesList
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
                      alert(error.response.data)
                  }else{
                      alert(error.response.data)
                  }
                });
        },
        getImages(images) {
            /*console.log(images);*/
            this.imagesList = images;
            this.checkImages = true;
        },
        getFiles(files) {
            /*console.log(files);*/
            this.filesList = files;
            this.checkModels = true;
        },
    }
};
</script>

<style scoped>

section{
    display: flex;
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
</style>
