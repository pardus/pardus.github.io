<script>
  import { context } from "@roxi/routify";
  import WikiLink from "../components/wikiLink.svelte";
  import { IconArrowBackUp } from "@tabler/icons-svelte";

  let urls = $context.node.children.filter(
    (url) => url.name != "index" && url.name != "default-layout"
  );
  console.log(urls);
</script>

<div class="drawer block md:hidden">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label
      for="my-drawer"
      class="btn btn-primary drawer-button w-full rounded-none"
    >
      Open Navigation
    </label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu menu-xs h-screen bg-base-200 max-w-xs w-full border-right">
      <li class="flex-1">
        {#if urls?.length > 0}
          {#each urls as url}
            <WikiLink NodeURLs={url} />
          {/each}
        {/if}
      </li>
      <li>
        <a href="/" class="w-full flex justify-center btn btn-info">
          <IconArrowBackUp class="w-5 h-5" />
          Return Home
        </a>
      </li>
    </ul>
  </div>
</div>
<ul
  class="menu menu-xs h-screen bg-base-200 max-w-xs w-full border-right hidden md:flex"
>
  <li class="flex-1">
    {#each urls as url}
      <WikiLink NodeURLs={url} />
    {/each}
  </li>
  <li>
    <a href="/" class="w-full flex justify-center btn btn-info">
      <IconArrowBackUp class="w-5 h-5" />
      Return Home
    </a>
  </li>
</ul>

<style>
  a {
    font-size: 16px;
  }
</style>
