<script>
	export let data
</script>

<div class="continents-graph-container">
	<section>
		<details aria-label="more-info-ocean-cleanup" class="more-info-continents">
			<summary>{data.dataHygraph.dashboard.chartContinent.buttons[0]}</summary>
			<p>{data.dataHygraph.dashboard.chartContinent.moreInfo[0]}</p>
		</details>
	</section>

	<div class="wrapper-continents">
		<div
			class="continents-variables"
			style="
			--asia: {data.dataApi.totals.world_ratio.asia}%;
			--africa: {data.dataApi.totals.world_ratio.africa}%; 
			--north-america: {data.dataApi.totals.world_ratio.north_america}%; 
			--south-america: {data.dataApi.totals.world_ratio.south_america}%;
			--europe:  {data.dataApi.totals.world_ratio.europe}%;
			--antarctica:  {data.dataApi.totals.world_ratio.antarctica}%;
			--oceania: {data.dataApi.totals.world_ratio.oceania}%;"
		/>

		<ul class="continents-key">
			<li class="key-item">
				<details>
					<summary class="continent-summary"><span class="key-item-asia" />{data.dataHygraph.dashboard.chartContinent.buttons[1]}</summary>
					<p>{data.dataApi.totals.world_ratio.asia}{data.dataHygraph.dashboard.chartContinent.moreInfo[1]}</p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><span class="key-item-africa" />{data.dataHygraph.dashboard.chartContinent.buttons[2]}</summary>
					<p>{data.dataApi.totals.world_ratio.africa}{data.dataHygraph.dashboard.chartContinent.moreInfo[2]}</p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><span class="key-item-north-america" />{data.dataHygraph.dashboard.chartContinent.buttons[3]}</summary>
					<p>{data.dataApi.totals.world_ratio.north_america}{data.dataHygraph.dashboard.chartContinent.moreInfo[3]}</p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><span class="key-item-south-america" />{data.dataHygraph.dashboard.chartContinent.buttons[4]}</summary>
					<p>{data.dataApi.totals.world_ratio.south_america}{data.dataHygraph.dashboard.chartContinent.moreInfo[4]}</p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><span class="key-item-europe" />{data.dataHygraph.dashboard.chartContinent.buttons[5]}</summary>
					<p>{data.dataApi.totals.world_ratio.europe}{data.dataHygraph.dashboard.chartContinent.moreInfo[5]}</p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><span class="key-item-antarctica" />{data.dataHygraph.dashboard.chartContinent.buttons[6]}</summary>
					<p>{data.dataApi.totals.world_ratio.antarctica}{data.dataHygraph.dashboard.chartContinent.moreInfo[6]}</p>
				</details>
			</li>

			<li class="key-item">
				<details>
					<summary class="continent-summary"><span class="key-item-oceania" />{data.dataHygraph.dashboard.chartContinent.buttons[7]}</summary>
					<p>{data.dataApi.totals.world_ratio.oceania}{data.dataHygraph.dashboard.chartContinent.moreInfo[7]}</p>
				</details>
			</li>
		</ul>
	</div>
</div>

<style>
	.wrapper-continents {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		justify-content: center;
		margin: 0 auto;
		margin-top: 2rem;
	}

	/* PIE CHART (continents graph)  */
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
			#b0b0b0 var(--asia) calc(var(--africa) + var(--asia)),
			#64d0f2 var(--africa) calc(var(--africa) + var(--asia) + var(--north-america)),
			#003854 var(--north-america) calc(var(--africa) + var(--asia) + var(--north-america) + var(--south-america)),
			#84ce5f var(--south-america) calc(var(--africa) + var(--asia) + var(--north-america) + var(--south-america) + var(--europe)),
			#95d6e3 var(--europe) calc(var(--africa) + var(--asia) + var(--north-america) + var(--south-america) + var(--europe) +	var(--antarctica)),
			#ebebcb var(--antarctica) calc(var(--africa) + var(--asia) + var(--north-america) + var(--south-america) + var(--europe) +	var(--antarctica) + var(--oceania))
		);

		border-radius: 50%;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
	}

	/*  KEY */
	.continents-key {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.key-item {
		/* width: 10em; */
	}
	.continent-summary:hover {
		background-color: rgba(225, 220, 197, 0.185);
		font-weight: 700;
	}



	.key-item-asia {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #5cc8de;
	}

	.key-item-africa {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #b0b0b0;
	}

	.key-item-north-america {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #64d0f2;
	}

	.key-item-south-america {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #003854;
	}

	.key-item-europe {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #84ce5f;
	}

	.key-item-antarctica {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #95d6e3;
	}

	.key-item-oceania {
		width: 2rem;
		height: 1rem;
		border: solid 1px black;
		background-color: #ebebcb;
	}

	.continent-summary {
		display: flex;
		gap: 0.3em;
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

	/*  MEDIA QUERIES */

	/* DARKMODE */
	@media (prefers-color-scheme: dark) {
		.more-info-continents > summary {
			background-color: var(--lightBlue);
			box-shadow: none;
		}

		.more-info-continents > a {
			box-shadow: none;
			background-color: var(--lightBlue);
			padding: 0.5em 0.5em;
			margin: 0;
			text-decoration: none;
			color: var(--textColor);
		}

		.more-info-continents > a:hover {
			outline: 1px solid var(--accentGray);
		}

		.more-info-continents > summary:hover {
			outline: 1px solid var(--accentGray);
		}

		.continents-variables {
			border: 1px solid white;
			box-shadow: 0 3px 10px rgba(238, 236, 236, 0.3);
		}

		.key-item-south-america {
			border: 1px solid white;
		}
	}

	/* BREAKPOINTS */

	/* Breakpoints medium screen */
	@media (min-width: 600px) {
	}

	@media (min-width: 700px) {
	}

	/* Breakpoints large screen */
	@media (min-width: 1300px) {
	}
</style>
