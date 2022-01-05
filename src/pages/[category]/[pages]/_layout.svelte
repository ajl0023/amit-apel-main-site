<script>
  import { params } from "@roxi/routify";
  import MainPageHeader from "../_components/MainPageHeader.svelte";
  import { marqueeHandlerStore } from "../_stores/marqueeHandlerStore";

  function customTransition() {
    return {
      duration: 1500,
      css: (_t, u) => {
        return `transform: translateY(${100 * u}vh);`;
      },
    };
  }
  let Component;

  const imports = {
    "private-homes": async () => {
      return import("./_components/MasonryGallery/MasonryGallery.svelte");
    },
    "multi-units": async () => {
      return import("./_components/MasonryGallery/MasonryGallery.svelte");
    },
    concept: async () => {
      return import("./_components/MasonryGallery/MasonryGallery.svelte");
    },
    sculptures: async () => {
      return import("./_components/MasonryGallery/MasonryGallery.svelte");
    },
    "meet-amit-apel": async () => {
      return import("./_components/MeetAmitApel/MeetAmitApel.svelte");
    },
    "meet-the-team": async () => {
      return import("./_components/MeetTheTeam/MeetTheTeam.svelte");
    },
    press: async () => {
      return import("./_components/Press/Press.svelte");
    },
    "contact-us": async () => {
      return import("./_components/Contact/Contact.svelte");
    },
    furniture: async () => {
      return import("./_components/MasonryGallery/MasonryGallery.svelte");
    },
    "malibu-rebuild": async () => {
      return import("./_components/MalibuRebuild/MalibuRebuild.svelte");
    },
    "what-we-do": async () => {
      return import("./_components/WhatWeDo/WhatWeDo.svelte");
    },
    aviator: async () => {
      return import("./_components/Developments/Developments.svelte");
    },
    maliview: async () => {
      return import("./_components/Developments/Developments.svelte");
    },
    map: async () => {
      return import("./_components/Map/Map.svelte");
    },
  };
  const loadComponent = async (title) => {
    if (title) {
      marqueeHandlerStore.setPage(title);

      Component = (await imports[title]()).default;
    }
  };
  $: ({ pages } = $params);

  $: pages, loadComponent(pages);
</script>

<div
  transition:customTransition|local
  class="page-content-container page-content-container-anim"
>
  <MainPageHeader pages="{pages}" />
  <div class="page-container">
    <svelte:component this="{Component}" />
  </div>
</div>

<style lang="scss">
  .page-content-container {
    width: 100%;
    z-index: 3;
    height: 100%;
    top: 0;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 900px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.6rem;
    }
  }

  .page-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>
