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

<div class="flex">
	<Sidebar />
	<div class="p-8">
		<h1>Plan</h1>
		<div>
			{#each data as { nama_plan, start_date, end_date, price_plan }, i}
				<div class="card max-w-4xl border-2 p-2">
					<h1>{nama_plan}</h1>
					<h2>{start_date} - {end_date}</h2>
				</div>
			{/each}
		</div>
	</div>
</div>
