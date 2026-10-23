# mew-shared-ui

Styles and Svelte components shared by the Mew dApps, taken from mart.mewfinance.com.
Source only: no build, no install scripts. Components use Svelte 4 syntax and work in Svelte 4 and 5.

```sh
npm i github:AcoSmrkas/mew-shared-ui#v0.1.3
```

## Styles

Import once in the root `+layout.svelte`, before the app's own CSS:

```js
import 'mew-shared-ui/styles.css'; // tokens.css + bootstrap.css + base.css
import '../app.css'; // @tailwind directives and app-only rules
```

Override a token after the import, e.g. `:root { --main-color: #8830f8; }`.
`tokens.css`, `base.css` and `bootstrap.css` can also be imported separately.

## Tailwind 3

```js
import mew from 'mew-shared-ui/tailwind-preset';

export default {
	presets: [mew],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
```

The preset turns off Tailwind's `container` (base.css defines it) and adds `mew-*` colours
mapped to the tokens (`bg-mew-bg`, `text-mew-main`, …).

## Components

```svelte
<script>
	import { Navbar, Footer, PrimaryButton, Spinner, SpinnerBar } from 'mew-shared-ui';
</script>

<Navbar links={[{ label: 'Home', href: '/', key: '' }]} active={pageName}>
	<WalletButton slot="actions" />
</Navbar>

<Footer columns={[{ title: 'Links', links: [{ label: 'FAQ', href: '/faq' }] }]}>
	<svelte:fragment slot="copyright">Mew Finance</svelte:fragment>
</Footer>

<PrimaryButton text="Confirm" big on:click={confirm} />
<Spinner size={40} />
<SpinnerBar size={8} />
```

| Component | Props | Slots |
|---|---|---|
| `Navbar` | `links`, `active`, `logoSrc`, `logoAlt`, `logoHref`, `logoTarget` | `actions`, `menu-icon` |
| `Footer` | `columns`, `copyright`, `year` | default (extra column), `copyright` |
| `PrimaryButton` | `text`, `type`, `disabled`, `big`, `full`, `class`, any button attribute; forwards `click` | default |
| `Spinner` | `size`, `thickness`, `label` | |
| `SpinnerBar` | `size` (colour = `currentColor`) | |

The Navbar's default menu icon uses Font Awesome (`fa-solid fa-bars`); pass `menu-icon` if the app doesn't load it.

Navbar spacing can be tuned per app with CSS variables (defaults in brackets, so leaving them unset changes nothing):
`--mew-nav-gap` (`1rem`, gap between desktop links), `--mew-nav-mobile-pad-top` (`1.5rem`, space above the mobile
menu rows), `--mew-nav-mobile-border` (`#374151`, mobile row border). Set them on `:root` in the app's CSS.
The menu button has no colour of its own; set `.navbar-toggler { color: ... }` in the app's CSS if it should differ.

The Footer renders the link-columns block only when `columns` is non-empty or the default slot is used, so
`<Footer />` alone is just the copyright strip.
