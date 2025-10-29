<script lang="ts">
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
</script>

<div class="card">
	<div class="card__image">
		<enhanced:img src={selectedImage} alt={title} />
	</div>
	<h3 class="card__title">
		<a href={link} target="_blank">
			{title}
		</a>
	</h3>

	<p class="card__description">
		{description}
	</p>
</div>

<style>
	.card {
		border-radius: var(--spacing-x-small);
		display: flex;
		flex-direction: column;
		position: relative;
		background-color: var(--color-primary);
	}

	.card:hover {
		box-shadow: var(--card-shadow);
	}

	.card__title {
		display: flex;
		align-items: center;
		color: var(--color-text);
		text-decoration: underline;
		padding: var(--spacing-medium);
		padding-bottom: var(--spacing-x-small);
	}

	.card__description {
		color: var(--color-text-muted);
		font-size: var(--font-size-body-normal);
		font-weight: var(--font-weight-regular);
		padding: 0 var(--spacing-medium);
		padding-bottom: var(--spacing-medium);
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
