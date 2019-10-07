<script>
	import { sener } from './stores';
	import { set } from 'idb-keyval';
 
	console.log('sener:', $sener);
	
	let data = 'yum';

	async function getSome() {
		await fetch('getapi');

		set('hello', 'world')
  			.then(() => console.log('It worked!'))
  			.catch(err => console.log('It failed!', err));

	}

	async function postSome() {
		let response = await fetch('postapi', {
			method: 'POST',
			mode: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({$sener})
		});
		if (response.ok) {
			let json = await response.json();
			console.log('postSome:', json, response);
		}
		else{
			console.log('HATA:', response);
		}
}
</script>
	
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site....</h1>

<p>This is the 'about' page. There's not much here.</p>
<button on:click={getSome}>Get</button>
<input bind:value={$sener}>
<button on:click={postSome}>Post</button>