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
  <Navbar />
  {#if $galleryModal.visible}
    <div class="modal-wrapper">
      {#if $galleryModal.type === "spec"}
        <GalleryModal />
      {:else}
        <BasicModal />
      {/if}
    </div>
  {/if}
  <div class="main-anim-wrapper" class:inactive="{$galleryModal.visible}">
    <slot />
    <div class="page-transition-black"></div>
  </div>
</div>

<style lang="scss">
  .modal-wrapper {
    position: relative;
    height: 100%;
  }

  .wrapper {
    position: absolute;
    top: 0;
    z-index: 3;
    background-image: url("https://res.cloudinary.com/dt4xntymn/image/upload/v1637997281/mainSite/Background_Photo_ojnwmx.jpg");
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
  }
  .main-anim-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
  }
  .inactive {
    display: none;
  }
  .page-transition-black {
    background-color: black;
    width: 100vw;
    position: absolute;
    bottom: 0;
    height: 0vh;
    z-index: 25;
  }
</style>
