<script>
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import axios from 'axios';
	import { apiurl } from '../../stores';

	let data = [];
	onMount(async () => {
		try {
			const x = Cookies.get('token');
			const response = await axios.get(apiurl + '/users/profile', {
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

<h1 class="text-2xl font-semibold p-8">
	<div>
		<h1>Nama</h1>
		<h2>{ data.nama_user }</h2>
	</div>
	<div><h1>Email</h1><h2>{ data.email }</h2></div>
	<div><h1>Tanggal lahir</h1><h2>{data.tanggal_lahir}</h2></div>
</h1>
