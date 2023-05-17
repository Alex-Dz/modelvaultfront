<template>
    <section>
        <div class="container">
            <div class="header">
                <div class="title">
                    <h3>/Titulo Proyecto</h3>
                    <p>/Etiquetas</p>
                </div>
                
                <div class="update">
                    <a href="">Update</a>
                </div>
            </div>
            <div class="Vista-previa">

            </div>
            <div class="bot">
                <div class="detalles">
                    <div class="clasificaión">
                        <starRating @rated="getStars" />
                    </div>
                    <p>/Colaboradores</p>
                    <h5>/Descripción</h5>
                </div>
                <div class="cambios">
                    <versions />
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
    import starRating from './StarRating.vue';
    import versions from './versionsComponent.vue';

    export default {
        name: 'ProjectsInfo',
        components: {
            starRating,
            versions
        },
        methods: {
            getStars(rating) {
                // Get the value
                const val = parseFloat(rating);
                // Turn value into number/100
                const size = val/5*100;
                return `${size}%`;
            }
        }
    }  
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 80%;
    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10%;
        border-radius: 10px;
        margin-top: 4rem;
    }

    .title{
        margin-left: 1rem;
    }

    a {
        padding: 0;
        text-decoration: none;
        color: black;
    }

    
    .update{
        width: 8rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: #9F19FF;
        margin-right: 1rem;
    }

    .Vista-previa{
        width: 100%;
        height: 16rem;
        border-radius: 10px;
        background-color: #9F19FF;
        margin-top: 1rem;
    }

    .bot{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 20rem;
        border-radius: 10px;
        margin-top: 1rem;
        word-break: break-all;
    }

    .detalles{
        margin-left: 1rem;
    }

    .cambios{
        margin-right: 1rem;
        background-color: aliceblue;
        width: 40%;
        border-radius: 10px;
    }

</style>