<template>
    <section>
        <NavComponent/>
        <section class="contenedor">
            <section class="formulario">
                <form @submit="loginMethod" >
                    <h3>Nos alegra verte por aquí de nuevo</h3>
                    <div>
                        <input type="text" id="username" placeholder="Nombre de Usuario" v-model="username" required>
                    </div>
                    <div>
                        <input type="password" id="password" placeholder="Contraseña" v-model="password" required>
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </section>
        </section>
    </section>
</template>

<script>
import axios from 'axios';
import NavComponent from '../components/NavComponent.vue'
import {setAuthenticationToken} from '@/dataStorage';
import {getAuthenticationToken} from '@/dataStorage';
import {setAuthenticationBearer} from '@/dataStorage';
import {setAuthenticatedUsername} from '@/dataStorage';
import {setAuthenticatedName} from '@/dataStorage';

const requestPath = '/api/login';

export default {
    name: 'LoginView',
    components: {
        NavComponent
    },
    data(){
        return{
            username: '',
            password: ''
        }
    },
    beforeCreate() {
        if( getAuthenticationToken() != null + ' ' + null ) {
            this.$router.push( {name: 'HomeView'} )
        }
    },
    methods:{
        loginMethod( event ){
            axios.post(this.$store.state.backURL + requestPath,
            {
                username: this.username.trim(),
                password: this.password.trim()
            }).then( response => {
                if(response.status !== 202){
                    alert("Error de servidor");
                }else{
                    /*console.log(response);*/
                    setAuthenticationToken(response.data.token);
                    setAuthenticationBearer(response.data.bearer);
                    setAuthenticatedUsername(response.data.username);
                    setAuthenticatedName(response.data.name);
                    /*alert("Usuario registrado exitosamente");*/
                    /*console.log(getAuthenticationToken());*/
                    this.$router.push( {name: 'HomeView'} );
                    this.$router.go();
                }
            }).catch( error => {
                console.log(error);
                if( error.response.status === 400){
                    alert(error)
                }else{
                    alert("Error de servidor")
                }
            });
        event.preventDefault();
        return true;
        }
    },
};
</script>

<style scoped>
    div {
      width: 100%;
    }
</style>
