<!-- routify:options preload=true -->
<script>
  import { fade } from "svelte/transition";

  import { goto, params, ready } from "@roxi/routify";
  import { onMount } from "svelte";
  import { transition } from "../../crossfade";
  import BasicModal from "../_components/BasicModal/BasicModal.svelte";
  import GalleryModal from "../_components/GalleryModal/GalleryModal.svelte";
  import { galleryModal } from "../_components/GalleryModal/store";

  import Navbar from "./_components/Navbar/Navbar.svelte";
  import { marqueeHandlerStore } from "./_stores/marqueeHandlerStore";
  import { videoStore } from "./[pages]/_components/VideoRenders/videoStore";
  import VideoModal from "./[pages]/_components/VideoRenders/VideoModal.svelte";
  let modalWrapper;
  const { receive, send } = $transition;
  onMount(() => {
    marqueeHandlerStore.setCategory($params.category);
  });
</script>

<!-- routify:options param-is-page=true -->

<div
  in:receive|local="{{ key: $marqueeHandlerStore.category }}"
  out:send|local="{{ key: $marqueeHandlerStore.category }}"
  class="wrapper"
>
  <Navbar />
  {#if $videoStore.visible}
    <div
      on:click="{() => {
        $videoStore.visible = false;
      }}"
      bind:this="{modalWrapper}"
      transition:fade
      class="video modal-wrapper"
    >
      <VideoModal />
    </div>
  {/if}
  {#if $galleryModal.visible}
    <div bind:this="{modalWrapper}" transition:fade class="modal-wrapper">
      {#if $galleryModal.type === "spec"}
        <GalleryModal />
      {:else}
        <BasicModal />
      {/if}
    </div>
  {/if}

  <div class="main-anim-wrapper" class:inactive="{$galleryModal.visible}">
    <slot />
  </div>
</div>

<style lang="scss">
  .video.modal-wrapper {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    top: 0;
    width: 100%;
    min-height: 100%;
    z-index: 6;
    background-color: rgba(0, 0, 0, 0.637);
  }
  .modal-wrapper {
    position: relative;
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
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .inactive {
    display: none;
  }
</style>
