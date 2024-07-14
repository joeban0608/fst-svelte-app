<script>
  export let username = 'joeban0608'
  let api = fetch(`https://api.github.com/users/${username}`).then(res => res.json())
</script>

{#await api }
  <span>Loading....</span>
{:then response}
  <img src={response.avatar_url} alt="avatar"/>
  <h2>{response.name}</h2>
  <p>{response.bio}</p>
{:catch error}  
  <span>{error}</span>
{/await}