<script>
	import Countdown from "./components/Countdown.svelte";
	import OnClickDemo from "./components/OnClickDemo.svelte";
	import CustomEvent from "./components/CustomEvent.svelte";
	let completed = false
</script>

<Countdown conutDown={10}></Countdown>
<OnClickDemo />
<CustomEvent on:completed={()=> completed = true}/>
{#if completed === true}
	<span>{`completed is ${completed}, 結束了`}</span>
{/if}