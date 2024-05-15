<script>
  import {
    IconFolder,
    IconFile,
    IconFileDescription,
  } from "@tabler/icons-svelte";
  import { isActive } from "@roxi/routify";
  import WikiLink from "./wikiLink.svelte";
  export let NodeURLs;
  import { goto } from "@roxi/routify";
</script>

{#if NodeURLs?.children?.length > 0}
  <details open>
    <summary
      class={$isActive(NodeURLs)
        ? "dark:bg-slate-800 dark:text-white bg-slate-200 "
        : ""}
      on:click={() => $goto(NodeURLs)}
    >
      <IconFolder class="h-5 w-5" />
      {NodeURLs?.title}
    </summary>
    <ul>
      {#each NodeURLs?.children as url}
        {#if url.name != "index"}
          <li>
            <WikiLink NodeURLs={url} />
          </li>
        {/if}
      {/each}
    </ul>
  </details>
{:else}
  <summary
    class={$isActive(NodeURLs)
      ? "dark:bg-slate-700 dark:text-white bg-slate-300"
      : ""}
    on:click={() => $goto(NodeURLs)}
  >
    {#if $isActive(NodeURLs)}
      <IconFileDescription class="h-5 w-5" />
    {:else}
      <IconFile class="h-5 w-5" />
    {/if}
    {NodeURLs?.title}
  </summary>
{/if}
