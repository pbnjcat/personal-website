<script lang="ts">
	import Copyright from '@tabler/icons-svelte/icons/copyright';

	let currentDate = new Date().getFullYear();
</script>

<footer>
	<p class="footer__description">
		Designed in Figma, built with SvelteKit, styled in PostCSS, and deployed on Vercel by yours
		truly. Typeface used is Inter.
	</p>
	<div class="footer__copyright">
		<Copyright size={24} stroke={2} />
		<p>
			{currentDate} | Randy Li
		</p>
	</div>
</footer>

<style>
	footer {
		padding: var(--spacing-large);
		margin: 0 auto;
		max-width: 80rem;
	}

	@media (min-width: 640px) {
		footer {
			padding-inline: 2rem;
		}
	}

	@media (min-width: 1024px) {
		footer {
			padding-inline: 3rem;
		}
	}

	.footer__description {
		padding-bottom: 1.5rem;
		color: var(--color-text-muted);
	}
	.footer__copyright {
		padding-bottom: 1rem;
		display: flex;
		color: var(--color-text-muted);
	}
</style>
