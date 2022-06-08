<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import Cookies from 'js-cookie';
	import { apiurl } from '../stores';

	let message = '';
	let response;
	onMount(async () => {
		try {
			const x = Cookies.get('token');
			console.log(x);
			response = await axios.get(apiurl + '/users/profile', {
				headers: {
					Authorization: x
				}
			});
			console.log(response.data);
			message = response.data.nama_user;
		} catch (e) {
			message = 'not logged in';
			console.log(e);
		}
	});
</script>

<h1>hai {message} 1</h1>
