<script>
  import { params, ready } from "@roxi/routify";
  import Colcade from "colcade";
  import { onDestroy, onMount, tick } from "svelte";
  import { marqueeHandlerStore } from "../../../_stores/marqueeHandlerStore";
  import MasonryImage from "./MasonryImage.svelte";
  export let modal;

  let container;
  let images = [];
  $: ({ page } = $marqueeHandlerStore);
  onMount(() => {});

  let masonry;
  function fetchImages() {
    fetch(
      `${window.location.origin}/.netlify/functions/images/?category=${$params.pages}`
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
      });
  }
  $ready();
  $: page, fetchImages();
</script>

<div class="wrapper">
  {#if images.length >= 4}
    <div bind:this="{container}" class="container masonry-container">
      <div class="grid-col grid-col--1"></div>
      <div class="grid-col grid-col--2"></div>
      <div class="grid-col grid-col--3"></div>

      {#each images as img}
        <div class="grid-item">
          <MasonryImage
            modal="{modal}"
            masonry="{masonry}"
            img="{img}"
            grid="{container}"
          />
        </div>
      {/each}
    </div>
  {:else}
    <div class="na-masonry-container">
      {#each images as img}
        <div class="na-image-container">
          <MasonryImage
            modal="{modal}"
            masonry="{masonry}"
            img="{img}"
            grid="{container}"
          />
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
