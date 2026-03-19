<script lang="ts">
	import { greet } from './greet';

	let { host = 'SvelteKit' } = $props();

	function onClick() {
		alert('click!')
	}
</script>

<div class="container">
	<h1>{greet(host)}</h1>

	<button onclick={onClick}>Click me</button>

	<div data-testid="block" style="background-color: green;">
		new block here
	</div>
</div>

<style scoped>
	:global(body) {
		margin: 0;
		padding: 0;
	}
	.container {
		width: 100vw;
		height: 100vh;
		background: rebeccapurple;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 40px;
		font-family: monospace;
	}

	h1 {
		margin: 0;
		font-size: 86px;
		font-family: inherit;
	}
	button {
		font-family: inherit;
		padding: 10px 20px;
		background: white;
		color: rebeccapurple;
		font-size: 56px;
	}
</style>