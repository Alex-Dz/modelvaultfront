<template>
    <div class="versions-container">
        <h3>Versiones</h3>
        <ul>
            <li v-for="(version, index) in versions" :key="index">
<!--                <p>version {{ version.versionNumber }}</p>-->
                <a :href="'/publication/' + version.publicationId + '?version=' + version.versionId "> Versión {{ version.versionNumber }}</a>
                <p>create date {{ formatDate(version.createdDate) }}</p>
                <starRating :rating="version.score"/>
            </li>
        </ul>
    </div>
</template>

<script>
import starRating from './StarRating.vue';

export default {
    name: 'VersionsComponent',
    components: {
        starRating
    },
    props: {
        versions: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        formatDate(value) {
            const date = new Date(String(value));
            date.setHours(0, 0, 0, 0);
            var result = '' + date.getDate() + '/' + ((date.getMonth() + 1) > 9 ? '' : '0') + (date.getMonth() + 1) + (date.getDate() > 9 ? '' : '0') + '/' + date.getFullYear();
            return result;
        }
    }
};
</script>
<style scoped>
a {
	font-size: medium;
	margin: 1rem 0rem;
    padding: 1rem 0rem;
	text-decoration: auto;
	color: var(--principal);
}
</style>