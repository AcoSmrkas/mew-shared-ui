<script>
	/** @type {{ title: string, links: { label: string, href: string, target?: string }[] }[]} */
	export let columns = [];
	/** Plain-text owner name; use the "copyright" slot for markup. */
	export let copyright = 'Mew Finance';
	export let year = new Date().getFullYear();
</script>

<div class="mew-footer">
	<div class="columns container font-azeret">
		{#each columns as column}
			<div class="column">
				<h6 class="font-manrope">{column.title}</h6>
				{#each column.links as link}
					<div>
						<a class="text-light" href={link.href} target={link.target}>{link.label}</a>
					</div>
				{/each}
			</div>
		{/each}
		<slot />
	</div>
	<div class="bottom text-light font-azeret">
		<p>&copy; <slot name="copyright">{copyright}</slot> {year}</p>
	</div>
</div>

<style>
	.mew-footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: space-around;
		padding: 0.25rem;
		background: var(--footer);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.columns {
		display: flex;
		flex-direction: row;
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex-grow: 1;
	}

	h6 {
		margin: 0 0 0.5rem;
		color: #fff;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	.bottom {
		display: flex;
		flex-grow: 1;
		justify-content: center;
		margin-top: 1rem;
		padding: 0.25rem 0.25rem 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	p {
		margin: 0;
	}
</style>
