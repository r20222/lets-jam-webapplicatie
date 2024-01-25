<script>
	import Navigation from '../lib/components/navigation.svelte'
	import Infotext from '../lib/components/info-text.svelte'
	import TrashRemoved from '../lib/components/trash-removed.svelte'
	import TotalTrashChart from '../lib/components/total-trash-chart.svelte'

	import ChartContinents from '../lib/components/chart-continents.svelte'
	import ChartRiverOcean from '../lib/components/chart-river-ocean.svelte'
	import SystemStatus from '../lib/components/system-status.svelte'
	import { Map, MapDropDown } from '../lib/index.js'
	export let data
	let gridWithWithoutNav
</script>

<svelte:head>
	<title>{data.dataHygraph.dashboard.titlePage}</title>
</svelte:head>

<Navigation bind:visible={gridWithWithoutNav} data={data.dataHygraph.dashboard.nav} />

<div class="main">
	<div
		class="grid-container {gridWithWithoutNav
			? 'margin-with-navigation'
			: 'margin-without-navigation'}"
	>
		<!-- Blue line -->
		<div class="menu">
			<div class="dashboard-line" />
		</div>

		<!-- Title  -->
		<section class="header-dashboard">
			<h1>{data.dataHygraph.dashboard.title}</h1>
		</section>

		<!-- TrashRemoved -->
		<TrashRemoved data={data.dataApi.totals} text={data.dataHygraph} />

		<!-- infotext -->
		<Infotext data={data.dataHygraph.dashboard.infotext} />

		<!-- map -->
		<div class="map">
			<MapDropDown {data} />
			<Map {data} />
		</div>

		<!-- system statuses -->
		<SystemStatus {data} />

		<!-- chart-river-ocean -->
		<section class="panel chart-river-ocean">
			<ChartRiverOcean {data} />
		</section>

		<!-- chart-continents -->
		<section class="panel chart-continents">
			<h2>{data.dataHygraph.dashboard.chartContinent.title}</h2>
			<ChartContinents {data} />
		</section>

		<!-- TrashChart over time (bottles) -->
		<section class="panel trash-collected-over-time-chart">
			<TotalTrashChart {data} />
		</section>
	</div>
</div>
<!-- End main section -->

<!-- Scroll to top button -->
<a href="#top" class="scroll-top" aria-label="scroll to top">
	<!-- add icon -->{data.dataHygraph.dashboard.buttonTop}
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

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--lightGray);
		color: var(--textColor);
		position: relative;
	}

	h2 {
		color: var(--darkBlue);
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	a {
		text-decoration: none;
	}

	/* Grid mobiel */
	.grid-container {
		margin: 5rem 1.5rem 1.5rem 1.5rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		/* grid-template-rows: 0.01fr 0.1fr 1fr 1fr 0.5fr 0.8fr 0.5fr 0.5fr 1fr ; */
		gap: 1.2rem;
		grid-template-areas:
			'menu menu'
			'header-dashboard header-dashboard'
			'trash-removed-total trash-removed-last-month'
			'dashboard-info dashboard-info'
			'map map'
			'system-status system-status'
			'chart-river-ocean chart-river-ocean'
			'chart-continents chart-continents'
			'trash-collected-over-time-chart trash-collected-over-time-chart';
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

	.trash-collected-over-time-chart {
		grid-area: trash-collected-over-time-chart;
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
	.dashboard-line {
		height: 2px;
		width: 18%;
		background-color: var(--lightBlue);
	}

	/* dashboard H1 */
	h1 {
		line-height: 1.2;
		/* font-weight: 500; */
		text-transform: uppercase;
		color: var(--darkBlue);
	}
	.header-dashboard h1 {
		font-size: 2rem;
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
		text-transform: uppercase;
	}

	@keyframes progress {
		0% {
			stroke-dasharray: 0 100;
		}
	}

	/* screens with min-width: 700px */
	@media (min-width: 43.75em) {
		.grid-container {
			grid-template-columns: repeat(4, 1fr);
			/* grid-template-rows: 0.01fr 0.1fr .5fr 1fr 1fr 1fr 1fr; */
			grid-template-areas:
				'menu menu menu menu'
				'header-dashboard header-dashboard header-dashboard header-dashboard'
				'trash-removed-total trash-removed-total trash-removed-last-month trash-removed-last-month'
				'dashboard-info dashboard-info map map'
				'dashboard-info dashboard-info map map'
				'system-status system-status system-status system-status'
				'chart-river-ocean chart-river-ocean chart-continents chart-continents'
				'trash-collected-over-time-chart trash-collected-over-time-chart trash-collected-over-time-chart trash-collected-over-time-chart';
		}
	}

	/* screens min-width: 992px */
	@media (min-width: 62em) {
		.grid-container {
			grid-template-columns: repeat(6, 1fr);
			/* grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr; */
			grid-template-areas:
				'menu menu menu menu menu menu'
				'header-dashboard header-dashboard header-dashboard header-dashboard header-dashboard header-dashboard'
				'trash-removed-total trash-removed-total trash-removed-total trash-removed-last-month trash-removed-last-month trash-removed-last-month'
				'dashboard-info dashboard-info map map map map'
				'system-status system-status system-status system-status system-status system-status'
				'chart-river-ocean chart-river-ocean chart-river-ocean chart-continents chart-continents chart-continents'
				'trash-collected-over-time-chart trash-collected-over-time-chart trash-collected-over-time-chart trash-collected-over-time-chart trash-collected-over-time-chart trash-collected-over-time-chart';
		}
		/* past de margin aan als de nav in of uitgeklapt is */
		.margin-with-navigation {
			margin: 0rem 2rem 2rem 18rem;
			transition: 0.1s;
		}
		.margin-without-navigation {
			margin: 0rem 2rem 2rem 2rem;
			transition: 0.1s;
		}
	}

	/* Breakpoints large screen 1200px */
	/* Is deze echt nodig? r20222 */
	@media (min-width: 75em) {
		.panel {
			padding: 2rem;
		}

		.map {
			padding: 1.5rem;
		}

		/* .chart-continents {
			font-size: 3rem;
		}

		.chart-river-ocean {
			font-size: 2.5rem;
		}

		.chart-river-ocean,
		.chart-continents,
		h2 {
			font-size: 1.5rem;
		} */

		.dashboard-line {
			height: 2px;
			width: 6%;
			background-color: var(--lightBlue);
		}

		.scroll-top {
			display: none;
		}
	}
</style>
