<script>
	export let data
	export let visible = true
	function ToggleMenu() {
		visible = !visible
	}

	let menuOpen = true

	function toggleMobileMenu() {
		menuOpen = !menuOpen
	}

	// const mobileButton = document.querySelector('.btn-mobile');
	// const menuList = document.querySelector('.menu-list');

	// mobileButton.addEventListener('click', function () {
	// 	menuList.classList.toggle('menu-list-open');
	// });
</script>

<header class="Header {visible ? 'visible-nav' : 'unvisible-nav'}">
	<nav>
		<ul class="mobile-nav">
			<li>
				<img src="/Ocean-Cleanup-Logo-Dark.png" alt="logo of The ocean cleanup" />
			</li>
			<li>
				<button on:click={toggleMobileMenu} class="btn-mobile" type="button">
					<svg
						class={menuOpen ? 'open' : 'close'}
						role="img"
						fill="var(--darkBlue)"
						height="30"
						width="50"
						viewBox="0 0 10 10"
						aria-hidden="true"
						focusable="false"
					>
						<path d="m1 7h8v2h-8zm0-3h8v2h-8zm0-3h8v2h-8z" />
					</svg>
					<svg
						class={menuOpen ? 'close' : 'open'}
						fill="var(--darkBlue)"
						height="30"
						width="50"
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 490 490"
						xml:space="preserve"
						><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><g id="SVGRepo_iconCarrier">
							<polygon
								points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "
							/>
						</g></svg
					>
				</button>
			</li>
		</ul>
		<ul class="menu-list {menuOpen ? 'menu-list' : 'menu-list-open'}">
			<li>
				<a href="/" class="nav-link active" aria-label={data.navLinkjes[0]}>
					<span>{data.navLinkjes[0]}</span>
				</a>
			</li>

			<li>
				<a href="/" class="nav-link" aria-label={data.navLinkjes[1]}>
					<span>{data.navLinkjes[1]}</span>
				</a>
			</li>

			<li>
				<a href="/" class="nav-link" aria-label={data.navLinkjes[2]}>
					<span>{data.navLinkjes[2]}</span>
				</a>
			</li>
		</ul>
		<button on:click={ToggleMenu} class="button-nav">HIDE MENU</button>
	</nav>
</header>

<button on:click={ToggleMenu} class="btn-show-menu">SHOW MENU</button>

<style>
	ul,
	li {
		list-style: none;
		color: white;
		background-color: var(--whiteColor);
	}

	.mobile-nav {
		display: flex;
		justify-content: space-between;
	}
	ul {
		padding-left: 2rem;
		padding-right: 2rem;
		margin: 0;
		padding-top: 1rem;
	}

	a {
		text-decoration: none;
		color: var(--darkBlue);
	}
	.open {
		display: block;
		transition: 0.5s;
	}

	.close {
		display: none;
		transition: 0.5s;
	}

	.menu-list {
		z-index: -1;
		padding: 3rem 0rem;
		margin-top: -2rem;
		opacity: 0;
		transform: translateY(-300px);
		transition: 0.5s;
	}

	.menu-list-open {
		z-index: -1;
		opacity: 1;
		transform: translateY(0px);
		transition: 0.5s;
	}

	/* Nav */
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 5.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		z-index: 100;
	}

	nav {
		height: 5.5rem;
		display: flex;
		flex-direction: column;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		/* overflow: hidden; */
	}

	.btn-mobile {
		margin: 1rem;
		background-color: var(--whiteColor);
		text-decoration: none;
		border: none;
	}

	.button-nav {
		display: none;
	}

	/* animatie visible/unvisible nav (r20222) */
	.visible-nav {
		transform: 0;
		transition: 0.1s;
	}
	.unvisible-nav {
		transform: translateY(-5.5rem);
		transition: 0.1s;
	}
	nav img {
		left: 0;
		top: 0;
		width: 11rem;
		height: 100%;
		padding: 0rem;
	}

	.nav-link {
		text-align: center;
		color: var(--darkBlue);
		/* font-size: 1.5rem; */
	}

	.nav-link span {
		display: flex;
		padding: 0.5rem;
		justify-content: center;
		/* gap: 1rem; */
		font-weight: 600;
		/* font-size: 1.5rem; */
		text-transform: uppercase;
		letter-spacing: 0.05rem;
	}

	.active {
		color: var(--lightBlue);
	}

	/* Breakpoints medium screen */
	@media (min-width: 992px) {
		/* Nav */
		header {
			position: fixed;
			top: 0;
			left: 0;
			width: 250px;
			height: 100vh;
			box-shadow: var(--boxShadow) 0px 0px 8px;
		}

		nav img {
			width: 250px;
			height: auto;
		}

		nav {
			height: 100%;
			width: 250px;
			flex-direction: column;
			justify-content: left;
			gap: 6rem;
			overflow: hidden;
		}

		.menu-list {
			padding: 3rem 1rem;
			margin-top: 0rem;
			opacity: 1;
			transform: translateY(0px);
		}

		.menu-list-open {
			opacity: 1;
		}
		ul {
			padding: 0;
		}

		.btn-mobile {
			display: none;
		}

		.button-nav {
			position: absolute; 
			display: block;
			background-color: var(--borderFilterColor);
			border: 1.5px solid var(--darkBlue);
			border-radius: 0.5rem;
			padding: 0.8rem;
			bottom: 2rem;
			left: 2rem;
			width: fit-content;
			color: var(--buttonText);
			font-weight: 500;
			text-transform: uppercase;
			letter-spacing: 0.05rem;
		}

		.btn-show-menu {
			position: fixed;
			display: block;
			background-color: var(--borderFilterColor);
			border: 1.5px solid var(--darkBlue);
			border-radius: 0.5rem;
			padding: 0.8rem;
			bottom: 2rem;
			left: 2rem;
			width: fit-content;
			color: var(--buttonText);
			font-weight: 500;
			text-transform: uppercase;
			letter-spacing: 0.05rem;
			z-index: 2;
		}

		button:hover {
			background-color: rgba(128, 128, 128, 0.332);
			cursor: pointer;
		}

		/* animatie visible/unvisible nav (r20222) */
		.visible-nav {
			transform: 0;
			transition: 0.1s;
		}
		.unvisible-nav {
			transform: translateX(-250px);
			transition: 0.1s;
		}

		.nav-link {
			display: flex;
			justify-content: left;
			align-items: center;
			margin-bottom: 1rem;
			gap: 1rem;
		}

		.nav-link span {
			display: flex;
			justify-content: left;
			align-items: center;
			padding: 0rem;
			/* gap: 1rem; */
			font-weight: 600;
			/* font-size: 1.5rem; */
			text-transform: uppercase;
			letter-spacing: 0.05rem;
		}

		.nav-link span:hover {
			color: var(--lightBlue);
		}

		.active {
			color: var(--lightBlue);
		}
	}

	/* Breakpoints large screen */
	@media (min-width: 1200px) {
		.nav-link {
			display: flex;
			justify-content: left;
			align-items: center;
		}

		.nav-link span {
			display: flex;
			justify-content: left;
			align-items: center;
			gap: 1rem;
			font-weight: 600;
			font-size: 1rem;
			text-transform: uppercase;
			letter-spacing: 0.05rem;
		}

		.nav-link:hover {
			color: var(--lightBlue);
		}

		.active {
			color: var(--lightBlue);
		}
	}
</style>
