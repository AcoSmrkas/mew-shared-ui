<script>
	export let size = 16;
</script>

<span
	class="loader"
	role="status"
	aria-label="Loading"
	style="
		--size: {size}px;
		width: {size}px;
		height: {size * 6}px;
		border-radius: {size / 2}px;"
/>

<style>
	.loader {
		display: inline-block;
		position: relative;
		box-sizing: border-box;
		animation: animloader 1s linear infinite alternate;
	}

	@keyframes animloader {
		0% {
			box-shadow: calc(1.25 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(2.5 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(3.75 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(5 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(6.25 * var(--size)) 0 rgba(255, 255, 255, 0);
		}
		20% {
			box-shadow: calc(1.25 * var(--size)) 0 currentColor,
				calc(2.5 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(3.75 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(5 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(6.25 * var(--size)) 0 rgba(255, 255, 255, 0);
		}
		40% {
			box-shadow: calc(1.25 * var(--size)) 0 currentColor, calc(2.5 * var(--size)) 0 currentColor,
				calc(3.75 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(5 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(6.25 * var(--size)) 0 rgba(255, 255, 255, 0);
		}
		60% {
			box-shadow: calc(1.25 * var(--size)) 0 currentColor, calc(2.5 * var(--size)) 0 currentColor,
				calc(3.75 * var(--size)) 0 currentColor, calc(5 * var(--size)) 0 rgba(255, 255, 255, 0),
				calc(6.25 * var(--size)) 0 rgba(255, 255, 255, 0);
		}
		80% {
			box-shadow: calc(1.25 * var(--size)) 0 currentColor, calc(2.5 * var(--size)) 0 currentColor,
				calc(3.75 * var(--size)) 0 currentColor, calc(5 * var(--size)) 0 currentColor,
				calc(6.25 * var(--size)) 0 rgba(255, 255, 255, 0);
		}
		100% {
			box-shadow: calc(1.25 * var(--size)) 0 currentColor, calc(2.5 * var(--size)) 0 currentColor,
				calc(3.75 * var(--size)) 0 currentColor, calc(5 * var(--size)) 0 currentColor,
				calc(6.25 * var(--size)) 0 currentColor;
		}
	}
</style>
