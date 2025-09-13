<script lang="ts">
	import { Navbar, Footer } from '$lib/components';
	import favicon from '$lib/assets/favicon.svg';
	import '../../src/styles/globals.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Randy Li</title>
</svelte:head>

<div class="app">
	<header>
		<Navbar />
	</header>
	<main id="main-content">
		<div class="content">
			{@render children?.()}
		</div>
	</main>
	<Footer />
</div>

<style>
	.app {
		padding: 0 1.25rem;
		margin: 0 auto;
		max-width: 80rem;
		height: 400vh;
	}

	@media (min-width: 640px) {
		.app {
			padding: 0 2rem;
		}
	}

	@media (min-width: 1024px) {
		.app {
			padding: 0 3rem;
		}
	}
</style>
