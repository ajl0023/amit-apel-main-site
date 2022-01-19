<script>
  import { page } from "@roxi/routify";
  import { onMount, tick } from "svelte";
  import { introAnimationStore } from "../introAnimationStore";
  import { shouldAnimate } from "../isTesting";
  import Barcode from "./_components/Barcode/Barcode.svelte";
  onMount(() => {
    introAnimationStore.init();

    let shouldAnimate = window.innerWidth >= 650 && $page.meta.shouldAnimate;
    if (!shouldAnimate) {
      introAnimationStore.endAnim();
      return;
    }
    introAnimationStore.triggerAnim(shouldAnimate);
  });
</script>

<svelte:window
  on:resize="{async () => {
    if (window.innerWidth <= 650) {
      introAnimationStore.endAnim();
    }
  }}"
/>
<slot />
<button
  class="end-anim-button"
  class:inactive="{$introAnimationStore.isPlaying === false}"
  on:click="{async () => {
    $introAnimationStore.userEnded = true;
    await tick();
    introAnimationStore.endAnim();
  }}">Skip</button
>
<div class="home-wrapper">
  <div class="video-bg">
    {#if window.location.origin !== "http://jsdom.ssr"}
      <video
        class="video-render"
        loop
        muted
        autoplay
        preload="auto"
        playsinline
      >
        <source
          src="https://res.cloudinary.com/dt4xntymn/video/upload/v1636857895/mainSite/Render_viqdcp.mp4"
          type="video/mp4"
        />
      </video>
    {/if}

    {#if !$introAnimationStore.shouldRemoveStroke && window.location.origin !== "http://jsdom.ssr"}
      <video class="video-brush" autoplay autobuffer muted playsinline>
        <source
          src="{'https://res.cloudinary.com/dt4xntymn/video/upload/v1636870696/mainSite/Brush_Stroke_1_orzxdf.mp4'}"
          type="video/mp4"
        />
      </video>
    {/if}
  </div>
  <div class="container">
    <div class="flex-item main-text-container">
      <h5 class="main-text fade">"Connecting People</h5>
      <h5 class="main-text fade">to the Art of Living"</h5>
    </div>
    <div class="flex-item logo-container">
      <Barcode />
    </div>

    <div class="flex-item logo-text-container fade">
      <img
        class="logo-text"
        alt=""
        src="https://res.cloudinary.com/dt4xntymn/image/upload/v1638227177/mainSite/home/logo_Text_jxudf8.png"
      />
    </div>
  </div>
</div>

<style lang="scss">
  .end-anim-button {
    position: absolute;
    top: 20px;
    font-family: "Fira Sans Condensed", sans-serif;
    z-index: 5;
    right: 20px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 3px;

    background: none;
    border: none;
    color: white;
    opacity: 80%;
    font-size: 2em;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  .inactive {
    display: none;
  }
  .home-wrapper {
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    display: flex;
    background-color: black;
    align-items: center;

    justify-content: center;
  }
  .logo-container {
    width: 100%;
    margin-bottom: 3.1rem;
  }

  .video-brush {
    opacity: 1;
  }
  .video-render {
    opacity: 0;
  }
  .main-text-container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-family: "Playball", cursive;
    margin-bottom: 3.1rem;
    .main-text {
      text-align: center;
      white-space: nowrap;
      line-height: 0.9;
      &:first-child {
        margin-right: 0.8rem;
      }
      &:nth-child(2) {
        margin-left: 0.8rem;
      }
    }
    @media screen and (max-width: 1350px) {
      font-size: 0.5em;
    }
    @media screen and (max-width: 1150px) {
      font-size: 0.5em;
      margin-bottom: 1rem;
    }
    @media screen and (max-width: 900px) {
      font-size: 0.4em;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;

      .main-text {
        &:first-child {
          margin-right: 0;
          margin-bottom: 0.4rem;
        }
        &:nth-child(2) {
          margin-left: 0;
        }
      }
    }
    @media screen and (max-width: 550px) {
      font-size: 0.3em;
    }
  }
  .video-bg,
  video {
    &::-webkit-media-controls-panel {
      display: none !important;
      -webkit-appearance: none;
    }
    position: fixed;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
  }
  .logo-text-container {
    max-width: 500px;
    width: 100%;

    z-index: 2;
    opacity: 0;
    @media screen and (max-width: 650px) {
      opacity: 1;
      padding-top: 0px;
      max-width: 300px;
      width: 100%;
    }
    .logo-text {
      height: auto;
      object-fit: cover;
      width: 100%;
    }
  }
  .container {
    background-repeat: no-repeat;
    font-family: "Fira Sans Condensed", sans-serif;
    color: white;
    background-size: cover;
    // background-image: url("../images/home/Background Photo.jpg");
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 80px;
    overflow: hidden;

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      content: "";
    }
    @media screen and (max-width: 650px) {
      width: 100%;
    }
  }
  h5 {
    z-index: 2;
    opacity: 0;
    letter-spacing: 5px;
    font-weight: 100;
    font-size: 3em;
    position: relative;

    @media screen and (max-width: 650px) {
      opacity: 1;
    }
  }
</style>
