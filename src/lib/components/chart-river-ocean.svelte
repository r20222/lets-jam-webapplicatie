<script>
	// import { onMount } from 'svelte';
	import SvgPlasticBottle from '../atoms/plastic-bottle-svg.svelte';

	export let data;

	// console.log(data)
	// data.riverDataJson.systems.forEach( system => {
	// 	totalTrashKgRiver.push(system.debris_extracted_total)
	// });

	let totalTrashKgRiver = 0;
	for (let i = 0; i < data.riverDataJson.systems.length; i++) {
		if (data.riverDataJson.systems[i] !== null) {
			totalTrashKgRiver += data.riverDataJson.systems[i].debris_extracted_total;
		} else {
			i++;
		}
	}
</script>

<section class="container-chart-river-ocean">

<h2>{data.dataHygraph.dashboard.chartRiverOcean.titel}</h2>

<!-- show more info -->

<section>
	<details aria-label="more-info-ocean-cleanup" class="more-info-systems">
		<summary>More info</summary>
		<p>
			We named our company "The Ocean Cleanup" but a lot of plastic finds its way into the ocean via
			rivers first. To prevent the plastic from reaching the ocean, we've put inceptors in the most
			polluting rivers.
		</p>
		<a href="interceptor?id=100">Learn more</a>
	</details>
</section>

<!-- 2x SVG bottle graph  -->
<div class="wrapper-graph-ocean-river">
	<section class="wrapper-ocean-trash-removed">
		<!-- style="--percentageBeforeAnimation:{percentage}" -->
		<a href="/oceanSystem"><SvgPlasticBottle /></a>

		<div>
			<h3>Ocean <!-- {percentage} -->% </h3>

			<details class="more-info-ocean">
			
				<summary>More info</summary>
				<p>
					The total amount of plastic removed by The Ocean Cleanup is {new Intl.NumberFormat().format(
						data.dataApi.totals.debris_extracted_total
					)} kg. The amount of plastic that is removed by the ocean system is {new Intl.NumberFormat().format(
						data.oceanDataJson.systems[0].debris_extracted_total
					)} kg. This means <!-- {percentage} -->% of the total amount of collected trash comes from the ocean.
				</p>
				<a href="/oceanSystem">To the ocean system</a>
			</details>

		</div>
	</section>

	<section class="wrapper-river-trash-removed">
		<a href="/interceptor?id=100"><SvgPlasticBottle /></a>

		<div>
			<h3>River <!-- {percentage} -->% </h3>

			<details class="more-info-river">
				
				<summary>More info</summary>
				<p>
					The total amount of plastic removed by The Ocean Cleanup is {new Intl.NumberFormat().format(
						data.dataApi.totals.debris_extracted_total
					)} kg. The amount of plastic removed by all river systems combined is {new Intl.NumberFormat().format(
						totalTrashKgRiver
					)} kg. This means <!-- {percentage} -->% of the total amount of collected trash comes from rivers.
				</p>
				<a href="/interceptor?id=100"> To river systems</a>
			</details>

		</div>
	</section>
</div>

</section>

<style>

.container-chart-river-ocean {

}
	/* SVG */

	.wrapper-graph-ocean-river {
		box-sizing: border-box;
		width: 100%;
		padding: 2em 0;
		margin: 1em auto;
	}

	.wrapper-river-trash-removed,
	.wrapper-ocean-trash-removed {
		display: flex;
		flex-direction: column;
		gap: 2em;
		align-items: center;
		justify-content: center;
		/* padding: 0 0 2em 1em; */
	}

	/* DETAILS */
	details {
		cursor: pointer;
	}

	details > summary:hover {
		transform: scale(1.1);
		background-color: var(--lightBlue);
	}

	details > summary:active {
		/* show <p> show less</p> */
		background-color: var(--darkBlue);
		color: var(--accentGray);
		translate: 0 2px;
		transition: 0.4s;
	}

	details > summary {
		padding: 0.5em 2em;
		width: 5em;
		background-color: #f0efef;
		box-shadow: 5px 5px 5px rgb(195, 192, 192);
		display: flex;
		flex-direction: column;
	}

	details > p {
		line-height: 1.6em;
	}

	details > a {
		/* border: solid 1px black; */
		box-shadow: 5px 5px 5px rgb(195, 192, 192);
		background-color: #f0efef;
		padding: .5em .5em;
		margin: 0;
		text-decoration: none;
		color: var(--textColor);
	}

	details > a:hover {
		background-color: var(--lightBlue);
	}

	details > a:active {
		background-color: var(--darkBlue);
		color: var(--accentGray);
		translate: 0 2px;
		transition: 0.4s;
	}

	/* SVG ANIMATIONS */

	/* CONTAINER / MEDIA QUERIES */

	/* @media accessibility */
	@media (prefers-color-scheme: dark) {
		details > summary {
			background-color: var(--lightBlue);
			box-shadow: 5px 5px 5px rgb(195, 192, 192);
		}

		details > a {
			box-shadow: 5px 5px 5px rgb(195, 192, 192);
			background-color: var(--lightBlue);
			padding: .5em .5em;
			margin: 0;
			text-decoration: none;
			color: var(--textColor);
		}

		details > a:hover {
			outline: 1px solid var(--accentGray);
		}

		details > summary:hover {
			outline: 1px solid var(--accentGray);
		}
	}

	/* Breakpoints medium screen */
	@media (min-width: 600px) {
	
		.wrapper-graph-ocean-river {
			display: flex; 
			gap: 2em;
			justify-content: space-around;
		}
		}

		@media (min-width: 700px) {
	
	.wrapper-graph-ocean-river {
		display: flex; 
		flex-direction: column;
		gap: 2em;
		justify-content: space-around;
	}
	}


		/* Breakpoints large screen */
	@media (min-width: 1300px) {
		.wrapper-graph-ocean-river {
		display: flex; 
		flex-direction: row;
		gap: 2em;
		justify-content: space-around;
	}
	}

	

</style>
