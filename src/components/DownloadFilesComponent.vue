<template>
    <div class="versions-container">
        <h3>Descargas</h3>
        <ul>
            <li v-for="file in files" :key="file">
                <div>
                    <button class="download-button" type="button" @click="downloadFile(file)">{{file.fileName}}</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
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
			const linkSource = file.fileData;
			const dowloadLink = document.createElement('a');
			const fileName = file.fileName;

			dowloadLink.href = linkSource;
			dowloadLink.download = fileName;
			dowloadLink.click();
		}
	}
};
</script>

<style scoped>

</style>
