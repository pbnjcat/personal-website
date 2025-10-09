<script lang="ts">
	const {
		name,
		description,
		image,
		link
	}: {
		name: string;
		description: string;
		image: string;
		link: string;
	} = $props();

	type imageName = string;

	interface ImageModules {
		default: string;
		[key: string]: unknown;
	}

	const imageModules: Record<imageName, ImageModules> = import.meta.glob(
		'$lib/assets/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);
	const imagePath: string =
		Object.entries(imageModules).find(([path]) => path.split('/').pop()?.startsWith(image))?.[1]
			.default ?? '';

</script>

<div class="card">
	<div class="card__image">
		<enhanced:img src={imagePath} alt={name} />
	</div>
	<h3 class="card__title">
		<a href={link} target="_blank">
			{name}
		</a>
	</h3>
	<p class="card__description">{description}</p>
</div>

<style>
	.card {
		border-radius: var(--spacing-x-small);
		display: flex;
		flex-direction: column;
		position: relative;
		background-color: var(--color-primary);
		padding-bottom: var(--spacing-small);
	}

	.card:hover {
		box-shadow: var(--card-shadow);
	}

	.card__title {
		display: flex;
		align-items: center;
		color: var(--color-text);
		padding: var(--spacing-medium);
		padding-bottom: var(--spacing-xx-small);
	}

	.card__description {
		color: var(--color-text-muted);
		font-size: var(--font-size-body-normal);
		font-weight: var(--font-weight-regular);
		padding: var(--spacing-medium);
		padding-top: 0;
	}

	.card a {
		color: var(--color-text);
		text-decoration: none;
		padding-right: var(--spacing-xx-small);
	}

	.card a::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}

	.card__image {
		overflow: hidden;
		border-radius: var(--spacing-x-small) var(--spacing-x-small) 0 0;
	}
	.card__image :global(img) {
		display: block;
		object-fit: cover;
		width: 100%;
		height: 268px;
	}
</style>
