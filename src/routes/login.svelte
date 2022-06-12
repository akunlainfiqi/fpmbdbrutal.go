<script>
	import axios from 'axios';
	import { user, apiurl } from '../stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';

	let email, password;
	let errorMessage;
	$: if (email || password) {
		errorMessage = null;
	}
	async function login() {
		try {
			const { data } = await axios.post(apiurl + '/auth/signin', {
				email,
				password
			});
			Cookies.set('token', data.token);
			location.reload();
		} catch (error) {
			console.log(error);
			if (error.response.status != 201) {
				email = '';
				password = '';
				errorMessage = 'Invalid Credentials';
			} else errorMessage = error.response.data.message;
			console.log(errorMessage);
		}
	}
	onMount(async () => {
		try {
			const x = Cookies.get('token');
			if (x != null) goto('/');
		} catch (error) {
			Cookies.remove('token');
			console.log(error);
		}
	});
</script>

<div class="container">
	<div class="section">
		<h1 class="title">Login</h1>
		<hr />
		{#if errorMessage}
			<p class="help is-danger">{errorMessage}</p>
		{/if}
		<form on:submit|preventDefault={login}>
			<div class="field">
				<label class="label" for="nama">email</label>
				<div class="control">
					<input
						type="text"
						bind:value={email}
						class="input"
						required
						class:is-danger={errorMessage}
						id="email"
					/>
				</div>
			</div>
			<div class="field">
				<label class="label" for="Password">Password</label>
				<div class="control">
					<input
						type="password"
						bind:value={password}
						class="input"
						required
						class:is-danger={errorMessage}
						id="Password"
					/>
				</div>
			</div>
			<div class="control">
				<input type="submit" class="button is-info is-light" value="Submit" />
			</div>
		</form>
		<hr />
		<p>
			Do not have an account ?
			<a href="/signup">Sign Up</a>
		</p>
		<hr />
	</div>
</div>
