<script lang="ts">
	import BrandGithubFilled from '@tabler/icons-svelte/icons/brand-github-filled';
	import BrandLinkedin from '@tabler/icons-svelte/icons/brand-linkedin';
</script>

<section id="hero" aria-label="Welcome section">
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
			<a
				class="social-media__link"
				href="https://www.linkedin.com/in/randy-li-853237199/"
				aria-label="LinkedIn profile"
			>
				<BrandLinkedin size={24} />
			</a>
		</li>
	</ul>
	<button class="hero__button" aria-label="View resume pdf">View Resume</button>
</section>
<section id="about" aria-label="About me">
	<h2 class="hero__subtitle">About</h2>
	<p class="hero__description">
		I am a programmer with a passion for JavaScript. The blend of creativity and logic is what fuels
		my enjoyment for web development.
	</p>
	<p class="hero__description">
		When I am not at my computer I enjoy spending my time reading, hiking, and listening to music.
	</p>
</section>

<style>
	#hero {
		padding-top: calc(var(--navbar-height) + var(--spacing-xx-large));
		height: 90vh;
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
		color: var(--color-text);
	}

	.hero__description {
		font-family: var(--font-family-primary);
		color: var(--color-text-muted);
	}

	.hero__button {
		background-color: transparent;
		border: 1px solid var(--color-text);
		color: var(--color-text);
		border-radius: 0.25rem;
		padding: var(--spacing-x-small) var(--spacing-medium);
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
		padding: var(--spacing-small);
		transition: all 0.2s ease;
	}

	.social-media__link:hover {
		transform: translate(2px, -2px);
	}
</style>
