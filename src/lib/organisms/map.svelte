<script>
	import { onMount } from 'svelte'
	import {
		createRiverGeoData,
		createOceanGeoData,
		addMapLoadEvent,
		addClickEvent,
		addMouseEnterEvent,
		addMouseLeaveEvent
	} from '../utils/mapUtils.js'

	export let data
	let map

	onMount(() => {
		const isDarkMode =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

		const mapStyle = isDarkMode
			? 'mapbox://styles/mapbox/dark-v11'
			: 'mapbox://styles/mapbox/light-v11'

		mapboxgl.accessToken =
			'pk.eyJ1IjoibWNwaGVuZHJpa3MiLCJhIjoiY2xuYWpkajM3MDRvNzJxbzdjbGg1YXc0MiJ9.mRRivdosZVdSXQ9FDd0ZwA'
		map = new mapboxgl.Map({
			container: 'map',
			style: mapStyle,
			zoom: 2,
			center: [-74.5, 40]
		})

		map.addControl(new mapboxgl.NavigationControl())

		const riverGeoData = createRiverGeoData(data)
		const oceanGeoData = createOceanGeoData(data)

		addMapLoadEvent(map, oceanGeoData, riverGeoData)
		addClickEvent(map, (properties, coordinates) => {
			if (riverGeoData) {
				window.location.href = `/interceptor/?id=${properties.id}&coordinates=${JSON.stringify(
					coordinates
				)}`
			} else {
				window.location.href = `/oceanSystem?coordinates=${JSON.stringify(coordinates)}`
			}
		})
		addMouseEnterEvent(map)
		addMouseLeaveEvent(map)
	})
</script>

<section id="map" />

<style>
	#map {
		width: 100%;
		height: 500px;
		position: relative;
	}
</style>
