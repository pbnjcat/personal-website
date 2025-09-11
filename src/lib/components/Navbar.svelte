<script lang="ts">
	import { navLinks } from '$lib/constants/navigation';
	import Sun from '@tabler/icons-svelte/icons/sun';
	// let navBar = document.querySelector('navbar');
	// let headerHeight = document.querySelector('navbar')?.scrollHeight;
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
				<button class="theme-toggle">
					<Sun size={24} />
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
		padding-top: var(--spacing-large);
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
		gap: var(--spacing-x-small)
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
		border: none;
		background-color: transparent;
	}
</style>
