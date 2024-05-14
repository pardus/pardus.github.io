<script>
  import { DownloadPageData } from "$data";
  import { IconDownload, IconKey } from "@tabler/icons-svelte";
  import OsInfo from "$lib/components/osinfo.svelte";
</script>

<main class="mt-10">
  <div class="w-full grid grid-cols-2 gap-5">
    {#each DownloadPageData as data}
      <div class="card card-body shadow-xl rounded-md">
        <h1 class="font-bold text-xl">{data.label}</h1>
        <h1>ISO Files</h1>
        {#each data.iso as iso}
          <OsInfo
            label={iso.label}
            href={iso.url}
            size={iso.size}
            icon={IconDownload}
          />
        {/each}

        <h1 class="mt-5">Keys</h1>
        <div class="flex gap-3">
          {#each data.keys as key}
            <OsInfo
              label={key.label}
              href={key.url}
              size={key.size}
              icon={IconKey}
            />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</main>
