<script>
  import { ready } from "@roxi/routify";

  import { onMount } from "svelte";
  import PlayButton from "./PlayButton.svelte";
  import VideoModal from "./VideoModal.svelte";
  import { videoStore } from "./videoStore";

  let videos = [];
  onMount(() => {
    $ready();
    fetch(
      `${
        window.location.origin === "http://jsdom.ssr" ||
        (!import.meta.env.PROD &&
          window.location.origin !== "http://192.168.0.249:5000")
          ? "http://localhost:9999"
          : window.location.origin
      }/.netlify/functions/get-video-renders/`
    )
      .then((res) => res.json())
      .then(async (data) => {
        videos = Array.from(data, (val) => {
          return val;
        });
      });
  });
</script>

<div class="wrapper">
  <div class="container">
    {#each videos as video}
      <div
        on:click="{() => {
          videoStore.handleVisible();
          videoStore.setVideo(video.video);
        }}"
        class="card-container"
      >
        <div class="label-wrapper">
          <div class="thumbnail-photo">
            <div class="image-container">
              <img src="{video.thumb.url}" alt="" />
            </div>
          </div>
          <span class="main-label">{video.thumb.label}</span>
        </div>
        <div class="image-wrapper">
          <div class="video-cover image-container">
            <div class="play-button-container">
              <PlayButton />
            </div>
            <img class="main-image" src="{video.thumb.url}" alt="" />
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .play-button-container {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 2;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    overflow: auto;
    padding: 5px;
    height: 100%;
  }
  .label-wrapper {
    display: flex;
    margin-bottom: 1rem;
    align-items: flex-end;
  }
  .main-label {
    display: block;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    color: #68208e;
    font-weight: 500;
    font-size: 1.2em;

    white-space: nowrap;

    @media screen and (max-width: 1000px) {
      font-size: 1.2em;
    }

    &:after {
      width: 100%;
      display: block;
      content: "";
      margin-top: 0.5rem;
      background-color: gray;
      height: 1px;
    }
  }
  .container {
    display: flex;

    width: 100%;
    flex-wrap: wrap;
  }
  .card-container {
    flex-basis: 33.33333333%;
    overflow: hidden;
    padding: 5px;
    flex-grow: 0;
    @media screen and (max-width: 900px) {
      flex-basis: 50%;
    }
    @media screen and (max-width: 600px) {
      flex-basis: 100%;
    }
    .video-cover.image-container {
      width: 100%;

      position: relative;
      overflow: hidden;

      .main-image {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      &:before {
        display: block;
        content: "";
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
        position: relative;
        padding-top: (9 / 16) * 100%;
      }
    }
  }
  .image-wrapper {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }

  .container {
    overflow: auto;

    .thumbnail-photo {
      width: 60px;
      height: 60px;

      margin-right: 1rem;
      .image-container {
        width: 100%;
        height: 100%;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>
