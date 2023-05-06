<template>
	<div class="row mt-5">
		<router-view></router-view>
	</div>
</template>

<script>
import {getAuthenticationToken} from '@/dataStorage';

export default{
	name: "ProfileView",
	beforeCreate( ){
		if( !getAuthenticationToken( ) ) {
			this.$router.push( {name: 'LoginView'} )
			console.log('need to login: redirect to login');
		}
	}
}
</script>