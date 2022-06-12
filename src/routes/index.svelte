<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import Cookies from 'js-cookie';
	import { goto } from '$app/navigation';
	import { apiurl } from '../stores';

	let nama = '';
	onMount(async () => {
		try {
			const x = Cookies.get('token');
			const response = await axios.get(apiurl + '/users/profile', {
				headers: { Authorization: x }
			});
			nama = response.data.nama_user;
		} catch (error) {
			console.log(error);
			Cookies.remove('token');
			goto('/');
		}
	});
</script>

<div class="p-8 font-extrabold text-9xl text-blue-400">hai, {nama}</div>
