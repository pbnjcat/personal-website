<script lang="ts">
	import '../../src/styles/globals.css';
	import { Navbar, Footer } from '$lib/components';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<script lang="ts">
		// Run in html head to prevent FOUC
		const savedTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		const theme = savedTheme || systemTheme;

		document.documentElement.dataset['theme'] = theme;

		if (!savedTheme) {
			localStorage.setItem('theme', theme);
		}
	</script>

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
