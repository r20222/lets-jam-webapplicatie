<script>
	// import { onMount } from 'svelte';
	import SvgPlasticBottle from '../atoms/plastic-bottle-svg.svelte'

	export let data

	let totalTrashKgRiver = 0;
	for (let i = 0; i < data.riverDataJson.systems.length; i++) {
		if (data.riverDataJson.systems[i] !== null) {
			totalTrashKgRiver += data.riverDataJson.systems[i].debris_extracted_total
		} else {
			i++
		}
	}
</script>

<!-- HTML  -->
<section class="container-chart-river-ocean">

	<h2>{data.dataHygraph.dashboard.chartRiverOcean.titel}</h2>

	<!-- DETAILS: show more info -->
	<section>
		<details aria-label="more-info-ocean-cleanup" class="more-info-systems">
			<summary>{data.dataHygraph.dashboard.chartRiverOcean.buttons[0]}</summary>
			<p>{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[0]}</p>
			<p>{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[1]}</p>
			<a href="interceptor?id=100">{data.dataHygraph.dashboard.chartRiverOcean.buttons[1]}</a>
		</details>
	</section>

	<!-- SVG 2X BOTTLE  -->
	<div class="wrapper-graph-ocean-river">

		<section class="wrapper-ocean-trash-removed">
			<a href="/oceanSystem" aria-label="Read more about the ocean system"><SvgPlasticBottle /></a>

			<div class="wrapper-more-info-ocean">
				<h3>{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[2]} {new Intl.NumberFormat().format(data.dataApi.totals.ocean_river_ratio.percent_ocean)}%</h3>

				<details class="more-info-ocean">
					<summary>{data.dataHygraph.dashboard.chartRiverOcean.buttons[0]}</summary>
					<p>	{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[3]} 
						{new Intl.NumberFormat().format(data.dataApi.totals.debris_extracted_total)} 
						{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[4]} </p>
					<p> {data.dataHygraph.dashboard.chartRiverOcean.moreInfo[5]}
						{new Intl.NumberFormat().format(data.oceanDataJson.systems[0].debris_extracted_total)} 
						{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[4]} </p>
					<p> {data.dataHygraph.dashboard.chartRiverOcean.moreInfo[6]} 
						{new Intl.NumberFormat().format(data.dataApi.totals.ocean_river_ratio.percent_ocean)}
						{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[7]}</p>
					<a href="/oceanSystem">{data.dataHygraph.dashboard.chartRiverOcean.buttons[2]}</a>
				</details>

			</div>
		</section>

		<section class="wrapper-river-trash-removed">

			<a href="/interceptor?id=100" aria-label="Read more about the interceptor"><SvgPlasticBottle /></a>

			<div>
				<h3>{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[8]} {new Intl.NumberFormat().format(data.dataApi.totals.ocean_river_ratio.percent_river)}%</h3>

				<details class="more-info-river">
					<summary>{data.dataHygraph.dashboard.chartRiverOcean.buttons[0]}</summary>
					<p>{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[3]} 
						{new Intl.NumberFormat().format(data.dataApi.totals.debris_extracted_total)} 
						{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[4]}</p>
					<p>{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[9]} 
						{new Intl.NumberFormat().format(totalTrashKgRiver)} 
						{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[4]}</p>
					<p> {data.dataHygraph.dashboard.chartRiverOcean.moreInfo[6]} 
						{new Intl.NumberFormat().format(data.dataApi.totals.ocean_river_ratio.percent_river)}
						{data.dataHygraph.dashboard.chartRiverOcean.moreInfo[10]}</p>
					<a href="/interceptor?id=100"> {data.dataHygraph.dashboard.chartRiverOcean.buttons[3]}</a>
				</details>
			</div>

		</section>

	</div>

</section>

<style>
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
		/* align-items: start; */
	}

	details > p {
		line-height: 1.6em;
	}

	details > a {
		/* border: solid 1px black; */
		box-shadow: 5px 5px 5px rgb(195, 192, 192);
		background-color: #f0efef;
		padding: 0.5em 0.5em;
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

	.wrapper-more-info-ocean {
		display: flex;
		flex-direction: column;
		align-items: start;
		padding-left: 1em;
		padding-right: 1em;
	}

	/* SVG ANIMATIONS */

	/* CONTAINER / MEDIA QUERIES */

	/* @media accessibility */
	@media (prefers-color-scheme: dark) {
		details > summary {
			background-color: var(--lightBlue);
			box-shadow: none;
		}

		details > a {
			box-shadow: none;
			background-color: var(--lightBlue);
			padding: 0.5em 0.5em;
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
		align-items: start;
	}
	}
</style>
