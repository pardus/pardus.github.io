<script>
    import { Pardus1, Pardus2, DownloadCloud } from "$assets";
    import { IndexPageData } from "$data";
    import { Footer } from "$layout";
</script>

<h1 class="text-3xl text-center mt-16">
    {@html IndexPageData["title"]}
</h1>
<div
    class="flex flex-col md:flex-row max-w-5xl justify-evenly items-center mt-16"
>
    <div class="md:w-1/4 w-2/4 relative">
        <img src={Pardus2} alt="" class="pardus2" />
        <img src={Pardus1} alt="" class="pardus1" />
    </div>
    <div class="text-center md:w-2/4 md:mt-0 mt-10">
        <p class="m-3 ml-5 text-lg">
            {IndexPageData["description"]}
        </p>
        <a
            href="/download"
            class="flex w-44 mx-auto isoa items-center justify-center gap-2 py-1 px-2 rounded-md text-white isoa"
        >
            <span class="font-bold text-xl">
                {IndexPageData["downloadLabel"]}
            </span>
            <!--img src={DownloadCloud} alt="" class="h-10 w-10" /-->
        </a>
    </div>
</div>

<fieldset class="mt-20 rounded-xl">
    <legend class="mx-10 px-3">
        {IndexPageData["appsHeader"]}
    </legend>
    <div class="flex flex-wrap flex-row">
        {#each IndexPageData["apps"] as app}
            <div class="md:w-1/3 flex p-6">
                <img src={app.icon} alt="" class="h-16 w-1/3" />
                <div class="flex flex-col w-full ml-3">
                    <b>{app.title}</b>
                    <span>
                        {app.description}
                    </span>
                </div>
            </div>
        {/each}
    </div>
</fieldset>

<Footer />

<style>
    .pardus2 {
        rotate: -10deg;
    }
    .pardus1 {
        position: absolute;
        rotate: 10deg;
        top: 10%;
        left: 30%;
    }
    .isoa {
        background-color: var(--pardus-dark);
    }
</style>
