# mew-shared-ui

Styles and Svelte components shared by the Mew dApps, taken from mart.mewfinance.com.
Source only: no build, no install scripts. Components use Svelte 4 syntax and work in Svelte 4 and 5.

```sh
npm i github:AcoSmrkas/mew-shared-ui#v0.2.0
```

## Styles

Import once in the root `+layout.svelte`, before the app's own CSS:

```js
import 'mew-shared-ui/styles.css'; // tokens.css + bootstrap.css + base.css
import '../app.css'; // @tailwind directives and app-only rules
```

Override a token after the import, e.g. `:root { --main-color: #8830f8; }`.

v0.2.0 adds violet accent and gradient tokens: `--accent-color`, `--accent-border`, `--accent-soft`,
`--accent-glow`, `--line-color`, `--main-gradient`, `--card-gradient`, `--page-gradient`, `--card-radius`.
`.btn-primary`, `.btn-secondary` and `.btn-info` get a soft gradient (hover stays flat), inputs get a soft
focus ring, and there are new classes:

| Class | Look |
|---|---|
| `mew-card` | violet gradient panel, thin violet border, soft glow |
| `mew-card-hover` | add to a `mew-card` that lifts and brightens on hover |
| `mew-pill` | small rounded uppercase label |
| `mew-divider` | hairline that fades out at both ends |
| `mew-dialog` | on a native `<dialog>`: no frame of its own (put a `mew-card` inside), dim violet backdrop |
| `mew-overlay` | on the fixed overlay behind a custom modal: dim violet with a light blur |
| `mew-pager` | on a pager row (also works on Bootstrap's `ul.pagination`): each `page-link` is a rounded violet button; add `page-current` to the "2 of 9" label and `is-disabled` to arrows that can't move |
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
	import { Backdrop, Navbar, Footer, PrimaryButton, Spinner, SpinnerBar } from 'mew-shared-ui';
</script>

<Backdrop />

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
| `Backdrop` | `animated` (default `true`) | |
| `Navbar` | `links`, `active`, `logoSrc`, `logoAlt`, `logoHref`, `logoTarget` | `actions`, `menu-icon` |
| `Footer` | `columns`, `copyright`, `year` | default (extra column), `copyright` |
| `PrimaryButton` | `text`, `type`, `disabled`, `big`, `full`, `class`, any button attribute; forwards `click` | default |
| `Spinner` | `size`, `thickness`, `label` | |
| `SpinnerBar` | `size` (colour = `currentColor`) | |

`Backdrop` is the page background: a dark violet gradient with soft violet, indigo and pink-violet light
drifting slowly, a faint warm glow, fine grain (no colour banding) and darker edges. Render it once in the
root layout. It makes `body` transparent so it can sit behind the page. Only transform animates (no
repaints), and it holds still under `prefers-reduced-motion` or with `animated={false}`.

The Navbar is clear at the top of the page and turns solid with a hairline once the page scrolls or the
menu opens. The current page's link has a short yellow bar under it.

The Navbar's default menu icon uses Font Awesome (`fa-solid fa-bars`); pass `menu-icon` if the app doesn't load it.

Navbar spacing can be tuned per app with CSS variables (defaults in brackets, so leaving them unset changes nothing):
`--mew-nav-gap` (`1rem`, gap between desktop links), `--mew-nav-mobile-pad-top` (`1.5rem`, space above the mobile
menu rows), `--mew-nav-mobile-border` (`rgba(255, 255, 255, 0.08)`, mobile row border). Set them on `:root` in the app's CSS.
The menu button has no colour of its own; set `.navbar-toggler { color: ... }` in the app's CSS if it should differ.

The Footer renders the link-columns block only when `columns` is non-empty or the default slot is used, so
`<Footer />` alone is just the copyright strip.
