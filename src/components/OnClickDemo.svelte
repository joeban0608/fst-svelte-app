<script>
  let name = 'Hello World'
  const handleClick = (e) =>{
    console.log('click')
  }
</script>

<h1 on:click={handleClick}>{name}</h1>