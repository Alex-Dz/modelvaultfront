<template>
    <section>
        <div class="container">
            <div class="crear-container">
                <a href="/crear-proyecto" class="crear">Crea Proyecto</a>
            </div>
            <Card />
        </div>
    </section>

</template>

<script>
import Card from '@/components/CardComponet.vue';

//const requestPath = '/api/proyects'

export default {
    name: 'ProyectsView',
    data(){
        return{
            proyects: ''
        }
    },
    components: {
        Card
    },
};

</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
}

.crear-container{
    display: flex;
    justify-content: flex-end;
    width: 50rem;
}

a {
    padding: 0;
    text-decoration: none;
    color: black;
}

.crear{
    width: 8rem;
    height: 2rem;
    border-radius: 10px;
    background-color: #9F19FF;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.crear:hover{
    cursor: pointer;
}


</style>