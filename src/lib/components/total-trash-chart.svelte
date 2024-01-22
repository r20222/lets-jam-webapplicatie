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

		console.log(monthNames[0])


		isEnabled = true;

		// HighchartsMore(Highcharts);

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
    text: ''
},

// accessibility: {
//     point: {
//         valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
//     }
// },

xAxis: {
        categories: [monthNames[0], monthNames[1], monthNames[2], monthNames[3], monthNames[4], monthNames[5], monthNames[6]],
        title: {
            text: 'Months'
        }
    },
yAxis: {
    startOnTick: true,
    min: 0 ,
    // categories: [monthNames[0], monthNames[1], monthNames[2], monthNames[3], monthNames[4], monthNames[5], monthNames[6]],
    title: {
        text: 'Total trash removed from the ocean'
    },
    labels: {
            format: '{value} kg'
        },
},


tooltip: {
    useHTML: true,
    headerFormat: '<table>',
    pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
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
        },
},

series: [{
    data: [
        { 
            x: 0, 
            y: laatsteVierMaanden[0].debris_extracted, 
            z: 20, 
            name: monthNames[0], 
            },
        {   x: 1, 
            y: laatsteVierMaanden[1].debris_extracted, 
            z: 20, 
            name: monthNames[1], 
           },
        {   x: 2, 
            y: laatsteVierMaanden[2].debris_extracted, 
            z: 20, 
            name: monthNames[2], 
           },
        {   x: 3, 
            y: laatsteVierMaanden[3].debris_extracted, 
            z: 20, 
            name: monthNames[3], 
            },
        {   x: 4, 
            y: laatsteVierMaanden[4].debris_extracted, 
            z: 20, 
            name: monthNames[4], 
          },
        {   x: 5, 
            y: laatsteVierMaanden[5].debris_extracted, 
            z: 20, 
            name: monthNames[5], 
          }
    ],
    colorByPoint: true
}]
});
	}, 100);
});
</script>

<h2>{data.dataHygraph.dashboard.trashChart.title}</h2>
<p>{data.dataHygraph.dashboard.trashChart.measurement}</p>



{#if !isEnabled}
    <table>
        <tr>
            <th>{monthNames[0]}</th>
            <td>{laatsteVierMaanden[0].debris_extracted}</td>
        </tr>
        <tr>
            <th>{monthNames[1]}</th>
            <td>{laatsteVierMaanden[1].debris_extracted}</td>
        </tr>
        <tr>
            <th>{monthNames[2]}</th>
            <td>{laatsteVierMaanden[2].debris_extracted}</td>
        </tr>
        <tr>
            <th>{monthNames[3]}</th>
            <td>{laatsteVierMaanden[3].debris_extracted}</td>
        </tr>
    </table>
{:else}
    <section id="container" dataOne="{monthNames[0]}"></section>
{/if}

<style>
	#container {
    width: 100%;
    height: 500px; 
	font-size: 140%;
    }
	table th{
		display: flex;
		justify-content: start;
	}

</style>
