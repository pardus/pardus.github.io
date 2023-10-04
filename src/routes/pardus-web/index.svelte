<!-- routify:meta reset -->
<script>
    import { Dash } from "$layout";
</script>

<main class="flex flex-col w-screen h-screen">
    <div class="pw-container">asd</div>
    <Dash />
</main>

<style>
    .pw-container {
        background: url(/src/lib/assets/pardus23-0_default-dark.svg), no-repeat;
        background-size: cover;
        flex-grow: 1;
        height: calc(100vh - var(--dash-height));
    }
</style>
