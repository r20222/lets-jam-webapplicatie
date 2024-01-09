<script>
	import Navigation from '../lib/components/navigation.svelte';
	import Infotext from '../lib/components/infotext.svelte';
	import TrashRemoved from '../lib/components/trash-removed.svelte';
	import Map from '../lib/components/map.svelte';
	import Trashgraph from '../lib/components/trashGraph.svelte';
	import ChartContinents from '../lib/components/chartContinents.svelte';
	import ChartRiverOcean from '../lib/components/chartRiverOcean.svelte';
	import SystemStatus from '../lib/components/system-status.svelte';
	export let data;
</script>

<svelte:head>
	<title>Dashboard The Ocean Cleanup</title>
</svelte:head>

<Navigation />

<section class="main">
	<div class="grid-container">
		<!-- Blue line -->
		<div class="menu">
			<div class="blue-dashboard-line" />
		</div>

		<!-- Title  -->
		<section class="header-dashboard">
			<h1>{data.dataHygraph.dashboard.title}</h1>
		</section>

		<TrashRemoved data={data.dataApi.totals} text={data.dataHygraph} />

		<!-- Box 3: percentage since 2013 -->
		<section class="panel chart-river-ocean">
			<ChartRiverOcean {data} />
		</section>

		<!-- Box 4: percentage in 2040 -->
		<section class="panel chart-continents">
			<h2>Plastic removed per continent</h2>
			<ChartContinents {data} />
		</section>

		<!-- Grafiek: share swith icons -->
		<section class="panel trash-graph">
			<Trashgraph {data} />
		</section>

		<section class="map">
			<Map {data} />
		</section>

		<Infotext data={data.dataHygraph.dashboard.infotext} />

		<!-- system-status -->
		<SystemStatus {data} />

	</div>
</section>
<!-- End main section -->

<!-- Scroll to top button -->
<a href="#top" class="scroll-top" aria-label="scroll to top">
	<!-- add icon -->TOP
</a>


<style>
	/* Proxima font */
	@font-face {
		font-family: 'Proxima';
		src: url('/ProximaNovaFont.otf') format('opentype') weight('normal');
		src: url('/Proxima-Nova-Bold.otf') format('opentype') weight('bold');
	}

	/* Base */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Proxima', sans-serif;
	}

	:root {
		--darkBlue: #143653;
		--trashRemovedBackground: white;
		--lightBlue: #5cc8de;
		--whiteColor: #ffffff;
		--lightGray: #f7f7f7;
		--accentGray: rgb(228, 228, 228);
		--textColor: #143653;
		--boxShadow: rgba(128, 128, 128, 0.132);
		--color: rgb(212, 212, 212);
		--textSize: 1.2rem;
		--iconSize: 2rem;
	}

	/* Als darkmode de standaard instelling is */
	@media (prefers-color-scheme: dark) {
		:root {
			--darkBlue: #ffffff;
			--trashRemovedBackground: #143653;
			--lightBlue: #5cc8de;
			--whiteColor: #143653;
			--lightGray: #0d2437;
			--accentGray: rgb(228, 228, 228);
			--textColor: #ffffff;
			--boxShadow: rgba(128, 128, 128, 0);
			--color: rgb(212, 212, 212);
			--textSize: 1.2rem;
			--iconSize: 2rem;
		}
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--lightGray);
		color: var(--textColor);
		position: relative;
	}

	h2 {
		line-height: 1.2;
		font-weight: 500;
		color: var(--darkBlue);
		margin-bottom: 1rem;
	}

	a {
		text-decoration: none;
	}

	/* Grid */
	.grid-container {
		margin: 8rem 1.5rem 1.5rem 1.5rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		/* grid-template-rows: 0.01fr 0.1fr 1fr 1fr 0.5fr 0.8fr 0.5fr 0.5fr 1fr ; */
		gap: 1.2rem;
		grid-template-areas:
			'menu menu'
			'header-dashboard header-dashboard'
			'trash-removed-total-box trash-removed-last-month'
			'dashboard-info dashboard-info'
			'map map'
			'system-status system-status'
			'chart-river-ocean chart-river-ocean'
			'chart-continents chart-continents'
			'trash-graph trash-graph';
	}

	.panel {
		border-radius: 0.5rem;
		padding: 1.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
	}

	/* Grid areas */
	.header-dashboard {
		display: flex;
		justify-content: space-between;
		grid-area: header-dashboard;
	}

	.menu {
		grid-area: menu;
	}

	.trash-graph {
		grid-area: trash-graph;
	}

	.map {
		grid-area: map;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
	}

	.chart-river-ocean {
		grid-area: chart-river-ocean;
	}

	.chart-continents {
		grid-area: chart-continents;
	}

	/* is nu system-status, staat in component gedefinieerd */
	/* .share {
		grid-area: share;
	} */

	/* line */
	.blue-dashboard-line {
		height: 2px;
		width: 18%;
		background-color: var(--lightBlue);
	}

	/* dashboard H1 */
	h1 {
		line-height: 1.2;
		font-weight: 500;
		text-transform: uppercase;
		color: var(--darkBlue);
	}
	.header-dashboard h1 {
		font-size: 2rem;
	}

	/* boxes styling */
	.chart-river-ocean,
	.chart-continents {
		font-size: 1.6rem;
		color: var(--lightBlue);
	}

	.chart-river-ocean,
	.chart-continents,
	h2 {
		font-size: 1.6rem;
		color: var(--darkBlue);
	}

	/* Scroll to top */
	.scroll-top {
		position: absolute;
		bottom: 1%;
		right: 2%;
		width: 3rem;
		height: 3rem;
		padding: 0.5rem;
		background-color: var(--lightBlue);
		color: var(--whiteColor);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	@keyframes progress {
		0% {
			stroke-dasharray: 0 100;
		}
	}

	@media (min-width: 700px) {
		.grid-container {
			margin: 8rem 1.5rem 1.5rem 1.5rem;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			/* grid-template-rows: 0.01fr 0.1fr .5fr 1fr 1fr 1fr 1fr; */
			gap: 1.2rem;
			grid-template-areas:
				'menu menu menu menu'
				'header-dashboard header-dashboard header-dashboard header-dashboard'
				'trash-removed-total-box trash-removed-total-box trash-removed-last-month trash-removed-last-month'
				'dashboard-info dashboard-info map map'
				'dashboard-info dashboard-info map map'
				'system-status system-status system-status system-status'
				'chart-river-ocean chart-river-ocean chart-continents chart-continents'
				'trash-graph trash-graph trash-graph more';
		}
	}

	@media (min-width: 992px) {
		.grid-container {
			margin: 3rem 2rem 2rem 18rem;
			grid-template-columns: repeat(6, 1fr);
			/* grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr; */
			grid-template-areas:
				'menu menu menu menu menu menu'
				'header-dashboard header-dashboard header-dashboard header-dashboard header-dashboard header-dashboard'
				'trash-removed-total-box trash-removed-total-box trash-removed-total-box trash-removed-last-month trash-removed-last-month trash-removed-last-month'
				'dashboard-info dashboard-info map map map map'
				'system-status system-status system-status system-status system-status system-status'
				'chart-river-ocean chart-river-ocean chart-river-ocean chart-continents chart-continents chart-continents'
				'trash-graph trash-graph trash-graph more more more';
		}
	}

	/* Breakpoints large screen */
	@media (min-width: 1200px) {
		.panel {
			padding: 2rem;
		}

		.map {
			padding: 1.5rem;
		}

		.chart-continents {
			font-size: 3rem;
		}

		.chart-river-ocean {
			font-size: 2.5rem;
		}

		.chart-river-ocean,
		.chart-continents,
		h2 {
			font-size: 1.5rem;
		}

		.blue-dashboard-line {
			height: 2px;
			width: 6%;
			background-color: var(--lightBlue);
		}

		.scroll-top {
			display: none;
		}
	}
</style>
