<script>
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
		$user = null;
		location.reload();
	};

	// onMount(async () => {
	// 	try {
	// 		const x = Cookies.get('token');
	// 		const response = await axios.get(apiurl + '/users/profile/', {
	// 			headers: {
	// 				Authorization: x
	// 			}
	// 		});
	// 		user.set(response.data);
	// 		authenticated.set(true);
	// 	} catch (e) {
	// 		authenticated.set(false);
	// 		console.log(e);
	// 		goto('/login');
	// 	}
	// });
</script>

<div class="container max-w-3xl bg-blue-400 h-screen w-fit sm:text-2xl md:text-4xl">
	<div class="p-8 flex-col justify-between content-between flex h-full">
		<div>
			{#each menu as { name, path }, i}
				<a href={path} class="">
					<div class="flex flex-col">
						<h1 class="hover:bg-white ">{name}</h1>
					</div>
				</a>
			{/each}
		</div>
		<div class="">
			<button on:click={HandleLogout}>Logout</button>
		</div>
	</div>
</div>
