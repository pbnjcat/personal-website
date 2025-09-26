<script lang="ts">
	import { navLinks } from '$lib/constants/navigation';
	import ThemeToggle from './ThemeToggle.svelte';
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
				<ThemeToggle />
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
		padding: var(--spacing-x-large) 0;
		padding-inline: var(--spacing-xx-small);
	}

	.navbar__brand {
		display: flex;
		text-decoration: none;
		a {
			color: var(--color-text);
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
		color: var(--color-text-muted);
		cursor: pointer;
		text-decoration: none;
		padding: var(--spacing-xx-small);
	}
</style>
