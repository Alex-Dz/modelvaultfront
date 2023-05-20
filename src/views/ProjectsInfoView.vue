<template>
    <section>
        <div>
            <ProjectsInfo :publication="publication"/>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken} from '@/dataStorage';
import ProjectsInfo from '@/components/infoComponent.vue';

const requestPath = '/api/publication/'

export default {
    name: 'ProjectsInfoView',
    beforeCreate( ){
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
                      console.log(response);
                      this.publication = response.data;
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
    data(){
        return{
            publication: Object
        }
    },
    components: {
        ProjectsInfo
    },
}

</script>

<style scoped>

section{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>