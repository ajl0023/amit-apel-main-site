<script>
  import { goto, params, ready, url } from "@roxi/routify";
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
        {#each privateHomesCategories as category, i}
          {#if i !== 0}
            <div class="list-divider"></div>
          {/if}
          <li class="category-item">
            <h5
              class:selected="{selected === category.urlFormatted}"
              class="category-link"
              on:click="{() => {
                $goto('./', {
                  ['sub_category']: category.urlFormatted,
                });
              }}"
            >
              {category.name}
            </h5>
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
    {/if}
  </div>
</div>

<style lang="scss">
  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .category-container {
    font-family: "Montserrat", sans-serif;

    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;

    .list-divider {
      min-width: 2px;
      height: 20px;
      display: flex;
      background-color: rgb(34, 34, 34);
    }
    .category-list {
      display: flex;
      align-items: center;
      margin: auto;
      width: fit-content;
      @media screen and (max-width: 850px) {
        overflow-x: auto;
        max-width: 600px;
        width: 100%;
        margin-left: auto;
      }
      .category-item {
        list-style: none;
        padding: 0 15px;
        font-size: 2em;

        letter-spacing: 2px;
        text-align: center;

        .category-link {
          font-weight: 400;
          white-space: nowrap;
          color: black;
          cursor: pointer;
          text-decoration: none;
        }
        .selected {
          color: #68208e;
        }

        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }

  .container {
    height: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    margin-top: 1rem;
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
