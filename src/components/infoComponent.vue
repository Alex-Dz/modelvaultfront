<template>
    <section>
        <div class="container">
            <div class="header">
                <div class="title">
                    <h3>/{{publication.title}}</h3>
                    <p>/Etiquetas</p>
                </div>
                
                <div class="update">
                    <a href="/actualizar">Update</a>
                </div>
            </div>
            <div class="Vista-previa">
                <VueCarousel class="carrusel" :data="slides" />
            </div>
            <div class="bot">
                <div class="detalles">
                    <div class="clasificaión">
                        <starRating @rated="getStars" :rating="publication.score"/>
                    </div>
                    <p>/{{publication.username}}</p>
                    <h5>/{{publication.description}}</h5>
                </div>
                <button id="newVersion" class="update" type="button" @click="newVersion">New version</button>
                <div class="cambios">
                    <downloadFiles :files="publication.version.filesList"></downloadFiles>
                </div>
                <div class="cambios">
                    <versions :versions="versions"/>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    import {getAuthenticationToken, getAuthenticatedUsername} from '@/dataStorage';
    import starRating from './StarRating.vue';
    import versions from './versionsComponent.vue';
    import VueCarousel from '@chenfengyuan/vue-carousel';
    import { h } from 'vue';
    import downloadFiles from './DownloadFilesComponent.vue';

    const requestPath = '/api/publication/vote';

    export default {
        name: 'ProjectsInfo',
        components: {
            starRating,
            versions,
            VueCarousel,
            downloadFiles
        },

        props: {
            publication: Object,
            versions: {
                type: Array,
                default: () => [],
            },
            images: {
                type: Array,
                default: () => [
                    { text: 'Slide 1', url: 'https://via.placeholder.com/150' },
                    { text: 'Slide 2', url: 'https://via.placeholder.com/150' }
                ]
            }

        },
        beforeCreate() {
            if( getAuthenticationToken() == null + ' ' + null ) {
                this.$router.push( {name: 'LoginView'} )
                console.log('need to login: redirect to login');
            }
            console.log(this.versions);
        },
        data() {
            return {
                file: null,
                check: false
            }
        },
        computed: {
            slides() {
                return this.images.map(image => 
                    h('div', { class: 'example-slide' }, [
                        h('img', { src: image.url, class: 'slide-image' }),
                        image.text ? h('p', image.text) : null
                    ])
                );
            }
        },
        methods: {
            getStars(rating) {
                // Get the value
                const val = parseFloat(rating);
                // Turn value into number/100
                const size = val/5*100;
                console.log('star-> ' + val);
                console.log('versionId-> ' + this.publication.version.versionId);
                axios.post(this.$store.state.backURL + requestPath,
                   {
                       publicationId: this.publication.id,
                       username: getAuthenticatedUsername(),
                       versionId: this.publication.version.versionId,
                       score: val
                   },
                   {
                       'headers': {
                           'Authorization' : getAuthenticationToken()
                       }
                   }).then( response => {
                       if(response.status !== 202){
                           alert("Error de servidor")
                       }else{
                           console.log(response);
                           /*this.publication.score = val;*/
                           return `${size}%`;
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
            newVersion() {
                let url = '/publication/' + this.publication.id + '/new-version';
                console.log(url);
                this.$router.push({path: url, params: {publication: this.publication}});
            }
        }
    }  
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 95%;
    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10%;
        border-radius: 10px;
        margin-top: 4rem;
    }

    .title{
        margin-left: 1rem;
    }

    a {
        padding: 0;
        text-decoration: none;
        color: black;
    }

    
    .update{
        width: 10rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: #9F19FF;
        margin-right: 1rem;
    }

    .Vista-previa{
        width: 100%;
        height: 400px; /* Definir una altura fija */
        border-radius: 10px;
        background-color: #9F19FF;
        margin-top: 1rem;
        overflow: hidden;
    }
    
    .Vista-previa img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slide-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    

    .carrusel {
        width: 100%;  /* Asegurar que el carrusel ocupe todo el ancho */
        height: 100%; /* Asegurar que el carrusel ocupe toda la altura */
        display: flex; /* Esto permitirá centrar la imagen en caso de que sea demasiado pequeña */
        justify-content: center; /* Centrar horizontalmente */
        align-items: center; /* Centrar verticalmente */
    }
    
    .example-slide {
        align-items: center;
        background-color: #666;
        color: #999;
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        min-height: 10rem;
        width: 100%; /* Asegurarse de que el slide ocupe todo el ancho */
        height: 100%; /* Asegurarse de que el slide ocupe toda la altura */
    }
    
    .example-slide img {
        max-width: 100%;  /* Hacer que la imagen no exceda el ancho del slide */
        max-height: 100%; /* Hacer que la imagen no exceda la altura del slide */
        object-fit: contain; /* Esta regla hará que la imagen cubra todo el slide sin estirarse ni aplastarse */
        border-radius: 10px;
        background-repeat: no-repeat;
    }
    

    .bot{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 20rem;
        border-radius: 10px;
        margin-top: 1rem;
        word-break: break-all;
    }

    .detalles{
        margin-left: 1rem;
    }

    .cambios{
        margin-right: 1rem;
        background-color: aliceblue;
        width: 40%;
        border-radius: 10px;
    }

</style>