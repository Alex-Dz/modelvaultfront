<template>
    <div class="container">
        <div class="poster">
            <input class="bar" placeholder="Bienvenido, ¿Qué estas buscando?">
                <a class="boton-buscar">Buscar</a>
        </div>
    </div>
</template>

<script>
    export default {
            nameItem: 'home'
        };
</script>
    
<style>
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    .poster {
        background-color: #3f80a6;
        width: 80%;
        height: 25rem;
        margin-top: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bar {
        background-color: white;
        width: 60%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 15px 0 0 15px;
        color: #4D4352;
        border: 0;
        text-indent: 1rem;
        font-size: medium;
    }

    .boton-buscar{
        background: white;
        border-left: 1px solid #5555;
        padding: 6px 1rem 5px 0.8rem;
        border-radius: 0 15px 15px 0;
        font-size: large;
    }

    .boton-buscar:hover{
        cursor: pointer;
    }
</style>