<script>
	export let data 
</script>


<section class="continents-graph-container">

<section>
	<details aria-label="more-info-ocean-cleanup" class="more-info-continents">
		<summary>More info</summary>
		<p>more info over continents ocean cleanup</p>
	</details>
</section>

	<div class="wrapper-continents">

		<div class="continents-variables" style="
			--asia: {data.dataApi.totals.world_ratio.asia}%;
			--africa: {data.dataApi.totals.world_ratio.africa}%; 
			--north-america: {data.dataApi.totals.world_ratio.north_america}%; 
			--south-america: {data.dataApi.totals.world_ratio.south_america}%;
			--europe:  {data.dataApi.totals.world_ratio.europe}%;
			--antarctica:  {data.dataApi.totals.world_ratio.antarctica}%;
			--oceania: {data.dataApi.totals.world_ratio.oceania}%;">
		</div>

		<ul class="continents-key">
			<li class="key-item">
				<details>
					<summary class="continent-summary"><div class="key-item-asia"></div>Asia</summary>
					<p>{data.dataApi.totals.world_ratio.asia}% of total global removed trash is from the Asian continent </p>
				</details>	
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><div class="key-item-africa"></div>Africa</summary>
					<p>{data.dataApi.totals.world_ratio.africa}% of total global removed trash is from the African continent </p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><div class="key-item-north-america"></div>North America</summary>
					<p>{data.dataApi.totals.world_ratio.north_america}% of total global removed trash is from the North American continent </p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><div class="key-item-south-america"></div>South America</summary>
					<p>{data.dataApi.totals.world_ratio.south_america}% of total global removed trash is from the South American continent </p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><div class="key-item-europe"></div>Europe</summary>
					<p>{data.dataApi.totals.world_ratio.europe}% of total global removed trash is from the European continent </p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><div class="key-item-antarctica"></div>Antarctica</summary>
					<p>{data.dataApi.totals.world_ratio.antarctica}% of total global removed trash is from the Antartic continent </p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><div class="key-item-oceania"></div>Oceania</summary>
					<p>Kilograms of removed trash from Oceania is {data.dataApi.totals.world_ratio.oceania}%</p>
				</details>
			</li>
		</ul>

	</div>

</section>


<style>

	.continents-graph-container {
		display: flex;
		flex-direction: column;
		padding: 1em;
	}

	.continents-variables {
		margin: 0 auto;
		width: 15rem;
		height: 15rem;
		background: conic-gradient(
			#5cc8de var(--asia),
			#B0B0B0 var(--asia) calc(var(--africa) + var(--asia)),
			#64D0F2 var(--africa) calc(var(--africa) + var(--asia) + var(--north-america)),
			#003854 var(--north-america) calc(var(--africa) + var(--asia) + var(--north-america) + var(--south-america)),
			#84CE5F var(--south-america) calc(var(--africa) + var(--asia) + var(--north-america) + var(--south-america) + var(--europe)),
			#95d6e3 var(--europe) calc(var(--africa) + var(--asia) + var(--north-america) + var(--south-america) + var(--europe) + var(--antarctica)),
			#ebebcb var(--antarctica) calc(var(--africa) + var(--asia) + var(--north-america) + var(--south-america) + var(--europe) + var(--antarctica) + var(--oceania))
		);
		
		border-radius: 50%;
	}

	

	.continents-key {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: .3rem;
	}

	.key-item-asia {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #5cc8de;
	}

	.key-item-africa{
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #B0B0B0;
	}

	.key-item-north-america{
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #64D0F2;
	}

	.key-item-south-america {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #003854 ;
	}

	.key-item-europe {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #84CE5F;
	}

	.key-item-antarctica{
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #95d6e3 ;
	}

	.key-item-oceania {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #ebebcb;
	}


.continent-summary {
	display: flex;
	gap: .3em;
}

	/* DETAILS */

	details {
		cursor: pointer;
	}

	.more-info-continents > summary:hover {
		transform: scale(1.1);
		background-color: var(--lightBlue);
	}

	.more-info-continents > summary:active {
		/* show <p> show less</p> */
		background-color: var(--darkBlue);
		color: var(--accentGray);
		translate: 0 2px;
		transition: 0.4s;
	}

	.more-info-continents > summary {
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

	.more-info-continents > a:hover {
		background-color: var(--lightBlue);
	}

	.more-info-continents > a:active {
		background-color: var(--darkBlue);
		color: var(--accentGray);
		translate: 0 2px;
		transition: 0.4s;
	}

	/*  media queries */

	/* darkmode */



</style>
