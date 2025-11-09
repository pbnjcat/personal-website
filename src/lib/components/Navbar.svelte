<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let nav = $state<HTMLElement>();
	let lastPositionY = 0;
	let scrollingToSection = false;
	let scrollResetTimer: number;

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

		// navbar hiding on scroll down
		function hideNav() {
			if (!isSmallScreen.matches) return;

			if (scrollingToSection) return;

			const currentPositionY = window.scrollY;

			if (currentPositionY > lastPositionY && currentPositionY > 80) {
				nav?.classList.remove('navbar--active');
			} else if (currentPositionY < lastPositionY || currentPositionY <= 80) {
				nav?.classList.add('navbar--active');
			}
			lastPositionY = currentPositionY;
		}

		function pauseHideNavWhenScrolling(event: MouseEvent) {
			const anchorElement = (event.target as HTMLElement).closest('a');

			if (!anchorElement) {
				return;
			}

			if (scrollResetTimer) {
				clearTimeout(scrollResetTimer);
			}

			scrollingToSection = true;

			scrollResetTimer = window.setTimeout(() => {
				scrollingToSection = false;
			}, 700);
		}

		window.addEventListener('scroll', hideNav);
		document.addEventListener('click', pauseHideNavWhenScrolling);

		return () => {
			window.removeEventListener('scroll', hideNav);
			document.removeEventListener('click', pauseHideNavWhenScrolling);
		};
	});
</script>

<header class="navbar navbar--active" bind:this={nav}>
	<a class="navbar__logo" href="#top" aria-label="logo link back to top">Randy</a>
	<nav aria-label="page navigation">
		<ul class="navbar__menu">
			{#each navLinks as link, i (link)}
				<li>
					<a class="navbar__link" href={link.anchor} aria-label={link.label}>{link.label}</a>
				</li>
			{/each}
			<li>
				<ThemeToggle />
			</li>
		</ul>
	</nav>
</header>

<style>
	:global(#projects, #work, #top) {
		scroll-margin-top: 4rem;
	}

	.navbar {
		display: flex;
		position: fixed;
		justify-content: space-between;
		width: 100%;
		left: 0;
		right: 0;
		padding: var(--spacing-medium);
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

	.navbar__logo {
		display: block;
		text-decoration: none;
		align-content: center;
		color: var(--color-text-muted);
		text-decoration: none;
	}

	.navbar__menu {
		display: flex;
		list-style-type: none;
		align-items: center;
		flex-direction: row;
		gap: var(--spacing-x-small);
	}

	.navbar__link {
		color: var(--color-text-muted);
		border-radius: var(--spacing-x-small);
		padding: var(--spacing-x-small);
		cursor: pointer;
		text-decoration: none;
		transition: color 150ms ease;
	}

	@media (hover: hover) {
		.navbar__link:hover {
			color: var(--color-primary);
			background-color: var(--color-background-row-selected);
		}
	}
</style>
