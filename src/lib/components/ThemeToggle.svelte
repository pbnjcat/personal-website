<script lang="ts">
	import Sun from '@tabler/icons-svelte/icons/sun';
	import Moon from '@tabler/icons-svelte/icons/moon';
	import { onMount } from 'svelte';

	let currentTheme = $state('');

	onMount(() => {
		const appliedTheme = document.documentElement.dataset['theme'];
		currentTheme = appliedTheme || 'light';
	});

	function setTheme(theme: string) {
		currentTheme = theme;
		document.documentElement.dataset['theme'] = currentTheme;
		localStorage.setItem('theme', currentTheme);
	}

	function switchTheme() {
		const theme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
		setTheme(theme);
	}
</script>

<button class="theme-toggle" aria-label="toggle theme" onclick={() => switchTheme()}>
	<Moon size={24} stroke={2} data-icon="moon" />

	<Sun size={24} stroke={2} data-icon="sun" />
</button>

<style>
	.theme-toggle {
		display: flex;
		padding: 0;
		cursor: pointer;
		color: var(--color-text-muted);
		border: none;
		background-color: transparent;
	}

	:global([data-icon='moon']) {
		display: none;
	}

	:global(html[data-theme='dark'] [data-icon='moon']) {
		display: block;
	}

	:global(html[data-theme='dark'] [data-icon='sun']) {
		display: none;
	}
</style>
