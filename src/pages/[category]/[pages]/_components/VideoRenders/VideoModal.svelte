<script>
  import { videoStore } from "./videoStore";
</script>

<div class="wrapper">
  <div
    on:click="{() => {
      $videoStore.visible = false;
    }}"
    class="close-x close-main"
  ></div>
  <div class="video-container">
    <iframe
      class="main-video"
      title="render"
      id="ytplayer"
      allowfullscreen="true"
      type="text/html"
      width="100%"
      height="100%"
      src="{$videoStore.src}"
      frameborder="0"></iframe>
  </div>
</div>

<style lang="scss">
  .video-container {
    max-width: 1200px;
    width: 100%;
    position: relative;

    .main-video {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 2;
    }
    &:before {
      display: block;
      content: "";

      z-index: 2;
      position: relative;
      padding-top: (9 / 16) * 100%;
    }
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
  }
  .close-x {
    top: 20px;
    &:after {
      background-color: white;
    }
    &:before {
      background-color: white;
    }
  }
</style>
