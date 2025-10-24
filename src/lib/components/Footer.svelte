<script lang="ts">
	import Copyright from '@tabler/icons-svelte/icons/copyright';

	let currentDate = new Date().getFullYear();
</script>

<footer>
	<p class="footer__description">
		Website designed in Figma, built with SvelteKit, and managed using Sveltia.
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
		padding-top: var(--spacing-xx-large);
	}

	.footer__description {
		font-size: var(--font-size-body-small);
		padding-bottom: var(--spacing-large);
		color: var(--color-text-muted);
	}
	.footer__copyright {
		display: flex;
		padding-bottom: var(--spacing-small);
		color: var(--color-text-muted);
	}
</style>
