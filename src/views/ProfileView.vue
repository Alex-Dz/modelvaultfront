<template>
	<section>
<!--		<NavComponent/>-->
		<div class="row mt-5">
			<router-view></router-view>
		</div>
	</section>
</template>

<script>
import {getAuthenticationToken} from '@/dataStorage';
/*import NavComponent from '../components/NavComponent.vue'*/

export default{
	name: "ProfileView",
	components: {
		/*NavComponent*/
	},
	beforeCreate( ){
		if( getAuthenticationToken() == null + ' ' + null  ) {
			this.$router.push( {name: 'LoginView'} )
			console.log('need to login: redirect to login');
		}
	}
}
</script>