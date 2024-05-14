<script>
  import { Pardus23_Gnome } from "$assets";
  import { IndexPageData } from "$data";
  import { Footer } from "$layout";
  import { IconDownload, IconBrandGithub } from "@tabler/icons-svelte";
</script>

<h1 class="text-3xl text-center mt-16 mx-1">
  Pardus is a Debian based stable operating system. <br />It combines stability,
  modern and end-user needs.
</h1>
<div
  class="flex flex-col md:flex-row max-w-5xl justify-evenly items-center mt-16"
>
  <div class="md:w-2/4 w-3/4 relative">
    <img src={Pardus23_Gnome} alt="" />
  </div>
  <div class="text-center md:w-2/4 md:mt-0 mt-10 space-x-3">
    <p class="m-3 ml-5 text-lg">
      {IndexPageData["description"]}
    </p>
    <a href="/download" class="btn btn-info font-bold text-xl">
      <IconDownload />
      {IndexPageData["downloadLabel"]}
    </a>
    <a href="https://github.com/pardus" class="btn btn-info font-bold text-xl">
      <IconBrandGithub />
      Visit Github
    </a>
  </div>
</div>

<h1 class="m-10 px-3 text-center text-2xl">
  {IndexPageData["appsHeader"]}
</h1>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-0">
  {#each IndexPageData["apps"] as app}
    <a
      href={app.url}
      class="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md"
    >
      <img src={app.icon} alt="" class="h-16 w-16 mx-auto mb-3" />
      <div class="text-center">
        <b>{app.title}</b>
        <span class="block mt-2">
          {app.description}
        </span>
      </div>
    </a>
  {/each}
</div>

<Footer />
