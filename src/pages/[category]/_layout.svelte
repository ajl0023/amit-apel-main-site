<!-- routify:options param-is-page=true -->
<script>
  import { goto, params, ready } from "@roxi/routify";
  import { onMount } from "svelte";
  import { transition } from "../../crossfade";
  import BasicModal from "../_components/BasicModal/BasicModal.svelte";
  import GalleryModal from "../_components/GalleryModal/GalleryModal.svelte";
  import { galleryModal } from "../_components/GalleryModal/store";

  import Navbar from "./_components/Navbar/Navbar.svelte";
  import { marqueeHandlerStore } from "./_stores/marqueeHandlerStore";

  const { receive, send } = $transition;
  onMount(() => {
    marqueeHandlerStore.setCategory($params.category);
  });
</script>

<div
  in:receive|local="{{ key: $marqueeHandlerStore.category }}"
  out:send|local="{{ key: $marqueeHandlerStore.category }}"
  class="wrapper"
>
  <!-- <Navbar /> -->
  {#if $galleryModal.visible}
    {#if $galleryModal.type === "spec"}
      <GalleryModal />
    {:else}
      <BasicModal />
    {/if}
  {/if}
  <div class="main-anim-wrapper" class:inactive="{$galleryModal.visible}">
    <slot />
  </div>
</div>

<style lang="scss">
  .modal-wrapper {
    position: relative;
    height: 100%;
  }
  .main-anim-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background-image: url("https://res.cloudinary.com/dt4xntymn/image/upload/v1637997281/mainSite/Background_Photo_ojnwmx.jpg");
    width: 100vw;

    background-repeat: no-repeat;
    background-size: cover;
  }

  .inactive {
    display: none;
  }
</style>
