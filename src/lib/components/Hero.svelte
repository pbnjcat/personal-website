<script lang="ts">
	import BrandGithubFilled from '@tabler/icons-svelte/icons/brand-github-filled';
	import BrandLinkedin from '@tabler/icons-svelte/icons/brand-linkedin';
</script>

<section class="hero">
	<div>
		<h1 class="hero__title">Hello, my name is Randy.</h1>
		<h2 class="hero__subtitle">Web Developer</h2>
		<p class="hero__description">
			Designing responsive, user-focused websites from foggy San Francisco, CA.
		</p>
	</div>
	<ul class="social-media" aria-label="Social media links">
		<li class="social-media__item">
			<a class="social-media__link" href="https://github.com/pbnjcat" aria-label="GitHub profile">
				<BrandGithubFilled size={24} />
			</a>
		</li>
		<li class="social-media__item">
			<a class="social-media__link" href="https://www.linkedin.com/in/randy-li-853237199/" aria-label="LinkedIn profile">
				<BrandLinkedin size={24} />
			</a>
		</li>
		<!-- Add email system future feature -->
	</ul>
	<button class="hero__button" aria-label="View resume pdf">View Resume</button>
</section>
<section id="about" aria-label="About me">
	<h2 class="hero__subtitle">About</h2>
	<p class="hero__description">
		I am a full-stack web developer with a passion for JavaScript. The unique blend of creativity
		and logic is what fuels my excitement and passion for web development.
	</p>
	<p class="hero__description">
		When I am not at my computer I enjoy spending my time reading, hiking, and listening to music.
	</p>
</section>

<style>
	.hero {
		padding: var(--spacing-xx-large) 0;
		padding-top: calc(4rem + var(--spacing-xx-large));
	}

	.hero__title {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-heading-1);
		font-weight: var(--font-weight-extra-bold);
		color: var(--color-text);
	}

	.hero__subtitle {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-heading-2);
		font-weight: var(--font-weight-semi-bold);
		padding-bottom: var(--spacing-medium);
		color: var(--color-text);
	}

	.hero__description {
		font-family: var(--font-family-primary);
		padding-bottom: var(--spacing-xx-small);
		color: var(--color-text-muted);
	}

	.hero__button {
		background-color: transparent;
		border: 1px solid var(--color-text);
		color: var(--color-text);
		border-radius: 0.25rem;
		padding: var(--spacing-x-small) var(--spacing-medium);
		margin-bottom: var(--spacing-medium);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.hero__button:hover {
		transform: translate(2px, -2px);
	}

	.social-media {
		display: flex;
		gap: var(--spacing-x-small);
		padding: var(--spacing-small) 0;
		list-style: none;
	}

	.social-media__link {
		display: flex;
		align-items: center;
		border-style: 1px solid var(--color-button-border);
		color: var(--color-text-muted);
		text-decoration: none;
		border-radius: 0.5rem;
		padding: var(--spacing-x-small);
		transition: all 0.2s ease;
	}

	.social-media__link:hover {
		transform: translate(2px, -2px);
	}

	#about {
		padding-bottom: var(--spacing-xx-large);
	}
</style>
