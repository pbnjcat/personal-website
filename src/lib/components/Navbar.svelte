<script lang="ts">
	import Sun from '@tabler/icons-svelte/icons/sun';
	import Moon from '@tabler/icons-svelte/icons/moon';
	import { onMount } from 'svelte';
	import { navLinks } from '$lib/constants/navigation';
	// let navBar = document.querySelector('navbar');
	// let headerHeight = document.querySelector('navbar')?.scrollHeight;

	let currentTheme = $state('');

	onMount(() => {
		const savedTheme = document.documentElement.getAttribute('data-theme');
		if (savedTheme) {
			currentTheme = savedTheme;
			return;
		}

		const prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		let theme = prefersDarkmode ? 'dark' : 'light';
		setTheme(theme);
	});

	function setTheme(theme: string) {
		const one_year = 60 * 60 * 24 * 365;
		document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
		document.documentElement.setAttribute('data-theme', theme);
		currentTheme = theme;
	}

	function toggleTheme() {
		const theme = currentTheme === 'light' ? 'dark' : 'light';
		setTheme(theme);
	}
</script>

<nav class="navbar" aria-label="Main navigation">
	<div class="navbar__brand">
		<a href="/" aria-label="logo back to home page">Logo</a>
	</div>
	<div>
		<ul class="navbar__menu">
			{#each navLinks as link, i (link)}
				<li>
					<a class="navbar__link" href={link.path} aria-label={link.label}>{link.label}</a>
				</li>
			{/each}
			<li>
				<button class="theme-toggle" aria-label="toggle theme" onclick={toggleTheme}>
					{#if currentTheme === 'dark'}
						<Moon size={24} stroke={2} />
					{:else}
						<Sun size={24} stroke={2} />
					{/if}
				</button>
			</li>
		</ul>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		height: var(--spacing-xx-large);
		background-color: var(--background-primary-color-on-light);
		padding: var(--spacing-x-large) 0;
		padding-inline: var(--spacing-xx-small);
	}

	.navbar__brand {
		display: flex;
		text-decoration: none;
		a {
			color: var(--color-text-on-light);
			text-decoration: none;
		}
	}

	.navbar__menu {
		display: flex;
		position: sticky;
		list-style-type: none;
		flex-direction: row;
		width: 100%;
		gap: var(--spacing-x-small);
	}

	.navbar__link {
		color: white;
		text-decoration: none;
		color: var(--color-text-on-light);
		padding: var(--spacing-xx-small);
	}

	.theme-toggle {
		display: flex;
		cursor: pointer;
		color: inherit;
		border: none;
		background-color: transparent;
	}
</style>
