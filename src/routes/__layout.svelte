<script>
	import '../app.css';
	import axios from 'axios';
	import { user, apiurl } from '../stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import { page } from '$app/stores';
	import Sidebar from './components/sidebar.svelte';

	let hideIfnotLoggedIn = Cookies.get('token');
	onMount(async () => {
		try {
			const x = Cookies.get('token');
			console.log(x);
			const response = await axios.get(apiurl + '/users/profile/', {
				headers: {
					Authorization: x
				}
			});
			goto('/');
		} catch (e) {
			console.log(e);
			goto('/login');
		}
	});
</script>

<div class="flex">
	{#if hideIfnotLoggedIn}
		<Sidebar />
	{/if}
	<slot />
</div>
