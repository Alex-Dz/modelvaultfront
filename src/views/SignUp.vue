<template>
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
            <button type="submit">Registrarse</button>
        </form>
    </section>
</template>

<script>
import axios from 'axios'

const requestPath = '/api/sign-up';

export default {
    name: 'SignUp',
    data(){
        return{
            username: '',
            password: '',
            repeatPassword: '',
            name: '',
            email: ''
        }
    },
    methods:{
        signUpMethod( event ){
            if( this.password !== this.repeatPassword){
                console.log('passwords not match');
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
    .formulario {
        height: 28rem;
        display: grid;
        justify-content: center;
        align-content: center;
        border: 2px solid #3f80a6;
        border-radius: 15px;
        margin: 8rem 16rem ;
    }

    form {
        display: grid;
        grid-template-columns: 100%;
        align-items: center;
        justify-content: center;
        height: 20rem;
        width: 20rem;
    }

    form > h3 {
        display: flex;
        justify-content: center;
    }

    div{
        width: 100%;
    }

    input{
        width: 100%;
        border-radius: 5px;
        padding: .5rem;
        border: 0;
        
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