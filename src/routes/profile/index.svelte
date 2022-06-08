<script>
	import { user, apiurl } from '../../stores';
	import Sidebar from '../components/sidebar.svelte';
</script>

<div class="flex">
	<Sidebar />
	<h1 class="text-2xl font-semibold text-center">
		Hi! You are registered with email {$user.email}.
	</h1>
</div>
