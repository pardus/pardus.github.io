<script>
     import { DownloadPageData } from "$data";
     import LatestReleaseNotes from "../wiki/release-notes/latest.md";
</script>

<main class="flex flex-col lg:flex-row lg:flex-wrap justify-center w-full">
     {#each DownloadPageData as data}
          <div class="w-full lg:w-1/2 mt-10">
               <fieldset class="rounded-xl p-3">
                    <legend class="px-3"> {data.label} </legend>
                    {#each data.iso as iso}
                         <div
                              class="my-4 flex flex-col md:flex-row md:justify-between"
                         >
                              <b>{iso.label}</b>
                              <a
                                   href={iso.url}
                                   class="flex items-center justify-center gap-2 py-1 px-2 rounded-md text-white isoa"
                              >
                                   <span>{data.downloadLabel}</span>
                                   <img src={iso.icon} alt="" />
                              </a>
                         </div>
                    {/each}
                    <div
                         class="flex flex-wrap flex-col md:flex-row gap-3 items-center justify-center mt-6 md:mt-16"
                    >
                         <span class="h-10 mt-3">
                              <img src={data.keys[0].icon} alt="" />
                         </span>
                         {#each data.keys as key}
                              <a
                                   href={key.url}
                                   class="flex w-full md:w-auto justify-center items-center py-1 rounded-md border border-blue-700 px-3 bg-blue-200"
                              >
                                   <span> {key.label} </span>
                              </a>
                         {/each}
                    </div>
               </fieldset>
          </div>
     {/each}
</main>
<div class="mt-10 overflow-x-auto w-full">
     <fieldset class="rounded-xl p-3">
          <legend class="px-3">
               <a href="/wiki/release-notes"> Release Notes</a>
          </legend>
          <LatestReleaseNotes />
     </fieldset>
</div>

<style>
     .isoa {
          background-color: var(--pardus-dark);
     }
</style>
