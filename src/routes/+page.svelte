<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Card from '$lib/components/Card.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	const projects = data.projects;
	const work = data.work;
	const education = data.education;
</script>

<Hero />
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

<section id="projects" aria-label="My projects">
	<h2>Projects</h2>
	<ul class="cards">
		{#each projects as project}
			<li>
				<Card
					title={project.title}
					date={project.startDate}
					description={project.description}
					image={project.image}
					link={project.demo}
				/>
			</li>
		{/each}
	</ul>
</section>

<section id="education" aria-label="My education">
	<h2 class="section__title">Education</h2>
	{#each education as education}
		<h3>{education.school}</h3>
		<h4>{education.study}</h4>
		<span>
			{education.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
			-
			{education.endDate
				? education.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
				: 'Present'}
		</span>
		<p class="description">{education.description}</p>
	{/each}
</section>

<style>
	:global(section) {
		padding-bottom: var(--spacing-xx-large);
	}

	:global(h2) {
		color: var(--color-text);
		padding-bottom: var(--spacing-large);
	}

	h3 {
		color: var(--color-text);
	}

	h4 {
		color: var(--color-text-muted);
	}

	span {
		color: var(--color-text-muted);
		font-size: var(--font-size-body-small);
	}

	.description {
		color: var(--color-text-muted);
	}

	:global(p) {
		color: var(--color-text-muted);
	}

	.cards {
		/* display: grid;
		grid-gap: var(--spacing-large); */
		padding: 0;
		list-style: none;
	}
</style>
