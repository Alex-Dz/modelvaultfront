<template>
    <section>
       <!-- <NavComponent/> -->
        <section class="contenedor">
            <section class="formulario">
                <form @submit="signUpMethod" >
                    <h3>Sé Nuestra Comunidad</h3>
                    <div>
                        <input type="text" id="username" placeholder="Nombre de Usuario" v-model="username" required>
                    </div>
                    <div>
                        <input type="password" id="password" placeholder="Contraseña" v-model="password" required>
                    </div>
                    <div>
                        <input type="password" id="repeatPassword" placeholder="Repetir Contraseña" v-model="repeatPassword" required>
                    </div>
                    <div>
                        <input type="text" id="name" placeholder="Nombre" v-model="name">
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="E-mail" v-model="email" required>
                    </div>
                    <div class="terms">
                        <input type="checkbox" v-model="check">
                        <p>Acepta nuestros <span @click="openModal">Terminos y Condiciones</span>.</p>
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            </section>
            <Modal class="card-terminos-condiciones" title="Términos & Condiciones" v-model:visible="isVisible">
                <TerCons/>
            </Modal>
        </section>
    </section>
</template>

<script>
import axios from 'axios'
// import NavComponent from '../components/NavComponent.vue'
import TerCons from '../components/TerminosCondicionesComponet.vue'

import { Modal } from 'usemodal-vue3';

const requestPath = '/api/sign-up';

export default {
    name: 'SignUp',
    components: {
        // NavComponent,
        Modal,
        TerCons,
    },
    data(){
        return{
            username: '',
            password: '',
            repeatPassword: '',
            name: '',
            email: '',
            isVisible: false,
            check: false
        }
    },
    methods:{
        signUpMethod( event ){
            if( this.password !== this.repeatPassword){
                console.log('passwords not match');
                alert('passwords not match');
                event.preventDefault();
                return;
            }
            if( this.check != true){
                console.log('accept terms & conditions');
                alert('accept terms & conditions');
                event.preventDefault();
                return;
            }
            axios.post(this.$store.state.backURL + requestPath,
            {
                username: this.username.trim(),
                password: this.password.trim(),
                repeatPassword: this.repeatPassword.trim(),
                name: this.name.trim(),
                email: this.email.trim()
            }).then( response => {
                if(response.status !== 201){
                    alert("Error de servidor")
                }else{
                    alert("Usuario registrado exitosamente")
                    this.$router.push( {name: 'LoginView'} );
                    this.$router.go();
                }
            }).catch( error => {
                console.log(error);
                if( error.response.status === 400){
                    alert(error.response.data)
                }else{
                    alert(error.response.data)
                }
            });
            event.preventDefault();
            return true;
        },

        async openModal(){
            this.isVisible = true;
        }
    },
};
</script>

<style scoped>
    div {
        width: 100%;
    }
    div.terms {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.terms input{
        width: auto;
    }
      
    div.terms p {
        margin: 10px;
        align-items: center;
    }
      
     div.terms p span {
        cursor: pointer;
        color: orange;
     }

     .card-terminos-condiciones{
        position: fixed;
        color: black;
     }
     
</style>
