<template>
    <section>
        <div class="card" @click="redirectToProjectsInfo">
            <section class="text">
                <section class="top">
                    <div class="head">
                        <div class="izquierda">
                            <h2>/Titulo {{publication.title}}</h2>
                            <h6>/Fecha de modificiaión {{publication.lastUpdatedDate}}</h6>
                        </div>           
                        <div class="derecha">
                            <h4>/commit</h4>
                            <img src="../assets/settings-gear-combination-svgrepo-com.svg" alt="">
                        </div>
                    </div>
                    <h4>/Colaboradores {{publication.username}}</h4>
                </section>
                <div class="foot">
                    <h3>/Descripción {{publication.description}}</h3>
                    <img src="../assets/menu-svgrepo-com.svg" alt="">
                </div>
            </section>
            <div class="placeholder-image">

            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'CardComponent',
        props: {
            publication: Object
        },
        methods: {
            redirectToProjectsInfo(){
                this.$router.push('/info-proyecto');
            },
        },
    }
</script>

<style scoped>
.card {
    display: flex;
    background-color: white; 
    border-radius: 10px;
    width: 50rem;
    height: 8rem;
    justify-content: space-between;
    margin-top: 1rem;
    cursor: pointer;
}

.text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
}

h4{
    margin: 0.5rem;
    display: inline;
}

.head{
    display: flex;
    justify-content: space-between; 
}

.izquierda{
    display: flex;
    flex-direction: row;
    align-items: end;
}

.izquierda > * {
    margin-left: 1rem;
}

.derecha{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.derecha > * {
    margin-right: 0.5rem;
}

.placeholder-image{
    background-color: grey;
    height: 100%;
    width: 10rem;
    border-radius: 0 10px 10px 0;
}

img {
    width: 20px;
    height: 20px;
    margin: 0 0 0 0;
}

.foot{
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
}

.foot > * {
    margin: 0.5rem;
}
</style>