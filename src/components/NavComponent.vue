<template>
    <nav>
        <section id="menu">
            <a href="#"><img class="logo" src="../assets/modelVLogo.png" alt="Model Vault"></a>
            <ul>
                <li><a href="#">Categories</a></li>
                <li><a href="#">My Proyects</a></li>
                <li><a href="#">Discussion</a></li>
            </ul>
        </section>
        <section id="user">
            <a id="logIn" href="#">Log In</a>
            <a id="signUp" href="/registro">Sign Up</a>
        </section>
    </nav>
</template>

<script>
    export default {
        nameItem: 'nav',
    };
</script>

<style scoped>
    nav{
        background-color: #3f80a6;
        width: 100%;
        height: 8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
        color: white;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    
    a {
        font-size: large;
        padding: 1rem;
        text-decoration: none;
        color: black;
    }

    a:hover{
        cursor: pointer;
    }

    #user{
        margin: 0 2rem 0 0;
    }

    #logIn{
        background-color: white;
        padding: 1rem;
        margin: 1rem;
        border-radius: 10px;
    }

    #signUp{
        background-color: #9F19FF;
        padding: 1rem;
        border-radius: 10px;
    }

</style>