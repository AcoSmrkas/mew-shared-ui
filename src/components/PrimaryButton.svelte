<script>
	export let text = '';
	export let type = 'button';
	export let disabled = false;
	export let big = false;
	export let full = false;
	let className = '';
	export { className as class };
</script>

<button
	{type}
	{disabled}
	class="btn btn-primary {className}"
	class:btn-big={big}
	class:w-100={full}
	on:click
	{...$$restProps}><slot>{text}</slot></button
>
