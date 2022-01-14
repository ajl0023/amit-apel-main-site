<script>
  import { onMount } from "svelte";
  import { lazy } from "../../../helpers/lazy";
  import { pageLayoutMaster } from "../../../pageLayout";
  import { marqueeHandlerStore } from "../../[category]/_stores/marqueeHandlerStore";

  import { galleryModal } from "../GalleryModal/store";
  let container;
  let height;
  let video;
  const setContainerHeight = () => {
    const navbar = document.querySelector(".top-nav-container");
    height = window.innerHeight - navbar.getBoundingClientRect().height;
  };

  onMount(() => {
    setContainerHeight();

    let videoCheck =
      pageLayoutMaster["pages"]["byTitle"][$marqueeHandlerStore.page].videos &&
      pageLayoutMaster["pages"]["byTitle"][$marqueeHandlerStore.page].videos[
        $galleryModal.selected.key
      ];
    if (videoCheck) {
      fetch(
        `${
          window.location.origin === "http://jsdom.ssr" ||
          (!import.meta.env.PROD &&
            window.location.origin !== "http://192.168.0.249:5000")
            ? "http://localhost:9999"
            : window.location.origin
        }/.netlify/functions/get-video-renders?key=${
          $galleryModal.selected.key
        }`
      )
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data);
          video = data.video;
          console.log(video);
        });
    }
  });
</script>

<svelte:window on:resize="{setContainerHeight}" />
<div style="height: {height}px;" class="container">
  <div class="inner-container">
    <div
      on:click="{() => {
        galleryModal.closeModal();
      }}"
      class="close-x close-main"
    ></div>
    <div class="gallery-container">
      {#each $galleryModal.images as img}
        <div class="image-container">
          <img
            width="{img.width}"
            height="{img.height}"
            use:lazy="{img.url}"
            data-src="{img.url}"
            alt=""
            class="carousel-image lazy"
          />
        </div>
      {/each}
      {#if video}
        <div class="video-container">
          <iframe
            class="main-video"
            title="render"
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="{video}"
            frameborder="0"></iframe>
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    background-image: url("https://res.cloudinary.com/dt4xntymn/image/upload/v1637997281/mainSite/Background_Photo_ojnwmx.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;

    width: 100vw;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;

    justify-content: center;
  }
  .inner-container {
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .gallery-container {
    max-width: 800px;
    width: 100%;
    margin: auto;
    .image-container {
      margin-bottom: 1.5rem;
      width: 100%;

      &:last-child {
        margin-bottom: 0px;
      }
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
  }
  .video-container {
    width: 100%;
    position: relative;
    margin-top: 1rem;
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
</style>
