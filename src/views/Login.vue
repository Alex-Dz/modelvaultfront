<template>
    <section class="container">
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
    
</template>

<script>
import axios from 'axios';
import {setAuthenticationToken} from '@/dataStorage';
import {setAuthenticationBearer} from '@/dataStorage';
import {setAuthenticatedUsername} from '@/dataStorage';
import {setAuthenticatedName} from '@/dataStorage';
/*import {getAuthenticationToken} from '@/dataStorage';*/

const requestPath = '/api/login';

export default {
    name: 'LoginView',
    data(){
        return{
            username: '',
            password: ''
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.formulario {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #3f80a6;
  border-radius: 15px;
  padding: 2rem;
  box-sizing: border-box;
  margin-top: 3rem;
}

form {
  display: grid;
  grid-template-columns: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 40%; /* Ajustar el ancho del formulario al contenedor */
  height: 100%; /* Ajustar la altura del formulario al contenedor */
  box-sizing: border-box; /* Incluir el padding en las dimensiones del formulario */
}

form > h3 {
  display: flex;
  justify-content: center;
  text-align: center;
}

div {
  width: 100%;
}

input {
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  border: 0;
  margin: 5px 0;
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
