<script>
    import { layout } from "@roxi/routify";
    const toggle = () => {
        mobileMenu = !mobileMenu;
    };
    let mobileMenu = false;
</script>

<main class="md:w-1/4 p-3 w-full md:h-full">
    <button
        class="h-10 flex md:hidden justify-center items-center w-full gap-2 rounded-lg mb-5 border"
        on:click={toggle}
    >
        <span> Open Navigation Menu </span>
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

    {#each $layout.children as category}
        <ul
            class:expanded={mobileMenu}
            class:collapsed={!mobileMenu}
            class="list-disc pl-10 md:block overflow-hidden md:overflow-visible"
        >
            <li>
                <a class="capitalize" href={category.path}>
                    {category.title}
                </a>
            </li>
            {#if category.children.length > 0}
                <ul class="list-disc pl-5">
                    {#each category.children as page}
                        <li>
                            <a class="capitalize" href={page.path}>
                                {page.title}
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </ul>
    {/each}
</main>

<style>
    .expanded {
        transition: max-height 0.5s ease-in-out;
        max-height: 500px; /* set to the maximum height of the menu */
    }

    .collapsed {
        transition: max-height 0.5s ease-in-out;
        max-height: 0;
    }
</style>
