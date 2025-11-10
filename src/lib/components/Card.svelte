<script lang="ts">
	import { onMount } from 'svelte';

	let target = $state<HTMLElement>();

	const {
		title,
		description,
		image,
		link
	}: {
		title: string;
		description: string;
		image: string;
		link: string;
	} = $props();

	const imageModules = import.meta.glob(
		'$lib/assets/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	const imageFileName = image.split('/').pop() ?? '';

	const selectedImage = (
		Object.entries(imageModules).find(([path]) => {
			const imageModuleName = path.split('/').pop() ?? '';
			return imageFileName === imageModuleName;
		})?.[1] as { default: string }
	)?.default;

	onMount(() => {
		if (!target) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle('in-view', entry.isIntersecting);
				});
			},
			{
				rootMargin: '-5% 0% -10% 0%',
				threshold: 0.7
			}
		);

		observer.observe(target);

		return () => observer.disconnect();
	});
</script>

<li class="card" bind:this={target}>
	<div class="card__content">
		<div class="card__image-container">
			<enhanced:img src={selectedImage} alt={title} />
		</div>
		<h3 class="card__title">
			<a href={link} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</h3>
		<p class="card__description">
			{description}
		</p>
	</div>
</li>

<style>
	.card {
		display: block;
		contain: layout paint style;
		padding: var(--spacing-small);
	}

	.card__content {
		display: flex;
		height: 400px;
		width: 100%;
		flex-direction: column;
		background-color: var(--card-color);
		border-radius: var(--spacing-x-small);
		transition:
			transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1),
			box-shadow 600ms cubic-bezier(0.2, 0.8, 0.2, 1);
		will-change: transform, box-shadow;
	}

	.card__image-container {
		overflow: hidden;
		border-radius: var(--spacing-x-small) var(--spacing-x-small) 0 0;
	}

	.card__image-container :global(img) {
		position: relative;
		display: block;
		object-fit: cover;
		font-weight: bold;
		text-align: center;
		width: 100%;
		color: hsl(0, 0%, 45%);
		height: 268px;
	}

	:global(img)::before {
		display: block;
		border-radius: var(--spacing-xx-small);
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: hsl(0, 0%, 90%);
		border: 2px dashed hsl(0, 0%, 60%);
	}

	:global(img)::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0px;
		top: var(--spacing-xx-small);
	}

	.card__title {
		display: flex;
		align-items: center;
		color: var(--color-text);
		padding: var(--spacing-medium);
		padding-bottom: var(--spacing-x-small);
	}

	.card a {
		color: var(--color-text);
		text-decoration: none;
	}

	.card a::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
	}

	.card__title::before {
		content: '';
		position: absolute;
		inset: 0;
		cursor: pointer;
		border: 2px solid transparent;
		border-radius: 0.5rem;
		transition: border-color 200ms;
	}

	.card__description {
		color: var(--color-text-muted);
		font-size: var(--font-size-body-small);
		font-weight: var(--font-weight-regular);
		padding: 0 var(--spacing-medium) var(--spacing-medium);
	}

	@media (any-hover: none) {
		.card:global(.in-view) .card__content {
			transform: translate(-8px, -8px);
			box-shadow: var(--card-shadow);
		}
	}

	@media (hover) {
		.card__title:hover {
			text-decoration: underline;
		}

		.card__content:hover {
			transform: translate(-8px, -8px);
			box-shadow: var(--card-shadow);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card__content {
			box-shadow: var(--card-shadow);
		}

		.card:global(.in-view) .card__content {
			transform: none;
		}
		.card__content:hover {
			transform: none;
		}
	}

	@media (any-hover: none) and (prefers-reduced-motion: reduce) {
		.card__title {
			text-decoration: underline;
		}
	}
</style>
