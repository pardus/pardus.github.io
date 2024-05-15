<script>
  export let label;
  export let size;
  export let href;
  export let icon;
</script>

<a
  {href}
  class="border rounded dark:border-slate-500 p-5 flex justify-between w-full
       hover:bg-slate-200 dark:hover:bg-blue-400 dark:hover:text-black"
>
  <div class="flex gap-2">
    <svelte:component this={icon} class="h-5 w-5" />
    {label}
  </div>
  {#if size}
    <div class="badge light:badge-neutral badge-outline">{size}</div>
  {/if}
</a>
