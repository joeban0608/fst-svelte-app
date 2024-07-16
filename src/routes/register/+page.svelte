<script lang="ts">
	import Hello from '$lib/components/Hello.svelte';
	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	import { user } from '$lib/mystore';
	import { set, get } from '$lib/controlMyStroage';
	import { sayHello } from '$lib/functions/hello';

	export let data: PageData;

	function onButtonClick() {		
		fetch('/api/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ name: 'Andy' })
		})
			.then((res) => res.json())
			.then((d) => {
				console.log(d);
			})
			.catch((err) => console.error(err));
	}
</script>

<Hello />
<button transition:fly={{ delay: 250, duration: 300, y: 200 }} on:click={onButtonClick}>Hey</button>
<p>{$user.name}</p>
