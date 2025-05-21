<script>
  import "../app.css";
  import { signIn } from "@auth/sveltekit/client";

  let { data, children } = $props();

  console.log(data.session);
</script>

{#if !data.session}
  <nav class="navbar bg-base-100 shadow-sm spacing">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">ThandaCode</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <button onclick={signIn("github")} class="btn btn-accent"
            >Sign in &rarr;</button
          >
        </li>
      </ul>
    </div>
  </nav>
{:else}
  <nav class="navbar bg-base-100 shadow-sm spacing">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">ThandaCode</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <div class="avatar cursor-pointer">
          <div class="w-10 rounded-full">
            <img src={data.session.user.image} alt="avatar" />
          </div>
        </div>
      </ul>
    </div>
  </nav>
{/if}
{@render children()}
