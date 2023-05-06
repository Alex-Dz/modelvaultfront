<template>
    <section>
        <div>
            <ProjectsInfo />
        </div>
    </section>
</template>

<script>

import ProjectsInfo from '@/components/infoComponent.vue';

export default {
    name: 'ProjectsInfoView',
    data(){
        return{
            proyects: ''
        }
    },
    components: {
        ProjectsInfo
    },
}

</script>

<style scoped>

section{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>