<script>
	import Navigation from '../../lib/components/navigation.svelte';
    import Infotext from '../../lib/components/info-text.svelte';
	import TrashRemoved from '../../lib/components/trash-removed.svelte';
    import Startdate from '../../lib/components/startdate.svelte';
    import Image from '../../lib/molecules/image.svelte';
    import Map from '../../lib/components/map.svelte'
    export let data
    let gridWithWithoutNav;
</script>

<svelte:head>
    <title>{data.currentInterceptorHygraph[0].titlePage}</title>
</svelte:head>

<Navigation bind:visible={gridWithWithoutNav} data={data.dataHygraph.dashboard.nav}/>
<section class="{gridWithWithoutNav ? 'margin-with-navigation' : 'margin-without-navigation'}">
    <h2>{data.currentInterceptor[0].name}</h2>
    <Infotext data={data.currentInterceptorHygraph[0].riverInfoText} />
    <TrashRemoved data={data.currentInterceptor[0]} text={data.dataHygraph} />
    <Startdate data={data.currentInterceptor[0]} text={data.currentInterceptorHygraph[0].riverStartDate} />
    <Image data={data.currentInterceptorHygraph[0].riverImage} />
    <div class="map">
        <Map data={data} />
    </div>
</section>

<!-- Scroll to top button -->
<a href="#top" class="scroll-top" aria-label="scroll to top">
	<!-- add icon -->{data.dataHygraph.dashboard.buttonTop}
</a>
   
<style>

    /* Als darkmode de standaard instelling is */
    @media (prefers-color-scheme: dark) {
        :root {
        --darkBlue: #ffffff;
        --lightBlue: #5CC8DE;
        --whiteColor: #143653;
        --lightGray: #0D2437;
        --accentGray: rgb(228, 228, 228);
        --textColor: #ffffff;
        --boxShadow: rgba(128, 128, 128, 0.0);
        --color: rgb(212, 212, 212);
        --textSize: 1.2rem;
        --iconSize: 2rem;
        --trashRemovedBackground: #143653;
        } 
    }
    .map {
		grid-area: map;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
        margin: 0;
	} 
    /* mobiele versie */
    section{
     margin: 5rem 1.5rem 1.5rem 1.5rem;
     display: grid;
     grid-template-columns: 1fr, 1fr;
     grid-template-rows: 0.1fr, 0.3fr, 6fr, 2fr, 1fr, 1fr, 1fr, 1fr;
     gap: 1.2rem;
     grid-template-areas:
         "header header"
         "trash-removed-total trash-removed-last-month"
         "dashboard-info dashboard-info"
         "dashboard-info-startdate dashboard-info-startdate"
         "map map"
         "image image"
         
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
     @media (min-width:62em) {
     section{
         margin: 0rem 2rem 2rem 18rem;
         grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
         /* grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr; */
         grid-template-areas:
         "header header header header header"
            "trash-removed-total trash-removed-last-month map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info-startdate dashboard-info-startdate image image image"
            "dashboard-info-startdate dashboard-info-startdate image image image"
            "dashboard-info-startdate dashboard-info-startdate image image image";
     }
       /* past de margin aan als de nav in of uitgeklapt is */
		.margin-with-navigation{
			margin: 0rem 2rem 2rem 18rem;
			transition:.1s;
		}
		.margin-without-navigation{
			margin: 0rem 2rem 2rem 2rem;
			transition:.1s;
		}
 }   
</style>