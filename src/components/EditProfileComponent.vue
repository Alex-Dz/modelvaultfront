<template>
	<section class="clean-block about-us">
		<div class="row" style="margin-right: 0px;margin-left: 0px;">
			<div class="col text-center">
				<h2 class="text-info">Nombre Completo</h2>
			</div>
		</div>
		<div class="row justify-content-center" style="margin-right: 0px;margin-left: 0px;">
			<div class="col-sm-6 col-lg-4" style="padding-right: 0px;padding-left: 0px;">
				<div class="card clean-card text-center">
					<div class="card-body info">
						<form @submit="submitMethod" >
							<div class="row" style="margin-top: -24px;">
								<div class="col-md-12" style="margin-top: 22px;">
									<div class="row">
										<div class="col">
											<p class="labels"><strong>Usuario</strong></p>
										</div>
										<div class="col">
											<p class="labels">{{username}}</p>
										</div>
									</div>
									<div class="row">
										<div class="col">
											<p class="labels"><strong>Nombre</strong></p>
										</div>
										<div class="col">
											<input type="text" id="name" placeholder="Nombre" v-model="name">
										</div>
									</div>
									<div class="row">
										<div class="col">
											<p class="labels"><strong>E-mail</strong></p>
										</div>
										<div class="col">
											<input type="email" id="email" placeholder="E-mail" v-model="email" required>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12">
											<button type="submit">Guardar</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken} from '@/dataStorage';
import {setAuthenticatedName} from '@/dataStorage';

const requestPath = '/api/profile/details';
const requestPathPost = '/api/profile/edit';

export default {
	name: 'ShowProfileComponent',
	data(){
		return{
			username: '',
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
				/*console.log(response);*/
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
	methods:{
		submitMethod( event ){
			axios.post(this.$store.state.backURL + requestPathPost,
			{
				username: this.username.trim(),
				name: this.name.trim(),
				email: this.email.trim()
			},
			{
				'headers': {
					'Authorization' : getAuthenticationToken()
				}
			}).then( response => {
				if(response.status !== 202){
					alert("Error de servidor")
				}else{
					setAuthenticatedName(response.data.name);
					this.$router.push( {name: 'details'} );
				}
			}).catch( error => {
				console.log(error);
				if( error.response.status === 400){
					alert(error)
				}else{
					alert("Error de servidor")
				}
			});
			event.preventDefault();
			return true;
		}
	},
};
</script>