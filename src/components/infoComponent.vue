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

    const requestPath = '/api/publication/vote';

    export default {
        name: 'ProjectsInfo',
        components: {
            starRating,
            versions
        },
        props: {
            publication: Object,
            versions: {
                type: Array,
                default: () => [],
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
                score: undefined,
                versionId: undefined,
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
        width: 80%;
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
        width: 8rem;
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
        height: 16rem;
        border-radius: 10px;
        background-color: #9F19FF;
        margin-top: 1rem;
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