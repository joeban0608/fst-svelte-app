<!-- <script>
  import { onMount } from "svelte";

  let name = 'world'
  $: console.log('name', name)
  onMount(()=> {
    setTimeout(()=>{
       name += '!!!!!!'
    },2000)
  })
</script>

<input type="text" bind:value={name}/> -->

<!-- <script>
  let selected = 1
  $: console.log('selected', selected)
</script>
<input type="radio" bind:group={selected} value={1}/>
<input type="radio" bind:group={selected} value={2}/>
<input type="radio" bind:group={selected} value={3}/>
{selected} -->

<script>
  import { onMount } from "svelte";

  let canvas;
  let width;
  onMount(()=>{
    console.log('canvas width', canvas.clientWidth)
    console.log('canvas.getContext', canvas.getContext('2d'))
    console.log('width', width)
  })
</script>

<style>
  canvas {
    border: 1px solid red;
  }
</style>

<canvas bind:this={canvas} bind:clientWidth={width}/>