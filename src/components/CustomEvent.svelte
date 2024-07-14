<script>
  import { onMount, createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  onMount(() => {
    setTimeout(()=>{
      dispatch('completed', { elapsedTime: 3000 })
    },3000);
  });
</script>