<template>
    <section>
<!--        <NavComponent/>-->
        <ProjectsInfo :publication="publication" :versions="versions" :images="images" :owner="owner"/>
    </section>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken, getAuthenticatedUsername} from '@/dataStorage';
/*import NavComponent from '../components/NavComponent.vue'*/
import ProjectsInfo from '@/components/infoComponent.vue';

const requestPath = '/api/publication/';
const requestPathVersions1 = '/api/publication/';
const requestPathVersions2 = '/version/all';

export default {
    name: 'ProjectsInfoView',
    beforeCreate( ){
        let getPublicationURL = this.$store.state.backURL + requestPath + this.$route.params.id;
        if (this.$route.query.version != undefined) {
            getPublicationURL = getPublicationURL + '?version='  + this.$route.query.version
        }
        console.log(getPublicationURL)
        axios.get(getPublicationURL,
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
                  this.images = [];
                  for (let i = 0; i < response.data.version.imagesList.length; i++) {
                      this.images.push({
                          text: response.data.version.imagesList[i].fileName,
                          url: response.data.version.imagesList[i].fileData
                      })
                  }
                  this.owner = getAuthenticatedUsername() == null || getAuthenticatedUsername() != this.publication.username ? false : true;
                  /*console.log(this.images);*/
              }
          }).catch( error => {
              console.log(error);
              if( error.response.status === 400){
                  alert(error)
              }else{
                  alert("Error de servidor")
              }
          });
        console.log(this.$store.state.backURL + requestPathVersions1 + this.$route.params.id + requestPathVersions2);
        axios.get(this.$store.state.backURL + requestPathVersions1 + this.$route.params.id + requestPathVersions2,
          {
              'headers': {
                  'Authorization' : getAuthenticationToken()
              }
          }).then( response => {
              if(response.status !== 202){
                  alert("Error de servidor");
              }else{
                  this.versions = response.data;
                  /*console.log('versions--> ' + JSON.stringify(this.versions));*/
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
    data(){
        return{
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
        }
    },
    components: {
        ProjectsInfo,
        /*NavComponent*/
    },
}

</script>

<style scoped>

/*section{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}*/

/*div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}*/
</style>