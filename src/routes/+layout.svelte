<script lang="ts">
	import '$lib/assets/styles/globals.css';
	import { Navbar, Footer } from '$lib/components';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<script lang="ts">
		// Runs in html head to prevent FOUC
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

<div class="wrapper">
	<Navbar />
	<main id="main-content">
		{@render children?.()}
	</main>
	<Footer />
</div>

<style>
	.wrapper {
		display: grid;
		height: 100%;
		margin: 0 auto;
		max-width: min(1000px, 100% - 2rem);
		grid-template-areas:
			'main'
			'footer';
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
	}
</style>
