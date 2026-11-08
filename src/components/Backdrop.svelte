<script>
	// Page background: a dark violet gradient with soft violet, indigo and magenta
	// light drifting slowly behind the page, a faint warm glow, fine grain and a
	// darker edge. Render it once in the root layout.
	//
	// The colour fields are painted once; only transform moves them, so the browser
	// slides already-painted layers on the GPU and never repaints per frame. The
	// grain also stops large gradients from showing colour bands.

	/** Set false for a still background. */
	export let animated = true;
</script>

<div class="mew-backdrop" class:still={!animated} aria-hidden="true">
	<div class="field field-violet" />
	<div class="field field-indigo" />
	<div class="field field-magenta" />
	<div class="field field-warm" />
	<div class="grain" />
	<div class="vignette" />
</div>

<style>
	/* The backdrop sits behind the page, so the page itself must not paint over it. */
	:global(html) {
		background-color: var(--background);
	}

	:global(html body) {
		background: transparent !important;
	}

	.mew-backdrop {
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		pointer-events: none;
		contain: strict;
		background: var(--page-gradient, var(--background));
	}

	.field {
		position: absolute;
		border-radius: 50%;
		will-change: transform;
	}

	/* Main light, top left. */
	.field-violet {
		top: -42vmax;
		left: -22vmax;
		width: 80vmax;
		height: 80vmax;
		background: radial-gradient(
			closest-side,
			rgba(146, 64, 240, 0.42) 0%,
			rgba(146, 64, 240, 0.16) 55%,
			rgba(146, 64, 240, 0) 100%
		);
		animation: mew-backdrop-drift-a 34s ease-in-out infinite alternate;
	}

	/* Cool counterweight, bottom left. */
	.field-indigo {
		bottom: -46vmax;
		left: -30vmax;
		width: 76vmax;
		height: 76vmax;
		background: radial-gradient(
			closest-side,
			rgba(86, 72, 232, 0.3) 0%,
			rgba(86, 72, 232, 0.1) 55%,
			rgba(86, 72, 232, 0) 100%
		);
		animation: mew-backdrop-drift-b 42s ease-in-out -12s infinite alternate;
	}

	/* Pink-violet, right side. */
	.field-magenta {
		top: 12vh;
		right: -30vmax;
		width: 66vmax;
		height: 66vmax;
		background: radial-gradient(
			closest-side,
			rgba(196, 66, 220, 0.22) 0%,
			rgba(196, 66, 220, 0.07) 55%,
			rgba(196, 66, 220, 0) 100%
		);
		animation: mew-backdrop-drift-c 38s ease-in-out -20s infinite alternate;
	}

	/* A hint of the brand yellow, bottom right. */
	.field-warm {
		right: -16vmax;
		bottom: -34vmax;
		width: 52vmax;
		height: 52vmax;
		background: radial-gradient(
			closest-side,
			rgba(249, 200, 45, 0.09) 0%,
			rgba(249, 200, 45, 0.03) 55%,
			rgba(249, 200, 45, 0) 100%
		);
		animation: mew-backdrop-drift-b 50s ease-in-out -30s infinite alternate-reverse;
	}

	.grain {
		position: absolute;
		inset: 0;
		opacity: 0.05;
		background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27160%27%20height%3D%27160%27%3E%3Cfilter%20id%3D%27n%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%27.85%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3CfeColorMatrix%20values%3D%270%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%201.2%20-0.25%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url%28%23n%29%27%2F%3E%3C%2Fsvg%3E');
		background-size: 160px 160px;
	}

	.vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse 120% 95% at 50% 35%,
			rgba(6, 3, 14, 0) 55%,
			rgba(6, 3, 14, 0.55) 100%
		);
	}

	@keyframes mew-backdrop-drift-a {
		0% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		100% {
			transform: translate3d(9vmax, 6vmax, 0) scale(1.12);
		}
	}

	@keyframes mew-backdrop-drift-b {
		0% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		100% {
			transform: translate3d(8vmax, -7vmax, 0) scale(1.1);
		}
	}

	@keyframes mew-backdrop-drift-c {
		0% {
			transform: translate3d(0, 0, 0) scale(1.05);
		}
		100% {
			transform: translate3d(-9vmax, 8vmax, 0) scale(0.95);
		}
	}

	.still .field {
		animation: none;
		will-change: auto;
	}

	@media (prefers-reduced-motion: reduce) {
		.field {
			animation: none;
			will-change: auto;
		}
	}
</style>
