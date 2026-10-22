<script>
	export let size = 40;
	export let thickness = 4;
	export let label = 'Loading';
</script>

<div
	class="mew-spinner"
	role="status"
	aria-label={label}
	style="width: {size}px; height: {size}px; border-width: {thickness}px;"
/>

<style>
	.mew-spinner {
		border-style: solid;
		border-color: rgba(255, 255, 255, 0.1);
		border-top-color: var(--main-color);
		border-radius: 50%;
		animation: mew-spin 1s linear infinite;
	}

	@keyframes mew-spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
