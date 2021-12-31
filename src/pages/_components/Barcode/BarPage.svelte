<script>
  import { context,goto } from "@roxi/routify";
import gsap from "gsap"

  import { introTransition } from "../../../crossfade";
  import { introAnimationStore } from "../../../introAnimationStore";
  import { pageLayoutMaster } from "../../../pageLayout";
  import { marqueeHandlerStore } from "../../[category]/_stores/marqueeHandlerStore";
  import Target from "../Target.svelte";

  const barInfo = pageLayoutMaster["categories"]["byTitle"][$$props.title];
  const { receive, send } = $introTransition;

  $: hide =
    $context.child &&
    $context.child.param &&
    $context.child.param.category == barInfo.urlFormatted;
</script>

<div
  style="pointer-events: {!$introAnimationStore.shouldPointerEvents
    ? 'none'
    : 'auto'};"
  on:click={async (e) => {
    marqueeHandlerStore.setCategory(barInfo.urlFormatted);
    $goto(`./${barInfo.urlFormatted}`);
  }}
  class="bar bar-wrapper"
>
  <Target key={barInfo.urlFormatted} {hide} />

  <div
    on:mouseenter={async (e) => {
      gsap.to(e.target, {
        opacity: 0,
      });
    }}
    on:mouseleave={async (e) => {
      gsap.to(e.target, {
        opacity: 1,
      });
    }}
    class="inner-bar {$introAnimationStore.shouldPulse ? 'pulse' : ''}"
  >
    {#if $introAnimationStore.shouldReturn}
      <div
        in:receive={{ key: `bar-${barInfo.index}` }}
        out:send={{ key: `bar-${barInfo.index}` }}
        class="target-{barInfo.index} target-cover"
      />
    {/if}
  </div>
  <div class="main-label-container">
    <p>{barInfo.title}</p>
  </div>
</div>

<style lang="scss">
  @-webkit-keyframes fadeinout {
    0%,
    100% {
      background-color: white;
    }
    50% {
      background-color: transparent;
    }
  }

  @keyframes fadeinout {
    0%,
    100% {
      background-color: white;
    }
    50% {
      background-color: transparent;
    }
  }
  .pulse {
    -webkit-animation: fadeinout 4s linear forwards infinite;
    animation: fadeinout 4s linear forwards infinite;
    @media screen and (max-width: 650px) {
      animation: none;
      background-color: white;
    }
  }
  .target-cover {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }

  .bar-wrapper {
    height: 100%;
    width: 100%;
    cursor: pointer;
    pointer-events: none;
    @media screen and (max-width: 650px) {
      pointer-events: auto;
    }
  }
  .inner-bar {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 650px) {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 10px;
      background-color: transparent;
      border: 1px solid white;
    }
  }
  .main-label-container {
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    position: absolute;
    opacity: 1;
    left: 0;
    text-align: left;
    color: white;
    top: 0;

    writing-mode: vertical-rl;
    pointer-events: none;
    text-orientation: sideways;
    p {
      font-size: 2vw;
    }
    @media screen and (max-width: 650px) {
      display: flex;

      align-items: center;
      justify-content: center;
      left: 10px;
      top: 10px;
      color: white;
      p {
        color: white;
        font-size: 2vw;
      }
    }
  }
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>
