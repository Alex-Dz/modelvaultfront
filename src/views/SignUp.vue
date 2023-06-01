<template>
    <section>
        <NavComponent/>
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
                    <button type="submit">Registrarse</button>
                </form>
            </section>
        </section>
    </section>
</template>

<script>
import axios from 'axios'
import NavComponent from '../components/NavComponent.vue'

const requestPath = '/api/sign-up';

export default {
    name: 'SignUp',
    components: {
        NavComponent
    },
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
                    this.$router.push( {name: 'LoginView'} );
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
