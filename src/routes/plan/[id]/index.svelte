<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { apiurl } from '../../../stores'
	import Cookies from 'js-cookie';
	import axios from 'axios';
	const id = isNaN($page.params.id)? '':$page.params.id;

	let data={},dest=[];
	onMount(async()=>{
		try{
			const response = await axios.get(apiurl + '/travelplan/' + id,{
				headers:{
					Authorization: Cookies.get('token')
				}
			});
			data = response.data.detail_plan[0];
			dest = response.data.dest_plan;
			console.log(dest);
		} catch(e){
			console.log(e)
		}
	});
</script>

<div class="p-8 flex flex-col gap-4">
	<h1 class="text-8xl text-blue-500 font-bold">{data.nama_plan}</h1>
	<h2 class="text-4xl">{data.start_date} - {data.end_date}</h2>
	<h3 class="text-4xl">Rp.{data.price_plan}</h3>
	<!-- <h4>{data.user_id_user}</h4> -->

	<div class="container flex flex-col">
		<h1 class="text-6xl text-blue-500 font-bold">Destinasi</h1>
		{#each dest as {id_destination,nama_destination,alamat_destination,country_id_country,status },i }
			<div>
				<h1 class="font-bold text-4xl">{nama_destination}</h1>
				<h2 class="text-4xl">{alamat_destination}</h2>
				<!-- <h2>{country_id_country}</h2> -->
				<!-- <span>{status}</span> -->
				<!-- <span>{id_destination}</span> -->
			</div>
		{/each}
	</div>

	<!-- {#each data as {id_plan, nama_plan, start_date, end_date, price_plan, user_id_user , i}}
	<h1>{id_plan}</h1>
	<h2>{nama_plan}</h2>
	<h2>{start_date} - {end_date}</h2>
	<h3>{price_plan}</h3>
	<h4>{user_id_user}</h4>
	{/each} -->
</div>
