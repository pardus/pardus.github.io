<script>
    import { Navigation } from "$layout";
</script>

<main class="flex flex-col md:flex-row items-start">
    <Navigation />
    <div class="px-5 py-2 w-full md:w-3/4 overflow-y-auto">
        <slot />
    </div>
</main>

<style>
    main {
        height: calc(100vh - 80px);
    }
</style>
