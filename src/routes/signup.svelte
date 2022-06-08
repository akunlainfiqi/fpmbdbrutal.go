<script>
	import axios from 'axios';
	import { user, apiurl } from '../stores';
	import { replace } from 'svelte-spa-router';
	import { goto } from '$app/navigation';
	let email, nama, dob, password;
	let errorMessage;
	$: if (email) {
		errorMessage = null;
	}
	async function signup() {
		try {
			const { data } = await axios.post(apiurl + '/auth/signup', {
				email,
				nama,
				password,
				dob
			});
			console.log(data);
			errorMessage = 'User succesfully registered please continue to login';
		} catch (error) {
			console.log(error.response);
			if (error.response.status == 409) {
				email = '';
				password = '';
				errorMessage = 'email is already taken';
			} else errorMessage = error.response;
		}
	}
</script>

<div class="container">
	<div class="section">
		<h1 class="title">Sign up</h1>
		<hr />
		{#if errorMessage}
			<p class="help is-danger">{errorMessage}</p>
		{/if}
		<form on:submit|preventDefault={signup}>
			<div class="field">
				<div class="control">
					<h2>email</h2>
					<input
						type="text"
						bind:value={email}
						class="input"
						required
						class:is-danger={errorMessage}
					/>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<h2>nama</h2>
					<input
						type="text"
						bind:value={nama}
						class="input"
						required
						class:is-danger={errorMessage}
					/>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<h2>Tanggal Lahir</h2>
					<input
						type="date"
						bind:value={dob}
						class="input"
						required
						class:is-danger={errorMessage}
					/>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<h2>password</h2>
					<input type="password" bind:value={password} class="input" required />
				</div>
			</div>
			<div class="control">
				<input type="submit" class="button is-info is-light" value="Submit" />
			</div>
		</form>
		<hr />
		<p>
			Already have an account ?
			<a href="/login">Log in here</a>
		</p>
		<hr />
	</div>
</div>
