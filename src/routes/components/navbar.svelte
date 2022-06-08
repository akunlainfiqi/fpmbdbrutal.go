<script>
	const menu = [
		{
			svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>`,
			name: 'Home',
			path: '/'
		},
		{
			svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
			name: 'Galang Dana',
			path: '/galang'
		},
		{
			svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>`,
			name: 'Transaksi',
			path: '/transactions'
		},
		{
			svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>`,
			name: 'Profile',
			path: '/profile'
		}
	];
</script>

<div class="container">
	<div class="absolute bottom-0">
		<div class="bg-blue-600 w-screen h-16 items-center">
			<div class="max-w-4xl flex items-center justify-evenly m-auto">
				{#each menu as { svg, name, path }, i}
					<a href="/">
						<div class="flex-col flex items-center">
							<svg
								class="w-10 h-10 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{@html svg}
							</svg>
							<h1 class="text-white text-xs">{name}</h1>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
