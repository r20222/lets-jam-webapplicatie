<script>
	export let data
	import { DropDown, Link } from '../index.js'

	const getStatusColor = (status) => {
		switch (status) {
			case 'in_operation':
				return '#84ce5f'
			case 'in_maintenance':
				return '#5cc8de'
			case 'installed_for_testing"':
				return '#b0b0b0'
			case 'planned"':
				return '#b0b0b0'
			case 'contract_signed"':
				return '#b0b0b0'
			default:
				return 'black'
		}
	}
</script>

<section>
	<DropDown title="FILTER ON SYSTEM">
		<DropDown title="River Systems">
			<ul>
				{#each data.dataHygraph.dashboard.river as item, index}
					<li>
						<Link
							href="/interceptor?id={item.slug}"
							link={data.riverDataJson.systems[index].name}
						/>
						<span style="background: {getStatusColor(data.riverDataJson.systems[index].status)}" />
					</li>
				{/each}
			</ul>
		</DropDown>
		<DropDown title="Ocean System">
			<ul>
				<li>
					<Link class="drop-link" href="/oceanSystem" link={data.oceanDataJson.systems[0].name} />
					<span style="background: {getStatusColor(data.oceanDataJson.systems.status)}" />
				</li>
			</ul>
		</DropDown>
	</DropDown>
</section>

<style>
	section {
		max-width: auto;
		margin: 0.5rem;
		z-index: 1;
		position: absolute;
		font-weight: 500;
		font-size: 1.2rem;
		background-color: #fff;
		border: 1.5px solid var(--borderFilterColor);
		border-radius: 0.5rem;
		max-height: 435px;
		overflow: auto;
	}

	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		list-style: none;
	}

	span {
		right: 0;
		background: black;
		border-radius: 50%;
		width: 1.5rem;
		height: 1.5rem;
		display: inline-block;
	}
</style>
