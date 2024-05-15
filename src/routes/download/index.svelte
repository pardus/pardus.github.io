<script>
  import { DownloadPageData } from "$data";
  import { IconDownload, IconKey } from "@tabler/icons-svelte";
  import OsInfo from "$lib/components/osinfo.svelte";
  let modals = {};
</script>

<main class="mt-10">
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
    {#each DownloadPageData as data}
      <div class="card card-body shadow-xl rounded-md dark:bg-slate-800">
        <h1 class="font-bold text-xl">{data.label}</h1>
        <h1>ISO Files</h1>
        {#each data.iso as iso, isoindex}
          <OsInfo
            label={iso.label}
            href={iso.url}
            size={iso.size}
            icon={IconDownload}
          />
          <div class="flex justify-between gap-2">
            {#each iso.keys as key, keyindex}
              {@const modalID = `keymodal${isoindex}-${keyindex}`}
              <dialog id={modalID} bind:this={modals[modalID]} class="modal">
                <div class="modal-box">
                  <form method="dialog">
                    <button
                      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                      ✕
                    </button>
                  </form>
                  <h3 class="font-bold text-lg">Checksum Properties</h3>

                  <div class="flex flex-col space-y-3">
                    <div>
                      <b>ISO: </b><span>{iso.label}</span>
                    </div>

                    <div>
                      <b>Key: </b><code
                        class="py-2 px-3 rounded dark:bg-slate-800 bg-slate-300"
                      >
                        {key.value}
                      </code>
                    </div>
                  </div>
                </div>
              </dialog>

              <button
                on:click={() => {
                  modals[modalID].showModal();
                }}
                class="border rounded dark:border-slate-500 p-5 flex gap-2 justify-center w-full
              hover:bg-slate-200 dark:hover:bg-blue-400 dark:hover:text-black"
              >
                <IconKey />
                <span>{key.label}</span>
              </button>
            {/each}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</main>
