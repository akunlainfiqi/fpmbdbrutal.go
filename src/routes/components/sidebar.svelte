<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	import { authenticated, apiurl, user } from '../../stores';
	import { goto } from '$app/navigation';
	import axios from 'axios';
	import Cookies from 'js-cookie';

	const menu = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Profil',
			path: '/profile'
		},
		{
			name: 'Travel Plan',
			path: '/plan'
		}
	];
	const HandleLogout = () => {
		Cookies.remove('token');
		goto('/login');
	};

	onMount(async () => {
		try {
			const x = Cookies.get('token');
			const response = await axios.get(apiurl + '/users/profile/', {
				headers: {
					Authorization: x
				}
			});
			user.set(response.data);
			authenticated.set(true);
		} catch (e) {
			authenticated.set(false);
			console.log(e);
			goto('/login');
		}
	});
</script>

<div class="container max-w-3xl bg-blue-400 h-screen w-fit">
	<div class="p-8">
		{#each menu as { name, path }, i}
			<a href={path} class="">
				<div class="flex flex-col">
					<h1>{name}</h1>
				</div>
			</a>
		{/each}
		<div class="bottom-8 fixed">
			<button on:click={HandleLogout}>Logout</button>
		</div>
	</div>
</div>
