<script>
	export let title = ''
</script>

<details>
	<summary>{title}</summary>
	<slot />
</details>

<style>
	details {
		padding: 0.5em;
		cursor: pointer;
	}

	summary {
		outline-color: var(--borderFilterColor);
		font-weight: 550;
		color: var(--borderFilterColor);
	}
</style>
