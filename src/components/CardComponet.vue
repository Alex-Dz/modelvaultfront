<template>
    <section>
        <div class="tarjeta" @click="redirectToProjectsInfo">
            <section class="text">
                <section class="top">
                    <div class="head">
                        <div class="izquierda">
                            <h2>{{publication.title}}</h2>
                            <h6>Fecha de modificación {{publication.lastUpdatedDate}}</h6>
                        </div>           
                        <div class="derecha">
                            <h4>/commit</h4>
                            <img class="icon" src="../assets/settings-gear-combination-svgrepo-com.svg" alt="">
                        </div>
                    </div>
                    <h4>Colaboradores {{publication.username}}</h4>
                </section>
                <div class="foot">
                    <h3>{{publication.description}}</h3>
                    <img class="icon" src="../assets/menu-svgrepo-com.svg" alt="">
                </div>
            </section>
            <div class="placeholder-image">
                <img class="cover" :src="publication.cover.fileData">
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
                this.$router.push('/publication/' + this.publication.id);
            },
        },
    }
</script>

<style scoped>
.icon {
    width: 20px;
    height: 20px;
    margin: 0 0 0 0;
}
.cover{
	height: 100%;
	width: 10rem;
	border-radius: 0 10px 10px 0;
}
</style>