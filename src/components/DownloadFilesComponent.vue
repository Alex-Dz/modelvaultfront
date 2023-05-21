<template>
    <div class="versions-container">
        <h3>Download</h3>
        <ul>
            <li v-for="file in files" :key="file">
<!--				<p>{{ file.fileName }}</p>
				<a href="{{file.fileData}}" download="{{file.fileName}}"></a>-->
				<button type="button" @click="downloadFile(file)">{{file.fileName}}</button>
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
		files: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		downloadFile(file) {
			console.log(file.fileName);
			/*let file = JSON.stringify(value);*/
			const linkSource = file.fileData;
			console.log(linkSource);
			const dowloadLink = document.createElement('a');
			const fileName = file.fileName;
			console.log(fileName);

			dowloadLink.href = linkSource;
			dowloadLink.download = fileName;
			dowloadLink.click();
		}
	}
};
</script>

<style scoped>
.versions-container {
    padding: 1em;
    overflow: auto;
    height: 100%;
}

.versions-container h3 {
    margin-bottom: 1em;
}

.versions-container ul {
    list-style-type: none;
    padding: 0;
}

.versions-container ul li {
    padding: 0.5em 0;
    border-bottom: 1px solid #ddd;
}

.versions-container ul li:last-child {
    border-bottom: none;
}
</style>
