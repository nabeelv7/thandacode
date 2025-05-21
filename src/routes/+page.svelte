<script>
  let { data } = $props();
</script>

<div class="flex flex-col justify-center items-center min-h-screen spacing">
  <h1>Repos</h1>
  {#if data.repos.length > 0}
    <ul>
      {#each data.repos as repo}
        <li>{repo.name}</li>
      {/each}
    </ul>
  {:else}
    <p>No repos found</p>
  {/if}
  <form method="POST">
    <input
      class="input input-accent"
      type="text"
      name="repo-name"
      required
      placeholder="Enter repo name here"
    />
    <button class="btn btn-accent">Create Repo</button>
  </form>
</div>
