<script lang="ts">
	import Card from './Card.svelte';
</script>

<section id="project" aria-label="My projects">
	<h2>Projects</h2>
	<ul class="cards">
		<li>
			<Card
				name="test1"
				description="Picture of car near ocean sunset on the sand"
				image="test1"
				link="./"
			/>
		</li>
		<li>
			<Card
				name="test2"
				description="Picture of car in the sun and on the road"
				image="test2"
				link="./"
			/>
		</li>
		<li>
			<Card
				name="test3"
				description="Picture of car in the fog and on the grassy hills"
				image="test3"
				link="./"
			/>
		</li>
		<li>
			<Card
				name="test4"
				description="Picture of car in the night driving on a bridge"
				image="test4"
				link="./"
			/>
		</li>
	</ul>
</section>

<style>
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
