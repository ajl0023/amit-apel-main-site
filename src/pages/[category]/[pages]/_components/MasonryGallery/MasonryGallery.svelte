<script>
  import { params, ready, url } from "@roxi/routify";
  import Colcade from "colcade";
  import { onDestroy, onMount, tick } from "svelte";
  import { pageLayoutMaster } from "../../../../../pageLayout";
  import { marqueeHandlerStore } from "../../../_stores/marqueeHandlerStore";
  import MasonryImage from "./MasonryImage.svelte";
  export let modal;

  let container;
  let images = [];
  let selected;
  $: ({ page } = $marqueeHandlerStore);
  $: ({ sub_category } = $params);
  let privateHomesCategories = [];
  $: {
    if (page === "private-homes") {
      privateHomesCategories = [
        ...pageLayoutMaster.pages.byTitle["private-homes"].categories,
      ];
    }
  }
  onMount(() => {});

  let masonry;
  let colcade;
  async function fetchImages() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("sub_category");

    if (page) {
      selected = category;

      images = [];

      fetch(
        `${window.location.origin}/.netlify/functions/images/?category=${page}${
          category ? `&sub_category=${category}` : ""
        }`
      )
        .then((res) => res.json())
        .then(async (data) => {
          images = data;
          await tick();
          if (!colcade) {
            colcade = new Colcade(container, {
              columns: ".grid-col",
              items: ".grid-item",
            });
          } else {
            colcade.reload();
          }
        });
    }
  }
  $ready();

  $: page, sub_category, fetchImages();
</script>

<div class="wrapper">
  {#if page === "private-homes"}
    <div class="category-container">
      <ul class="category-list">
        {#each privateHomesCategories as category}
          <li class="category-item">
            <h4 class="category-header">
              <a
                class:selected="{selected === category.urlFormatted}"
                class="category-link"
                href="{$url('./', {
                  ['sub_category']: category.urlFormatted,
                })}"
              >
                {category.name}
              </a>
            </h4>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  <div bind:this="{container}" class="container masonry-container">
    {#if images.length > 0}
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
</div>

<style lang="scss">
  .category-container {
    font-family: "Fira Sans Condensed", sans-serif;

    display: block;
    width: 100%;
    margin-bottom: 2rem;

    .category-list {
      display: flex;
      width: fit-content;
      margin: auto;
      justify-content: space-between;

      .category-item {
        list-style: none;
        padding: 0 15px;
        font-size: 1em;
        font-weight: 600;
        letter-spacing: 2px;
        text-align: center;

        .category-header {
          .category-link {
            color: black;
            text-decoration: none;
          }
          .selected {
            color: #68208e;
          }
        }

        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
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
