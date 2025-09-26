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
	<enhanced:img class="card__image" src={imagePath} alt={name} />
	<h3 class="card__title">
		<a href={link} target="_blank">
			{name}
		</a>
	</h3>
	<p class="card__description">{description}</p>
</div>

<style>
	.card {
		border-radius: var(--spacing-xx-small);
		display: flex;
		flex-direction: column;
		position: relative;
		background-color: var(--color-primary);
	}
	.card__title {
		color: var(--color-text);
		padding: var(--spacing-small);
	}

	.card__description {
		color: var(--color-text);
		font-size: var(--font-size-body-normal);
		font-weight: var(--font-weight-regular);
		padding: 0 var(--spacing-small) var(--spacing-small);
	}

	.card a {
		color: var(--color-text);
		text-decoration: none;
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
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
</style>
