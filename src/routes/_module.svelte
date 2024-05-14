<script>
  import { Header } from "$layout";
</script>

<main class="max-w-6xl mx-auto">
  <Header />
  <slot />
</main>

<style>
  h1 {
    @apply text-xl;
  }
</style>
