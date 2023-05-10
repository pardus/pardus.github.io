<script>
    import { Logo } from "$assets";
    import { HeaderData } from "$data";
    import { clickOutside } from "$helpers";
    function handleClickOutside(event = Event) {
        if (mobileMenu) mobileMenu = !mobileMenu;
    }
    let mobileMenu = false;
</script>

<header>
    <main class="flex items-center justify-between max-w-5xl mx-auto py-2">
        <a href="/" class="flex items-center ml-3">
            <img src={Logo} alt="" class="h-10 w-10" />
            <span class="pardus-title text-4xl ml-2 mt-1 text-white">
                Pardus
            </span>
        </a>
        <div class="gap-5 hidden md:flex">
            {#each HeaderData as data}
                <a href={data.url} class="text-white">{data.label}</a>
            {/each}
        </div>

        <div class="relative md:hidden" data-te-dropdown-ref>
            <button
                class="items-center whitespace-nowrap rounded bg-primary p-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none mr-2"
                type="button"
                on:click={() => (mobileMenu = !mobileMenu)}
                id="dropdownMenuButton1"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
            >
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
            <ul
                use:clickOutside
                on:click_outside={handleClickOutside}
                class:hidden={!mobileMenu}
                class="absolute z-[1000] float-left m-0 right-2 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
            >
                {#each HeaderData as data}
                    <li class="py-2 px-3 border-b">
                        <a href={data.url} class="text-lg">{data.label}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </main>
</header>

<style>
    header {
        background-color: var(--pardus-dark);
    }
</style>
