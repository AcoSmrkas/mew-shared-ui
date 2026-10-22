<script>
	/** @type {{ label: string, href: string, key?: string, target?: string }[]} */
	export let links = [];
	/** Key (or href) of the current link. */
	export let active = '';
	export let logoSrc = '/logo.png';
	export let logoAlt = 'Logo';
	export let logoHref = 'https://mewfinance.com';
	export let logoTarget = '_new';

	let open = false;
	let scrollY = 0;

	$: active, (open = false);

	const keyOf = (link) => link.key ?? link.href;
</script>

<svelte:window bind:scrollY />

<div
	id="navbar"
	class="mew-navbar"
	style="padding-top: {scrollY === 0 ? '25px' : '0'}; height: {scrollY === 0 ? '112px' : '87px'};"
>
	<div class="nav-container">
		<a target={logoTarget} href={logoHref} class="logo">
			<img src={logoSrc} alt={logoAlt} />
		</a>
		<ul class="nav-desktop d-none d-md-flex">
			{#each links as link (keyOf(link))}
				<li class:active={keyOf(link) === active}>
					<a href={link.href} target={link.target}>{link.label}</a>
				</li>
			{/each}
		</ul>
		<div class="actions">
			<slot name="actions" />
			<button
				type="button"
				on:click={() => (open = !open)}
				class="d-block d-md-none navbar-toggler"
				aria-label="Menu"
				aria-expanded={open}
			>
				<slot name="menu-icon"><i class="fa-solid fa-bars" /></slot>
			</button>
		</div>
	</div>
	<div class="nav-mob" class:open>
		<ul class="w-100 d-flex flex-col d-md-none">
			{#each links as link (keyOf(link))}
				<li class:active={keyOf(link) === active}>
					<a href={link.href} target={link.target} on:click={() => (open = false)}>
						{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.mew-navbar {
		z-index: 11;
		position: fixed;
		width: 100%;
		background: var(--background);
		transition: all 0.5s ease;
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		padding: 15px;
		width: 1140px;
		max-width: 100%;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-right: auto;
		flex: 0 1 auto;
	}

	.logo img {
		position: relative;
		height: 57px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-desktop {
		column-gap: 1rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	li {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	ul > li > a {
		display: inline-block;
		width: 100% !important;
		text-align: center;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-left: auto;
		flex: 0 1 auto;
	}

	.navbar-toggler {
		font-size: 2.25rem;
		line-height: 2.5rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.navbar-toggler:hover {
		color: var(--main-color);
	}

	.nav-mob {
		display: flex;
		position: relative;
		justify-content: space-between;
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		background: var(--background);
		transition: all 0.2s ease;
		visibility: hidden;
		opacity: 0;
	}

	.nav-mob.open {
		visibility: visible;
		opacity: 1;
	}

	.nav-mob ul {
		row-gap: 1rem;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}

	.nav-mob li {
		line-height: 2.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #374151;
	}
</style>
