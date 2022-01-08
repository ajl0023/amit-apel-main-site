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

<div transition:customTransition|local class="marquee-animation-container">
  <div class="menu-wrap">
    {#each pagesArr as menuItem}
      {#if menuItem}
        <MarqueeItem menuItem="{menuItem}" />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .marquee-animation-container {
    width: 100%;
    display: flex;
    align-items: center;
    -webkit-font-smoothing: antialiased;
  }
  .menu-wrap {
    width: 100%;

  }
</style>
