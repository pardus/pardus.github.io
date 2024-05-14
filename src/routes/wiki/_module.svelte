<script>
  import { Navigation } from "$layout";
  import "$lib/github-markdown.css";
</script>

<!-- routify:meta reset -->

<main class="flex flex-col md:flex-row items-start">
  <Navigation />
  <div
    class="max-h-screen h-screen overflow-y-scroll markdown-body px-5 py-2 w-full flex justify-center"
  >
    <div class="max-w-4xl w-full">
      <slot />
    </div>
  </div>
</main>
