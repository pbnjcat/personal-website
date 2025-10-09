<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<Hero />
<section id="projects" aria-label="My projects">
	<h2>Projects</h2>
	<ul class="cards">
		<li>
			<Card
				name="Hill in denmark"
				description="Picture of denmark on the grassy hills. Foggy background in the morning."
				image="image1"
				link="./"
			/>
		</li>
	</ul>
</section>

<section id="education" aria-label="My education">
	<h2 class="section__title">Education</h2>
	<p></p>
	<p>I attended University for</p>
	<p class="description">Learning about</p>
</section>

<style>
	#projects {
		padding-bottom: var(--spacing-xx-large);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		grid-column-gap: var(--spacing-large);
		grid-row-gap: var(--spacing-large);
		padding: 0;
		list-style: none;
	}

	h2 {
		color: var(--color-text);
		padding-bottom: var(--spacing-large);
	}
</style>
