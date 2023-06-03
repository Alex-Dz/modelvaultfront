<template>
	<section class="contenedor">
		<section class="form">
			<div>
				<h2 class="text-info text-center">Información del usuario</h2>
			</div>
			<div class="text-center">
				<div class="row">
					<div class="col">
						<p class="labels text"><strong>Usuario</strong></p>
					</div>
					<div class="col">
						<p class="labels text">{{username}}</p>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<p class="labels text"><strong>Nombre</strong></p>
					</div>
					<div class="col">
						<p class="labels text">{{name}}</p>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<p class="labels text"><strong>E-mail</strong></p>
					</div>
					<div class="col">
						<p class="labels text">{{email}}</p>
					</div>
				</div>
				<div class="container">
					<div class="col-md-12 text-center">
						<a class="boton" role="button" href="/profile/edit">
							<i class="fas fa-pencil-alt"></i>&nbsp;Editar</a>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken} from '@/dataStorage';
import {getAuthenticatedUsername} from '@/dataStorage';

const requestPath = '/api/profile/details';

export default {
	name: 'ShowProfileComponent',
	data(){
		return{
			username: getAuthenticatedUsername(),
			name: '',
			email: ''
		}
	},
	beforeCreate(){
		axios.get(this.$store.state.backURL + requestPath,
			{
				'headers': {
					'Authorization' : getAuthenticationToken()
				}
			}).then( response => {
				if(response.status !== 200){
					alert("Error de servidor");
				}else{
					console.log(response);
					this.username = response.data.username;
					this.name = response.data.name;
					this.email = response.data.email;
				}
			}).catch( error => {
				console.log(error);
				if( error.response.status === 400){
					alert(error)
				}else{
					alert("Error de servidor")
				}
			});
	},
};
</script>
<style scoped>
.form {
	width: 70%;
	height: 100%;
/*	display: flex;*/
	justify-content: center;
	align-items: center;
	border: 2px solid #3f80a6;
	border-radius: 15px;
	padding: 2rem;
	box-sizing: border-box;
	margin-top: 3rem;
}
</style>