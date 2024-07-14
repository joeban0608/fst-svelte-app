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

<script>
  let selected = false
  $: console.log('selected', selected)
</script>
<input type="checkbox" bind:checked={selected}/>