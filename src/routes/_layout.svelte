<script>
	import { sener } from './stores';
	$sener = 'CAN';
	import Nav from '../components/Nav.svelte';

	export let segment;
	export let dilara = 'DILARA';
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>
sener: {$sener}
<main>
	<slot></slot>
</main>