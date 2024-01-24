<script>
		import { onMount } from 'svelte';

export let data;
let trashdata = data;


// controle of JS aanstaat in de browser
let isEnabled = false;


// de slice -4 pakt de laatste vier months
const laatsteVierMaanden = trashdata.dataApi.totals.months.slice(-6);


// gebruik de Intl browser API om nummers om te zetten in maandnaam
const monthNames = laatsteVierMaanden.map(item => {
	const date = new Date();
	date.setMonth(item.month - 1); // Maanden zijn zero-based in JavaScript

	return new Intl.DateTimeFormat('nl-NL', { month: 'long' }).format(date);
});
	onMount(() => {
		isEnabled = true

		// hieronder haal ik de data op uit de html tabel (progressive enhancement)
		let dataFromTable = []
		let monthsFromTable = []
		const tableDataTh = document.querySelectorAll('.th-month-name')
		const tableDataTd = document.querySelectorAll('.total-debris')
		
		tableDataTh.forEach((month) => {
			monthsFromTable.push(month.textContent)
		})

		tableDataTd.forEach((tdElement, index) => {
			dataFromTable.push({
				x: index,
				y: parseFloat(tdElement.textContent), // y moet een number zijn
				z: 20,
				name: `${tdElement.textContent} kg`,
				month: monthsFromTable[index]
			})
		});

	
		// Gebruik een setTimeout om ervoor te zorgen dat er wat tijd is om de DOM op te zetten voordat de grafiek wordt geïnitialiseerd
		setTimeout(() => {
			Highcharts.chart('container', {
				chart: {
					type: 'bubble',
					plotBorderWidth: 1,
					zoomType: 'xy'
				},
				legend: {
					enabled: false
				},
				title: {
					text: '  '
				},
				accessibility: {
					point: {
						valueDescriptionFormat: '{index}. {point.name}, trash removed: {point.y} kg.'
					}
				},
				xAxis: {
					categories: [
						monthsFromTable[0],
						monthsFromTable[1],
						monthsFromTable[2],
						monthsFromTable[3],
						monthsFromTable[4],
						monthsFromTable[5],
						monthsFromTable[6]
					],
					title: {
						text: 'Months'
					}
				},
				yAxis: {
					startOnTick: true,
					min: 0,
					// categories: [monthNames[0], monthNames[1], monthNames[2], monthNames[3], monthNames[4], monthNames[5], monthNames[6]],
					title: {
						text: 'Total trash removed from the ocean'
					},
					labels: {
						format: '{value} kg'
					}
				},
				tooltip: {
					useHTML: true,
					headerFormat: '<table>',
					pointFormat:
						'<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
						'<tr><th>Month:</th><td>{point.month}</td></tr>' +
						'<tr><th>Trash removed:</th><td>{point.y} kg</td></tr>',
					footerFormat: '</table>',
					followPointer: true
				},

				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							format: '{point.name}'
						}
					},
					bubble: {
						// Stel de maximale grootte in voor de bubbels
						maxSize: '50%',
						minSize: '5%',
						marker: {
							symbol: 'url(/cropped-plastic-bottle-skull-label.png)'
						}
					}
				},

				series: [
					{
						data: dataFromTable,
						colorByPoint: true
					}
				]
			})
		}, 100)
	})
</script>

<h2>{data.dataHygraph.dashboard.trashChart.title}</h2>
<p>{data.dataHygraph.dashboard.trashChart.measurement}</p>

<section id="container">
	<table>
		<tr>
			<th class="th-month-name">{monthNames[0]}</th>
			<td class="total-debris">{laatsteVierMaanden[0].debris_extracted}</td>
		</tr>
		<tr>
			<th class="th-month-name">{monthNames[1]}</th>
			<td class="total-debris">{laatsteVierMaanden[1].debris_extracted}</td>
		</tr>
		<tr>
			<th class="th-month-name">{monthNames[2]}</th>
			<td class="total-debris">{laatsteVierMaanden[2].debris_extracted}</td>
		</tr>
		<tr>
			<th class="th-month-name">{monthNames[3]}</th>
			<td class="total-debris">{laatsteVierMaanden[3].debris_extracted}</td>
		</tr>
		<tr>
			<th class="th-month-name">{monthNames[4]}</th>
			<td class="total-debris">{laatsteVierMaanden[4].debris_extracted}</td>
		</tr>
		<tr>
			<th class="th-month-name">{monthNames[5]}</th>
			<td class="total-debris">{laatsteVierMaanden[5].debris_extracted}</td>
		</tr>
	</table>
</section>
	

	<!-- <section id="container" dataOne={monthNames[0]} /> -->


<style>
	#container {
		width: 100%;
		height: 500px;
		font-size: 140%;
	}
	table th {
		display: flex;
		justify-content: start;
	}
</style>
