<script>
  import { IconFolder, IconFile } from "@tabler/icons-svelte";
  import WikiLink from "./wikiLink.svelte";
  export let NodeURLs;
  import { goto } from "@roxi/routify";
</script>

{#if NodeURLs?.children?.length > 0}
  <details open>
    <summary on:click={() => $goto(NodeURLs)}>
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
  <summary on:click={() => $goto(NodeURLs)}>
    <IconFile class="h-5 w-5" />
    {NodeURLs?.title}
  </summary>
{/if}
