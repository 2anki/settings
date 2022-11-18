<script lang="ts">
	export let label = '';
	export let description = '';
	export let placeholder = '';
	export let name = '';
	export let onChange = (name: string, event: Event) => {};
</script>

<div class="container" title={description}>
	<label for={name}>{label}</label>
	<div><input on:change={(event) => onChange(name, event)} type="text" {name} {placeholder} /></div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding: 0.9rem 0;
		padding-right: 1rem;
		padding-left: 0.2rem;
	}

	.container label {
		font-weight: bold;
	}
	.container input {
		font-size: 1.2rem;
		width: 100%;
		padding: 0.2rem;
	}
</style>
