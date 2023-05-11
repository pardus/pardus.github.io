<script>
    import { MailGif } from "$assets";
    import { ContactPageData } from "$data";
</script>

<div class="flex flex-col md:items-center md:flex-row mt-10 h-128">
    <div class="flex flex-col gap-y-5 w-full md:w-1/2 text-lg px-10">
        {#each ContactPageData as data}
            <div>
                <p class="font-bold text-center mb-2">
                    {data.title}
                </p>
                <p>
                    {data.description}
                </p>

                <div class="flex flex-col">
                    <ul class="list-disc ml-5">
                        {#each data.datas as dat}
                            <li>
                                <a class="break-words" href={dat.url}>
                                    {dat.label}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
    <div class="mt-2 p-2 w-full md:w-1/2">
        <img src={MailGif} alt="" />
    </div>
</div>
