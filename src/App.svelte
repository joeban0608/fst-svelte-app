<script>
	import { onMount, afterUpdate, onDestroy } from 'svelte'
	let conutDown = 10;
	let timer = null;
	
	onMount(()=>{
		timer = setInterval(()=>{
			conutDown -=1;
		},1000)
	})

	afterUpdate(()=>{
		if (!timer) return;
		if (conutDown === 0) {
			clearInterval(timer);
			timer = null;
		}
	})

	// 當使用者中途離開時要清除 timer, 避免 memory leak
	onDestroy(()=>{
		if (!timer) return;
		clearInterval(timer);
	})
	
</script>

<h1>{conutDown}</h1>
