<script lang="ts">
	import BrandGithubFilled from '@tabler/icons-svelte/icons/brand-github-filled';
	import BrandLinkedin from '@tabler/icons-svelte/icons/brand-linkedin';
</script>

<section class="hero">
	<div>
		<h1 class="hero__title">Hello, I am Randy.</h1>
		<h2 class="hero__subtitle">Web Developer</h2>
		<p>I am based in foggy San Francisco, CA.</p>
	</div>
	<ul class="social-media" aria-label="Social media links">
		<li class="social-media__item">
			<a class="social-media__link" href="/" aria-label="GitHub profile">
				<BrandGithubFilled size={24} />
			</a>
		</li>
		<li class="social-media__item">
			<a class="social-media__link" href="/" aria-label="LinkedIn profile">
				<BrandLinkedin size={24} />
			</a>
		</li>
	</ul>
	<button class="hero__button">View Resume</button>
</section>

<style>
	.hero {
		outline: red dashed 1px;
		padding: var(--spacing-xx-large) 0;
	}

	.hero__title {
		font-size: var(--font-size-heading-1);
		font-weight: var(--font-weight-extra-bold);
	}

	.hero__subtitle {
		font-size: var(--font-size-heading-2);
		font-weight: var(--font-weight-semi-bold);
	}

	.hero__button {
		border-style: none;
		border-radius: 0.25rem;
		padding: var(--spacing-x-small) var(--spacing-medium);
		margin-bottom: var(--spacing-medium);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.hero__button:hover {
		transform: translateY(-2px);
	}

	.social-media {
		display: flex;
		gap: 1.2rem;
		padding: var(--spacing-medium) 0;
		list-style: none;
	}

	.social-media__link {
		display: flex;
		align-items: center;
		background-color: var(--color-secondary-on-light);
		color: var(--color-accent-2);
		text-decoration: none;
		border-radius: 0.5rem;
		padding: 0.5rem;
		transition: all 0.2s ease;
	}

	.social-media__link:hover {
		transform: translateY(-2px);
	}
</style>
