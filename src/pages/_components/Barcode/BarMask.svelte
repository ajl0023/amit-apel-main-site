<script>
  import { page } from "@roxi/routify";
  import { onMount } from "svelte";
  import { introTransition } from "../../../crossfade";
  import { introAnimationStore } from "../../../introAnimationStore";
  import { pageLayoutMaster } from "../../../pageLayout";
  let video;
  const { receive, send } = $introTransition;
  const barInfo = pageLayoutMaster["categories"]["byTitle"][$$props.title];
  onMount(() => {
    $introAnimationStore.videos = [...$introAnimationStore.videos, video];
  });
</script>

{#if $introAnimationStore.shouldReturn === false && $page.meta.shouldAnimate}
  <div
    in:receive="{{ key: `bar-${barInfo.index}` }}"
    out:send="{{ key: `bar-${barInfo.index}` }}"
    class="aspect-ratio-container  container-{barInfo.index} bar-mask"
  >
    <div class="aspect-ratio"></div>
    <div class="container">
      <video muted bind:this="{video}" class="cover-video" src="{barInfo.video}"
      ></video>
    </div>
  </div>
{/if}

<style lang="scss">
  .aspect-ratio {
    padding-top: 225%;
  }
  .aspect-ratio-container {
    width: 15%;
    z-index: 1123123123123;
    position: fixed;
    bottom: 50%;
    transform: translateY(50%);
    pointer-events: none;
    opacity: 0;
  }
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  .container-0 {
    left: 10%;
  }
  .container-1 {
    left: 30%;
  }
  .container-2 {
    right: 30%;
  }
  .container-3 {
    right: 10%;
  }
  .cover-video {
    height: 100%;
    &::-webkit-media-controls-panel {
      display: none !important;
      -webkit-appearance: none;
    }
    object-position: center center;
    width: 100%;
    object-fit: cover;
  }
</style>
