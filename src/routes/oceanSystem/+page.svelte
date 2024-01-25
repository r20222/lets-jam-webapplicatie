<script>
	import Navigation from '../../lib/components/navigation.svelte'
	import Infotext from '../../lib/components/info-text.svelte'
	import TrashRemovedOcean from '../../lib/components/trash-removed.svelte'
	import LastPortCall from '../../lib/components/lastportcall.svelte'
	import Image from '../../lib/molecules/image.svelte'
	import Startdate from '../../lib/components/startdate.svelte'
	import { Map, MapDropDown } from '../../lib/index.js'
	import {
		initializeMap,
		createRiverGeoData,
		createOceanGeoData,
		addMapLoadEvent,
		addClickEvent,
		addMouseEnterEvent,
		addMouseLeaveEvent
	} from '../../lib/utils/mapUtils.js'
	export let data
	let gridWithWithoutNav

	import { onMount } from 'svelte'
	let map

	onMount(() => {
		map = initializeMap()

		let riverGeoData = createRiverGeoData(data)
		let oceanGeoData = createOceanGeoData(data)

		addMapLoadEvent(map, oceanGeoData, riverGeoData)

		addClickEvent(map, (properties, coordinates) => {
			if (riverGeoData) {
				window.location.href = `/interceptor/?id=${properties.id}&coordinates=${JSON.stringify(
					coordinates
				)}`
			} else {
				window.location.href = `/oceanSystem?&coordinates=${JSON.stringify(coordinates)}`
			}
		})
		addMouseEnterEvent(map)
		addMouseLeaveEvent(map)
	})
</script>

<svelte:head>
	<title>{data.dataHygraph.dashboard.ocean.titlePage}</title>
</svelte:head>

<Navigation bind:visible={gridWithWithoutNav} data={data.dataHygraph.dashboard.nav} />

<section class={gridWithWithoutNav ? 'margin-with-navigation' : 'margin-without-navigation'}>
	<h2>{data.dataApi.systems[0].name}</h2>
	<TrashRemovedOcean data={data.dataApi.systems[0]} text={data.dataHygraph} />
	<Infotext data={data.dataHygraph.dashboard.ocean.oceanInfotext} />
	<Startdate
		data={data.dataApi.systems[0]}
		text={data.dataHygraph.dashboard.ocean.oceanStartDate}
	/>
	<LastPortCall {data} />
	<div class="map">
		<MapDropDown {data} />
		<Map {data} />
	</div>
	<Image data={data.dataHygraph.dashboard.ocean.oceanImage} />
</section>

<!-- Scroll to top button -->
<a href="#top" class="scroll-top" aria-label="scroll to top">
	<!-- add icon -->{data.dataHygraph.dashboard.buttonTop}
</a>

<style>
	.map {
		grid-area: map;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
		margin: 0;
	}
	/* Grid container */
	/* soms staat de grid area al gedefinieerd in de component zelf */

	/* mobiele versie */
	section {
		margin: 5rem 1.5rem 1.5rem 1.5rem;
		display: grid;
		grid-template-columns: 1fr, 1fr;
		/* grid-template-rows: 0.1fr, 0.3fr, 6fr, 2fr, 1fr, 1fr, 1fr, 1fr; */
		gap: 1.2rem;
		grid-template-areas:
			'header header'
			'trash-removed-total trash-removed-last-month'
			'dashboard-info dashboard-info'
			'dashboard-info-startdate dashboard-info-startdate'
			'dashboard-info-lastportcall dashboard-info-lastportcall'
			'map map'
			'image image';
	}

	h2 {
		grid-area: header;
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

	/* vanaf 992px */
	@media (min-width: 62em) {
		section {
			/* margin: 0rem 2rem 2rem 18rem; */
			grid-template-columns: repeat(5, 1fr);
			/* grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr; */
			grid-template-areas:
				'header header header header header'
				'trash-removed-total trash-removed-last-month map map map'
				'dashboard-info dashboard-info map map map'
				'dashboard-info dashboard-info map map map'
				'dashboard-info dashboard-info map map map'
				'dashboard-info-startdate dashboard-info-startdate image image image'
				'dashboard-info-lastportcall dashboard-info-lastportcall image image image'
				'dashboard-info-lastportcall dashboard-info-lastportcall image image image';
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
</style>
