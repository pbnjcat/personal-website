<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/components/styles/globals.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
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
		background-color: var(--background-primary-color-on-light);
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
