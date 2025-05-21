<script>
  import "../app.css";
  import { signIn } from "@auth/sveltekit/client";
  import { signOut } from "@auth/sveltekit/client";

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
        <details class="dropdown dropdown-end">
          <summary class="avatar cursor-pointer">
            <div class="w-10 rounded-full">
              <img src={data.session.user.image} alt="avatar" />
            </div>
          </summary>
          <ul
            class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <p class="text-xl font-bold p-2">{data.session.user.name}</p>
            <li>
              <button class="btn btn-outline btn-error" onclick={signOut}
                >Logout &nearr;</button
              >
            </li>
          </ul>
        </details>
      </ul>
    </div>
  </nav>
{/if}
{@render children()}
