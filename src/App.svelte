<script>
	// props
	// if condition
	// $: (Reactivity)
	// each Arr
	import { onMount, afterUpdate, onDestroy } from 'svelte'
	let conutDown = 10;
	let timer = null;
	
	// 00:01 displayValue 不足兩位自動補 0
	// 透過 $: 當元件更新重新渲染 displayValue, 沒加 $: displayValue 會不動
	$: displayValue = `00:${conutDown.toString().padStart(2,"0")}`

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

<h1>{displayValue}</h1>

{#if conutDown === 0}
	<span>時間到!!!!</span>
{/if}