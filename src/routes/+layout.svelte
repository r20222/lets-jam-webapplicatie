
<main>
	<slot />
</main>

<style>
    /* Proxima font */
    @font-face {
    font-family: 'Proxima';
    src: url("/ProximaNovaFont.otf") format("opentype") weight("normal");
    src: url("/Proxima-Nova-Bold.otf") format("opentype") weight("bold");
    }

	/* Base */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Proxima', sans-serif;
	}

	:root {
		--darkBlue: #143653;
		--lightBlue: #5cc8de;
		--whiteColor: #ffffff;
		--lightGray: #f7f7f7;
		--accentGray: rgb(228, 228, 228);
		--worldmapGray: #dbdbdb;
		--worldmapBorder: #8c8c8c;
		--worldmapbuttons: rgb(235, 235, 235);
		--textColor: #143653;
		--boxShadow: rgba(128, 128, 128, 0.132);
		--color: rgb(212, 212, 212);
		--textSize: 1.2rem;
		--iconSize: 2rem;
	}

	:global(html) {
		/* font-size: 62.5%; */
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--lightGray);
		color: var(--textColor);
		position: relative;
	}	
</style>