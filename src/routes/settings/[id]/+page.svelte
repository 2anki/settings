<script lang="ts">
	import Checkbox from '$lib/components/checkbox.svelte';
	import Input from '$lib/components/input.svelte';
	import supportedOptions from '$lib/model/supportedOptions';
	export let data = { isDefault: false };

	const isDefault = data.isDefault;
	const settingsId = 1; // Replace this with title for object_id
	const setting = supportedOptions();

	const onToggleOption = (name: string, value: boolean) => {
		console.log(name, value);
	};

	const onInputChange = (name: string, event: Event) => {
		console.log(name, event);
	};

	const deckDesc = `You can use this to change the default name which
	comes from the Notion page. If you have an existing deck in Anki you
	want to update then you can also set the name here. It works like Anki
	so you can create groupings (Parent::Child). Please don't change the
	deck name if you have subpages, it's more reliable to leave this empty
	if you have subpages.`;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Viewing settings for {settingsId}</h1>

	<Input
		name="deckName"
		label="Deck Name"
		description={deckDesc}
		placeholder="Enter deck name (optional)"
		onChange={onInputChange}
	/>
	{#each setting as option}
		<Checkbox
			name={option.key}
			label={option.label}
			onClick={onToggleOption}
			description={option.description}
		/>
	{/each}

	<div class="buttons">
		<button class="save">Save</button>
		<button class="delete">Delete</button>
		{#if !isDefault}
			<button class="default">Default</button>
		{/if}
	</div>

	<nav><a href="https://2anki.net">← Back </a></nav>
</div>

<style>
	.buttons {
		padding-top: 2rem;
	}
	nav {
		padding-top: 1rem;
		text-align: center;
	}
</style>
