<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Card from '$lib/components/Card.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const projects = $derived(data.projects);
	const work = $derived(data.work);
	const education = $derived(data.education);
</script>

<Hero />
<section id="about" aria-label="About me">
	<h2 class="hero__subtitle">About</h2>
	<p class="hero__description">
		I enjoy solving problems with technology, especially in networking and systems administration,
		where I get to learn how systems work and keep them running reliably. When I am not at my
		computer, I enjoy reading, fishing, and listening to music.
	</p>
</section>
<section id="projects" aria-label="My projects">
	<h2>Projects</h2>
	<ul class="cards">
		{#each projects as project}
			<Card
				title={project.title}
				description={project.description}
				image={project.image}
				link={project.demo}
			/>
		{/each}
	</ul>
</section>
<section id="work" aria-label="My work">
	<h2 class="section__title">Work</h2>
	{#each work as job}
		<h3>{job.employer}</h3>
		<h4>{job.title}</h4>
		<span
			>{job.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
			-
			{job.endDate
				? job.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
				: 'Present'}</span
		>
		<p class="description">{job.description}</p>
	{/each}
</section>

<section id="education" aria-label="My education">
	<h2 class="section__title">Education</h2>
	{#each education as edu}
		<h3>{edu.school}</h3>
		<h4>{edu.study}</h4>
		<span>
			{edu.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
			-
			{edu.endDate
				? edu.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
				: 'Present'}
		</span>
		<p class="description">{edu.description}</p>
	{/each}
</section>

<style>
	:global(section) {
		padding: var(--spacing-x-large) 0;
	}

	:global(h2) {
		color: var(--color-text);
		padding-bottom: var(--spacing-medium);
	}

	h3 {
		color: var(--color-text);
	}

	h4 {
		color: var(--color-text-muted);
	}

	p {
		color: var(--color-text-muted);
	}

	span {
		color: var(--color-text-muted);
		font-size: var(--font-size-body-small);
	}

	.description {
		color: var(--color-text-muted);
	}

	.cards {
		display: grid;
		gap: var(--spacing-large);
		padding: 0 var(--spacing-xx-small);
		list-style: none;
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		align-items: start;
	}
</style>
