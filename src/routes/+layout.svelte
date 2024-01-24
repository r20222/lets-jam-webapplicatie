
<main>
	<slot />
</main>

<style>
	/* Proxima font */
	@font-face {
		font-family: 'Proxima';
		src: url('/ProximaNovaFont.otf') format('opentype') weight('normal');
		src: url('/Proxima-Nova-Bold.otf') format('opentype') weight('bold');
	}

	/* Base */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Proxima', sans-serif;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--lightGray);
		color: var(--textColor);
		position: relative;
	}	
</style>

