<script>
  import { ready } from "@roxi/routify";

  import { onMount } from "svelte";

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

<div class="container">
  {#each videos as video}
    <div class="card-container">
      <span class="main-label">{video.thumb.label}</span>
      <div class="video-wrapper">
        <div class="thumbnail-photo">
          <div class="image-container">
            <img src="{video.thumb.url}" alt="" />
          </div>
        </div>
        <div class="video-container">
          <iframe
            class="main-video"
            title="render"
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="{video.video}"
            frameborder="0"></iframe>
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .main-label {
    display: block;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    color: #68208e;
    font-weight: 500;
    font-size: 2em;
    margin-bottom: 1rem;

    &:after {
      width: 100%;
      display: block;
      content: "";
      margin-top: 1rem;
      background-color: gray;
      height: 1px;
    }
  }
  .container {
    display: flex;
    padding: 20px;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .card-container {
    max-width: 1200px;
    width: 100%;
  }
  .video-wrapper {
    display: flex;

    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
  .video-container {
    width: 100%;
    min-height: 200px;
    position: relative;

    .main-video {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
    &:before {
      display: block;
      content: "";
      width: 100%;

      padding-top: (9 / 16) * 100%;
    }
  }
  .container {
    overflow: auto;
    height: 100%;
    .thumbnail-photo {
      max-width: 100px;
      height: 100px;
      width: 100%;
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
