<template>
    <div class="versions-container">
        <h3>Versions</h3>
        <ul>
            <li v-for="(version, index) in versions" :key="index">
                <p>version {{ version.versionNumber }}</p>
                <p>create date {{ version.createdDate }}</p>
                <p>last update {{ version.lastUpdatedDate }}</p>
                <p>score {{ version.score }}</p>
            </li>
        </ul>
    </div>
</template>

<script>

/*
    Este componente recibe un array de versiones a través de la propiedad versions 
    y las muestra en una lista. También tiene estilos básicos para el contenedor y 
    los elementos de la lista.
*/
export default {
    name: 'VersionsComponent',
    props: {
        versions: {
            type: Array,
            default: () => [],
        },
    },
};
</script>