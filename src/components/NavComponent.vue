<template>
    <nav>
        <section id="menu">
            <a href="/"><img class="logo" src="../assets/modelVLogo.png" alt="Model Vault"></a>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/publications">Mis proyectos</a></li>
<!--                <li><a href="#">Discussion</a></li>-->
            </ul>
        </section>
        <section id="user">
        <div v-if="isUserInSession">
            <a id="username" class="logIn" href="/profile">{{username}} | Perfil</a>
            <button id="logout" type="button" @click="logout">Cerrar sesión</button>
        </div>
        <div v-if="!isUserInSession">
            <a id="logIn" href="/iniciar-sesion">Iniciar sesión</a>
            <a id="signUp" href="/registro">Registrarse</a>
        </div>
        </section>
    </nav>
</template>

<script>
import {getAuthenticatedUsername} from '@/dataStorage';

export default {
    nameItem: 'Nav',
    data: () => ({
        isUserInSession: getAuthenticatedUsername() != null ? true : false,
        username: getAuthenticatedUsername()
    }),
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push( {name: 'HomeView'} );
            this.$router.go();
        }
    }
};
</script>

<style scoped>
    /*nav{
        background-color: var(--dark-theme);
        width: 100%;
        height: 8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }
    .logo{
        width: 50px;
        height: 60px;
        margin: 2rem;
    }

    #menu{
        display: flex;
        align-items: center;
        margin: 0 0 0 2rem;
        color: var(--blanco);
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }*/
    
    /*a {
        font-size: large;
        padding: 1rem;
        text-decoration: none;
        color: var(--blanco);
    }

    a:hover{
        cursor: pointer;
    }

    #user{
        margin: 0 2rem 0 0;
    }

    #logIn{
        background-color: var(--blanco);
        padding: 1rem;
        margin: 1rem;
        border-radius: 10px;
        color: var(--negro);
    }

    #signUp{
        background-color: var(--secundario);
        padding: 1rem;
        border-radius: 10px;
    }

    #logout{
        background-color: var(--blanco);
        padding: 1rem;
        margin: 1rem;
        border-radius: 10px;
    }*/

</style>