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

<Navbar />
<main id="main-content">
	{@render children?.()}
</main>
<Footer />

<style>

	main {
		padding: 0 1.25rem;
		margin: 0 auto;
		max-width: 80rem;
	}

	@media (min-width: 640px) {
		main {
			padding: 0 2rem;
		}
	}

	@media (min-width: 1024px) {
		main {
			padding: 0 3rem;
		}
	}
</style>
