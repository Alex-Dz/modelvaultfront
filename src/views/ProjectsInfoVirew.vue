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
</style>