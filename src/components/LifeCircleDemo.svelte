<script>
  import { onMount } from "svelte";

  let timer = null;
  onMount(()=>{
    timer = setTimeout(() => {console.log('hello world')}, 3000)

    return () => clearTimeout(timer)
  })
</script>