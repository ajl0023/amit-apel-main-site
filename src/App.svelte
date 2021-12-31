<script>
  import { Router } from "@roxi/routify";
  import { onMount } from "svelte";
  import LazyLoad from "vanilla-lazyload";
  import { routes } from "../.routify/routes";

  onMount(() => {
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad();
    }
  });
</script>

<Router {routes} />

<style>
</style>
