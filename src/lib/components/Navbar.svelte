<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let nav: HTMLElement | undefined = $state();
	let lastPositionY = 0;
	let scrollingToLink = false;
	let scrollTimeout = 0;

	interface NavLink {
		label: string;
		path: string;
		anchor?: string;
	}
	const navLinks: NavLink[] = [
		{
			label: 'projects',
			path: '/',
			anchor: '#projects'
		},
		{
			label: 'work',
			path: '/',
			anchor: '#work'
		}
	];

	onMount(() => {
		const isSmallScreen = window.matchMedia('(max-width: 720px)');

		function handleScroll() {
			if (!isSmallScreen.matches) return;

			if (scrollingToLink) return;

			const currentPositionY = window.scrollY;

			if (currentPositionY > lastPositionY && currentPositionY > 80) {
				nav?.classList.remove('navbar--active');
			} else if (currentPositionY < lastPositionY || currentPositionY <= 80) {
				nav?.classList.add('navbar--active');
			}

			lastPositionY = currentPositionY;
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToSection(event: MouseEvent, anchor?: string) {
		if (!anchor) {
			return;
		}
		event.preventDefault();

		scrollingToLink = true;

		const targetElement = document.querySelector(anchor);

		if (scrollTimeout) {
			clearTimeout(scrollTimeout);
		}

		targetElement?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});

		scrollTimeout = window.setTimeout(() => {
			scrollingToLink = false;
			scrollTimeout = 1;
		}, 750);
	}
</script>

<header class="navbar navbar--active" bind:this={nav}>
	<div class="navbar__brand">
		<a href="#top" aria-label="logo back to home page">Randy</a>
	</div>
	<nav aria-label="Main navigation">
		<ul class="navbar__menu">
			{#each navLinks as link, i (link)}
				<li>
					<a
						class="navbar__link"
						href={link.anchor}
						onclick={(e) => scrollToSection(e, link.anchor)}
						aria-label={link.label}>{link.label}</a
					>
				</li>
			{/each}
			<li>
				<ThemeToggle />
			</li>
		</ul>
	</nav>
</header>

<style>
	.navbar {
		display: flex;
		position: fixed;
		justify-content: space-between;
		left: 0;
		right: 0;
		padding: var(--spacing-large);
		background-color: var(--color-background);
		transition: all 250ms;
		backdrop-filter: blur(1px);
		top: -5rem;
		z-index: 10;
	}

	@media (min-width: 720px) {
		.navbar {
			top: 0;
		}
	}

	.navbar--active {
		top: 0;
	}

	.navbar__brand {
		display: flex;
		text-decoration: none;
		a {
			align-content: center;
			color: var(--color-text);
			text-decoration: none;
		}
	}

	.navbar__menu {
		display: flex;
		list-style-type: none;
		flex-direction: row;
		gap: var(--spacing-large);
	}

	.navbar__link {
		color: var(--color-text-muted);
		cursor: pointer;
		text-decoration: none;
	}
</style>
