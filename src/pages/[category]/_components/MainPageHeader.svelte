<script>
  import { params } from "@roxi/routify";
  import { pageLayoutMaster } from "../../../pageLayout";
  import { marqueeHandlerStore } from "../_stores/marqueeHandlerStore";

  marqueeHandlerStore;

  let currentPage;
  const hideNav = new Set(["maliview", "aviator"]);
  $: {
    currentPage = $marqueeHandlerStore.page;
  }
</script>

<h5
  class:inactive="{hideNav.has($marqueeHandlerStore.page)}"
  class:press="{$marqueeHandlerStore.page === 'press'}"
  class:sm="{$marqueeHandlerStore.page === 'meet the team'}"
  class:map="{$marqueeHandlerStore.page === 'map'}"
  class="main-text-header"
>
  {pageLayoutMaster["pages"]["byTitle"][currentPage].title}
</h5>

<style lang="scss">
  .press {
    position: absolute;
  }
  .map {
    display: none;
  }
  .main-text-header {
    font-size: 6em;
    line-height: 0.8em;
    font-weight: 900;
    letter-spacing: 3px;

    white-space: nowrap;
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    text-align: center;
    background-color: transparent;
    top: 5vh;
    right: 0;
    left: 0;
    z-index: 10;

    padding: 20px;
    color: #68208e;
    text-transform: uppercase;
    @media screen and (max-width: 820px) {
      font-size: 10vw;
    }
  }
  .sm {
    font-size: 3em;
  }
  .inactive {
    display: none;
  }
</style>
