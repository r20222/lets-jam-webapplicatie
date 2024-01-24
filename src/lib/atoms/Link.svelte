<script>
	export let link
	export let href
</script>

<a {href}>{link}</a>

<style>
	a {
		color: var(--borderFilterColor);
		padding: 0.4em;
		text-decoration: none;
	}

	a:focus {
		outline-color: var(--borderFilterColor);
	}

	a:hover {
		border-bottom: 1px solid var(--borderFilterColor);
	}
</style>
