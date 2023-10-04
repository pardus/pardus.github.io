<script>
    import { Header } from "$layout";
    import { context } from "@roxi/routify";
    export let node;
    $: console.log($node);
</script>

<Header />
<main class="max-w-6xl mx-auto">
    <slot />
</main>
