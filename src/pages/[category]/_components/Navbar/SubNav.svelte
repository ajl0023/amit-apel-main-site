<script>
  import { goto } from "@roxi/routify";
  import { createEventDispatcher, tick } from "svelte";

  import { pageLayoutMaster } from "../../../../pageLayout";
  import { galleryModal } from "../../../_components/GalleryModal/store";
  import { marqueeHandlerStore } from "../../_stores/marqueeHandlerStore";

  export let pages;
  export let categorySelected;
  export let category;
  const dispatch = createEventDispatcher();
</script>

{#if categorySelected === category}
  <div class="container sub-nav">
    {#each pages as page}
      <div
        on:click="{async () => {
          galleryModal.closeModal();
          await tick();

          $goto(`/:category/:page`, { category: category, page: page.key });

          dispatch('closeNav');
        }}"
        class="list-item-container"
      >
        <div class="inner-container">
          <h4>
            {pageLayoutMaster.pages["byTitle"][page.key].title}
          </h4>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
  .inner-container {
    padding: 20px 5rem 20px 70px;
  }
  .container {
    display: flex;
    flex-direction: column;

    background-color: white;

    left: 100%;
    top: 0;
    @media screen and (max-width: 600px) {
      right: 100%;

      left: auto;
    }
    .list-item-container {
      display: flex;
      color: black;
      align-items: center;

      cursor: pointer;

      h4 {
        font-weight: 500;
      }

      &:hover {
        background-color: rgb(111, 63, 138);
        color: white;
      }
    }
  }
</style>
