<script>
	import Navbar from './components/Navbar.svelte';
	import Home from './Home.svelte';
	import { onMount } from 'svelte';
	import { authenticated, apiurl, user } from '../stores';
	import { goto } from '$app/navigation';
	import axios from 'axios';
	import Cookies from 'js-cookie';
	import Sidebar from './components/sidebar.svelte';

	let message = '';

	onMount(async () => {
		try {
			const x = Cookies.get('token');
			console.log(x);
			const response = await axios.get(apiurl + '/users/profile/', {
				headers: {
					Authorization: x
				}
			});
			$user = response.data.user;
			message = 'hi' + response.data.user;
			authenticated.set(true);
		} catch (e) {
			message = 'not logged in';
			authenticated.set(false);
			console.log(e);
			goto('/login');
		}
	});
</script>

<div class="flex">
	<Sidebar />
	<Home />
</div>
<!-- <Navbar /> -->
