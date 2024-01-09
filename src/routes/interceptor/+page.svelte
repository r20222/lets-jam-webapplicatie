<script>
	import Navigation from '../../lib/components/navigation.svelte';
    import Infotext from '../../lib/components/infotext.svelte';
	import TrashRemoved from '../../lib/components/trash-removed.svelte';
    import Startdate from '../../lib/components/startdate.svelte';
    import Image from '../../lib/molecules/image.svelte';
    import Map from '../../lib/components/map.svelte'
    export let data

</script>

<Navigation />
<section>
    <h2>{data.currentInterceptor[0].name}</h2>
    <Infotext data={data.currentInterceptorHygraph[0].riverInfoText} />
    <TrashRemoved data={data.currentInterceptor[0]} text={data.dataHygraph} />
    <Startdate data={data.currentInterceptor[0]} text={data.currentInterceptorHygraph[0].riverStartDate} />
    <Image data={data.currentInterceptorHygraph[0].riverImage} />
    <div class="map">
        <Map data={data} />
    </div>
</section>
   
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
         "trash-removed-total-box trash-removed-last-month"
         "dashboard-info dashboard-info"
         "dashboard-info-startdate dashboard-info-startdate"
         "map map"
         "image image"
         
     }
 
     h2 {
         grid-area: header;
     }
     /* vanaf 992px */
     @media (min-width:62em) {
     section{
         margin: 0rem 2rem 2rem 18rem;
         grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
         /* grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr; */
         grid-template-areas:
         "header header header header header"
            "trash-removed-total-box trash-removed-last-month map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info-startdate dashboard-info-startdate image image image"
            "dashboard-info-startdate dashboard-info-startdate image image image"
            "dashboard-info-startdate dashboard-info-startdate image image image";
     }
     /* .map{
         grid-area: map;
         width:100%;
         height:100%;
     } */
 }   
</style>