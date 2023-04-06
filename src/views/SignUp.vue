<template>
    <SignUp>
        <form @submit="signUp">
            <div>
                <label for="username">Nombre de Usuario</label>
                <input type="text" id="username" v-model="username" required> 
            </div>
            <div>
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" required> 
            </div>    
            <div>
                <label for="repeatPassword">Repetir Contraseña</label>
                <input type="password" id="repeatPassword" v-model="repeatPassword" required> 
            </div>
            <div>
                <label for="name">Nombre</label>
                <input type="text" id="name" v-model="name"> 
            </div>
            <div>
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model="email" required> 
            </div>
        </form>

        <button type="submit">Registrarse</button>
    </SignUp>
</template>

<script>
    import axios from 'axios' 

    //import Nav from '../components/NavComponent.vue'

    const path = '/registro';

    export default {
        nameItem: 'SignUp',
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
            signUp( event ){
                if( this.password !== this.repeatPassword){
                    event.preventDefault();
                    return;
                }
                axios.post( this.$store.state.backURL + path,
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
                    if( error.response.status === 400){
                        alert(error)
                    }else{
                        alert("Error de servidor")
                    }
                });
            event.preventDefault();
            return true;
            }
        }
    };
</script>

<style scoped>

</style>