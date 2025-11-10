<script lang="ts">
	import BrandGithubFilled from '@tabler/icons-svelte/icons/brand-github-filled';
	import BrandLinkedin from '@tabler/icons-svelte/icons/brand-linkedin';
	import ExternalLink from '@tabler/icons-svelte/icons/external-link';
	import { resolve } from '$app/paths';
	import resumeData from '$lib/data/resume.json';
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
			<a
				class="social-media__link"
				href="https://github.com/pbnjcat"
				rel="noopener noreferrer"
				target="_blank"
				aria-label="GitHub profile"
				data-tool-tip="Github"
			>
				<BrandGithubFilled size={24} />
			</a>
		</li>
		<li class="social-media__item">
			<a
				class="social-media__link"
				rel="noopener noreferrer"
				target="_blank"
				href="https://www.linkedin.com/in/randy-li-853237199/"
				aria-label="LinkedIn profile"
				data-tool-tip="LinkedIn"
			>
				<BrandLinkedin size={24} />
			</a>
		</li>
	</ul>
	<a
		class="hero__cta"
		href={resolve(resumeData.resumeFile as '/')}
		rel="noopener noreferrer"
		target="_blank"
		>View Resume
		<span aria-hidden="true"><ExternalLink size={24} /></span>
	</a>
</section>

<style>
	#hero {
		padding-top: calc(var(--navbar-height) + var(--spacing-xx-large));
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

	.hero__cta {
		display: inline-flex;
		background-color: var(--color-primary);
		align-items: center;
		text-decoration: none;
		gap: var(--spacing-xx-small);
		color: var(--color-text-inversed);
		border-radius: 0.25rem;
		padding: var(--spacing-x-small) var(--spacing-small);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.social-media {
		display: flex;
		gap: var(--spacing-x-small);
		padding: var(--spacing-small) 0;
		list-style: none;
	}

	.social-media__link {
		display: flex;
		align-items: flex-end;
		border-style: 1px solid var(--color-button-border);
		color: var(--color-text-muted);
		text-decoration: none;
		border-radius: var(--spacing-x-small);
		padding: var(--spacing-small);
		transition: all 200ms ease;
	}

	@media (any-hover: none) {
		.hero__cta:active {
			transform: scale(0.97);
			background-color: var(--color-primary-on-hover);
		}

		.social-media__link:active {
			transform: scale(0.97);
			background-color: var(--color-background-row-selected);
		}
	}

	@media (hover) {
		.hero__cta:hover {
			background-color: var(--color-primary-on-hover);
			color: var(--color-text-inversed);
		}

		.hero__cta span {
			display: inline-flex;
			transition: transform 300ms ease;
		}

		.hero__cta:hover span {
			transform: translate(4px, -4px);
		}

		.social-media__link:hover {
			background-color: var(--color-background-row-selected);
		}

		.social-media__link[data-tool-tip] {
			position: relative;
		}

		.social-media__link::after {
			content: attr(data-tool-tip);
			display: block;
			position: absolute;
			background-color: var(--color-primary);
			padding: var(--spacing-xx-small);
			color: var(--color-text-inversed);
			border-radius: var(--spacing-xx-small);
			font-size: var(--font-size-body-small);
			left: 0;
			bottom: 0;
			white-space: nowrap;
			transform: scale(0);
			transition:
				transform ease-out 100ms,
				bottom ease-out 100ms;
		}

		.social-media__link:hover::after {
			transform: scale(1);
			bottom: 100%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.social-media__link::after {
			transition: none;
		}

		.hero__cta:hover span {
			transform: none;
		}
	}
</style>
