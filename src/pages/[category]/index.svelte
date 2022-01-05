<!-- routify:options param-is-page=true -->
<script>
  import { params } from "@roxi/routify";
  import { onMount } from "svelte";
  import { pageLayoutMaster } from "../../pageLayout";
  import { galleryModal } from "../_components/GalleryModal/store";
  import MarqueeItem from "./_components/MarqueeItem.svelte";

  let categoryDetails =
    pageLayoutMaster["categories"]["byTitle"][$params.category];
  const pagesArr = categoryDetails.pages.map((page) => {
    return pageLayoutMaster["pages"]["byTitle"][page.key];
  });

  function customTransition() {
    return {
      duration: 800,
      css: (_t, u) => {
        return `transform: translateY(${100 * u}vh);`;
      },
    };
  }
  onMount(() => {
    galleryModal.closeModal();
  });
</script>

<div
  transition:customTransition|local
  class="marquee-animation-container page-wrapper"
>
  <div class="container flex-item">
    <div class="menu-wrap">
      {#each pagesArr as menuItem}
        {#if menuItem}
          <MarqueeItem menuItem="{menuItem}" />
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .page-wrapper {
    width: 100%;

    position: relative;
  }

  .container {
    height: 100%;

    position: relative;

    display: flex;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .menu-wrap {
    width: 100%;
    height: 100%;
  }
</style>
