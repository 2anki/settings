<script lang="ts">
	export let label = '';
	export let name = '';
	export let onClick = (name: string, value: boolean) => {};
	export let checked = false;
	export let description = '';

	const toggleCheckbox = (event: MouseEvent | Event) => {
		event.stopPropagation();
		checked = !checked;
		onClick(name, checked);
	};
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			toggleCheckbox(event);
		}
	};
</script>

<div class="container" on:click={toggleCheckbox} on:keydown={handleKeyDown} title={description}>
	<input type="checkbox" {name} {checked} />
	{#if label}
		<label for={name}>{label}</label>
	{/if}
</div>

<style>
	.container {
		display: flex;
		gap: 0.2rem;
		font-size: 1.5rem;
		align-items: center;
		user-select: none;
	}
</style>
