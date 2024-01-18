<script>
	export let link
	export let href
</script>

<a {href}>{link}</a>

<style>
	a {
		color: var(--darkBlue);
		padding: 0.4em;
		text-decoration: none;
	}

	a:focus {
		outline-color: var(--darkBlue);
	}

	a:hover {
		border-bottom: 1px solid var(--darkBlue);
	}
</style>
