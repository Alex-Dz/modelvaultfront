<template>
	<section class="clean-block about-us">
		<div class="row" style="margin-right: 0px;margin-left: 0px;">
			<div class="col text-center">
				<h2 class="text-info">{{name}}</h2>
			</div>
		</div>
		<div class="row justify-content-center" style="margin-right: 0px;margin-left: 0px;">
			<div class="col-sm-6 col-lg-4" style="padding-right: 0px;padding-left: 0px;">
				<div class="card clean-card text-center">
					<div class="card-body info">
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
										<p class="labels">{{name}}</p>
									</div>
								</div>
								<div class="row">
									<div class="col">
										<p class="labels"><strong>E-mail</strong></p>
									</div>
									<div class="col">
										<p class="labels">{{email}}</p>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<a class="btn btn-success" role="button" href="/profile/edit">
											<i class="fas fa-pencil-alt"></i>&nbsp;Editar</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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