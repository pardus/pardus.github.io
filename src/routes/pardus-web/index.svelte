<!-- routify:meta reset -->
<script>
    import { Dash } from "$layout";
</script>

<main class="flex flex-col w-screen h-screen border border-red-300">
    <div class="pw-container">asd</div>
    <Dash />
</main>

<style>
    main {
        background: url(/src/lib/assets/pardus23-0_default-dark.svg), no-repeat;
        background-size: cover;
    }
    .pw-container {
        flex-grow: 1;
        height: calc(100vh - 48px);
    }
</style>
