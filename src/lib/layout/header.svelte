<script>
  import { Logo } from "$assets";
  let routes = ["download", "contact", "wiki"];
</script>

<div class="navbar bg-base-100 shadow-md rounded-lg">
  <ul class="flex-1 menu menu-horizontal">
    <li>
      <a
        href="/"
        class="flex items-center hover:bg-inherit focus:bg-inherit active:bg-inherit"
      >
        <img src={Logo} alt="" class="h-10 w-10" />
        <span class="pardus-title text-4xl ml-2"> Pardus </span>
      </a>
    </li>
  </ul>

  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      {#each routes as route}
        <li class="hidden md:block capitalize text-lg font-semibold">
          <a href={`/${route}`}>{route}</a>
        </li>
      {/each}

      <div class="dropdown dropdown-end block md:hidden">
        <div tabindex="0" role="button" class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path></svg
          >
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded-box"
        >
          {#each routes as route}
            <li class="block md:hidden capitalize">
              <a href={`/${route}`}>{route}</a>
            </li>
          {/each}
        </ul>
      </div>
    </ul>
  </div>
</div>
