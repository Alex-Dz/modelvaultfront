<template>
    <section>
        <div class="container">
            <div class="header">
                <div class="title">
                    <h3>{{publication.title}}</h3>
<!--                    <p>/Etiquetas</p>-->
                </div>
                <button v-if="owner == true" id="edit" class="boton" type="button" @click="edit">Editar</button>
            </div>
            <div class="Vista-previa">
                <VueCarousel class="carrusel" :data="slides" />
            </div>
            <div class="bot">
                <div class="detalles">
                    <div class="clasificaión">
                        <starRating @rated="getStars" :rating="publication.score"/>
                    </div>
                    <p>{{publication.username}} (Versión {{publication.version.versionNumber}})</p>
                    <h5>{{publication.description}}</h5>
                </div>
                <div class="bloque-veriones">
                    <button v-if="owner == true" id="newVersion" class="boton" type="button" @click="newVersion">Nueva versión</button>
                    <div class="cambios">
                        <downloadFiles :files="publication.version.filesList"></downloadFiles>
                    </div>
                    <div class="cambios">
                        <versions :versions="versions"/>
                    </div>
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
            },
            owner: {
                type: Boolean,
                default: false
            }
        },
        beforeCreate() {
            /*console.log(this.versions);*/
            /*console.log(this.owner);*/
        },
        data() {
            return {
                check: false
            }
        },
        computed: {
            slides() {
                return this.images.map(image => 
                    h('div', { class: '' }, [
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
            edit() {
                let url = '/publication/' + this.publication.id + '/edit';
                console.log(url);
                this.$router.push({path: url, params: {publication: this.publication}});
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

    a {
        padding: 0;
        text-decoration: none;
        color: black;
    }

/*    .update{
        width: 10rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: #9F19FF;
        margin-right: 1rem;
    }*/

</style>