<script>
  let name = 'Hello World';
  let once = false;
  const handleClick = (e) =>{
    // e.preventDefault;
    // if (!once) {
    //   once = true
    //   console.log('click')
    // }
    console.log('click')
  }
</script>

<!-- modify 用法, once 只能點一次, preventDefault 取消預設點擊事件 -->
<h1 on:click|once|preventDefault={handleClick}>{name}</h1>