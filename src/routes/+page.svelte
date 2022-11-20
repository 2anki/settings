<script context="module">
	import { browser } from '$app/environment';

	if (browser) {
		window.location.href = '/settings/default';
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>loading...</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		flex: 0.6;
		height: 90vh;
	}
</style>
