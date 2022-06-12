<script>
	import Sidebar from '../components/sidebar.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import Cookies from 'js-cookie';
	import { apiurl } from '../../stores';

	let response,
		data = [];
	onMount(async () => {
		try {
			const x = Cookies.get('token');
			response = await axios.get(apiurl + '/travelplan/', {
				headers: {
					Authorization: x
				}
			});
			data = response.data;
			console.log(data);
		} catch (e) {
			console.log(e);
		}
	});
</script>

<div class="p-8 flex flex-col gap-4">
	<h1 class="text-4xl">Your Trip Plan</h1>
	<div class="flex flex-col gap-4">
		{#each data as { id_plan, nama_plan, start_date, end_date, price_plan }, i}
			<a href="/plan/{id_plan}">
				<div class="card max-w-4xl border-2 p-2 hover:bg-blue-500 hover:text-white">
					<h1 class="text-2xl">{nama_plan}</h1>
					<h2>{start_date} - {end_date}</h2>
				</div>
			</a>
		{/each}
	</div>
</div>
