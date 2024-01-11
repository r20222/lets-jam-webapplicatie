<script>
	export let data;

	let operational = [];
	let installed = [];
	let planned = [];
	let inMaintenance = [];

	function checked(check, pushed) {
		data.riverDataJson.systems.forEach((interceptor) => {
			if (interceptor.status == check) {
				pushed.push(interceptor);
			}
		});
	}

	checked('in_operation', operational);
	checked('installed_for_testing', installed);
	checked('planned', planned);
	checked('in_maintenance', inMaintenance);
</script>

<!-- Share: table system statuses -->
<section class="panel system-status">
	<h2>{data.dataHygraph.dashboard.systemStatus.title}</h2>
	<table>
		<tr>
			<td class="dot">
				<div class="pulse-container">
					<div class="status-pulse">
						<div class="pulse-marker green" />
						<h3>{data.dataHygraph.dashboard.systemStatus.opties[0]}</h3>
					</div>
				</div>
			</td>
			<td class="amount">
				<h4>{operational.length} {data.dataHygraph.dashboard.systemStatus.opties[5]}</h4>
			</td>
		</tr>

		<tr>
			<td class="dot">
				<div class="pulse-container">
					<div class="status-pulse">
						<div class="pulse-marker green" />
						<h3>{data.dataHygraph.dashboard.systemStatus.opties[1]}</h3>
					</div>
				</div>
			</td>
			<td class="amount">
				<h4>{data.dataHygraph.dashboard.systemStatus.opties[6]}</h4>
			</td>
		</tr>

		<tr>
			<td class="dot">
				<div class="pulse-container">
					<div class="status-pulse">
						<div class="pulse-marker blue" />
						<h3>{data.dataHygraph.dashboard.systemStatus.opties[2]}</h3>
					</div>
				</div>
			</td>
			<td class="amount">
				<h4>{installed.length} {data.dataHygraph.dashboard.systemStatus.opties[5]}</h4>
			</td>
		</tr>

		<tr>
			<td class="dot">
				<div class="pulse-container">
					<div class="status-pulse">
						<div class="pulse-marker gray" />
						<h3>{data.dataHygraph.dashboard.systemStatus.opties[3]}</h3>
					</div>
				</div>
			</td>
			<td class="amount">
				<h4>{planned.length} {data.dataHygraph.dashboard.systemStatus.opties[5]}</h4>
			</td>
		</tr>

		<tr>
			<td class="dot">
				<div class="pulse-container">
					<div class="status-pulse">
						<div class="pulse-marker gray" />
						<h3>{data.dataHygraph.dashboard.systemStatus.opties[4]}</h3>
					</div>
				</div>
			</td>
			<td class="amount">
				<h4>{inMaintenance.length} {data.dataHygraph.dashboard.systemStatus.opties[5]}</h4>
			</td>
		</tr>
	</table>
</section>

<style>
	section {
		grid-area: system-status;
		border-radius: 0.5rem;
		padding: 1.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
	}

	.pulse-marker {
		background: black;
		border-radius: 50%;
		height: 1rem;
		width: 1rem;
		transform: scale(1);
		animation: pulse-black 2s infinite;
	}

	.pulse-marker.green {
		background: rgb(132, 206, 95);
		box-shadow: 0 0 0 0 rgb(132, 206, 95);
		animation: pulse-green 2s infinite;
	}

	.pulse-marker.blue {
		background: var(--lightBlue);
		box-shadow: 0 0 0 0 var(--lightBlue);
		animation: pulse-blue 2s infinite;
	}

	.pulse-marker.gray {
		background: rgb(176, 176, 176);
		box-shadow: 0 0 0 0 rgb(176, 176, 176);
		animation: pulse-gray 2s infinite;
	}

	.pulse-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 0.3rem;
	}

	@keyframes pulse-green {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgb(132, 206, 95);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
		}
	}

	@keyframes pulse-blue {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 var(--lightBlue);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
		}
	}

	@keyframes pulse-gray {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgb(176, 176, 176);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
		}
	}

	h3 {
		font-size: 1.5rem;
		margin: 1rem;
	}

	tr {
		height: 1rem;
	}

	table {
		width: 100%;
	}

	.dot {
		width: 40%;
	}

	.status-pulse {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.amount h4 {
		font-family: 'Roboto', monospace;
		color: var(--lightBlue);
		font-weight: 500;
		font-size: 1.5rem;
		margin: 0;
	}

	.amount {
		width: 20%;
	}
</style>
