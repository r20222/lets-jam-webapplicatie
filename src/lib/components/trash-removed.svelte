<script>
	export let data
	export let text
</script>

<!-- was box-1 -->
<section class="trash-removed-total">
	<span>{new Intl.NumberFormat().format(data.debris_extracted_total)} KG</span>
	<p>{text.dashboard.trashRemoved.total}</p>
</section>

<!-- was box-2 -->
<section class="trash-removed-last-month">
	<span>{new Intl.NumberFormat().format(data.debris_extracted_last_30d)} KG</span>
	<p>{text.dashboard.trashRemoved.month}</p>
</section>

<style>
	section {
		border-radius: 0.5rem;
		padding: 1.5rem;
		background-color: var(--trashRemovedBackground);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
		/* border: 20px solid var(--lightBlue) */
	}
	.trash-removed-total {
		grid-area: trash-removed-total;
	}

	.trash-removed-last-month {
		grid-area: trash-removed-last-month;
	}

	span {
		font-size: 1.2em;
		font-weight: bold;
	}
	@media screen and (min-width: 460px){
		span {
		font-size: 2em;
	}
	}
</style>
