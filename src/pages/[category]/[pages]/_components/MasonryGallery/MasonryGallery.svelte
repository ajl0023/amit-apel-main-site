<script>
  import { params, ready } from "@roxi/routify";
  import Colcade from "colcade";
  import { tick } from "svelte";
  import { galleryModal } from "../../../../_components/GalleryModal/store";
  import MasonryImage from "./MasonryImage.svelte";
  let container;
  export let modal;
  let images = [];
  let calcGridFunc;
  fetch(
    modal
      ? `http://localhost:9999/.netlify/functions/get-full-images/?category=${$params.pages}&property=${$galleryModal.selected.key}`
      : `http://localhost:9999/.netlify/functions/images/?category=${$params.pages}`
  )
    .then((res) => res.json())
    .then(async (data) => {
      images = data;
      await tick();
      if (images.length >= 4) {
        new Colcade(container, {
          columns: ".grid-col",
          items: ".grid-item",
        });
      }
    })
    .then(() => {
      setTimeout(() => {
        $ready();
      }, 1000);
    });
  let masonry;
</script>

<div class="wrapper">
  {#if images.length >= 4}
    <div bind:this={container} class="container">
      <div class="grid-col grid-col--1" />
      <div class="grid-col grid-col--2" />
      <div class="grid-col grid-col--3" />

      {#each images as img}
        <div class="grid-item">
          <MasonryImage {modal} {masonry} {img} grid={container} />
        </div>
      {/each}
    </div>
  {:else}
    <div class="na-masonry-container">
      {#each images as img}
        <div class="na-image-container">
          <MasonryImage {modal} {masonry} {img} grid={container} />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .wrapper {
    padding: 20px;
  }
  .na-masonry-container {
    display: flex;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    flex-direction: column;
  }
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .grid {
    border: 1px solid;
  }
  .image-container {
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: 0;
      display: block;
    }
  }
  .grid:after {
    display: block;
    content: "";
    clear: both;
  }
  .grid-col {
    float: left;
    margin-right: 20px;
    &:last-child {
      margin-right: 0px;
    }
  }
  .grid-col {
    width: 100%;
  }
  .grid-col--2 {
    display: none;
  }
  .grid-col--1 {
    width: 100%;
    display: none;
  }
  .image-container {
    width: 100%;
  }
  @media (min-width: 568px) {
    .grid-col {
      width: 48%;
    }
    .grid-col--1 {
      display: block;
    }
  }
  @media (min-width: 1100px) {
    .grid-col {
      width: 31%;
    }
    .grid-col--2 {
      display: block;
    }
  }
</style>
