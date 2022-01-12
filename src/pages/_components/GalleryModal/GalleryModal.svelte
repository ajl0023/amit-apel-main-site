<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { params } from "@roxi/routify";
  import { onMount, tick } from "svelte";
  import BasicModal from "../BasicModal/BasicModal.svelte";
  import LeftArrow from "./assets/chevron_left_black_24dp.svelte";
  import RightArrow from "./assets/chevron_right_black_24dp.svelte";
  import { galleryModal } from "./store";

  $: ({ images } = $galleryModal);
  let container;
  let carousel;
  let loading = true;
  const handleCarouselLeft = () => {
    carousel.left();
  };
  const handleCarouselRight = () => {
    carousel.right();
  };

  $: {
    if (images) {
      loading = false;
      images = images.filter((image) => {
        return image.tags[1] !== "true";
      });
    }
  }
  let height;
  const setContainerHeight = () => {
    const navbar = document.querySelector(".top-nav-container");
    height = window.innerHeight - navbar.getBoundingClientRect().height;
  };
  onMount(() => {
    setContainerHeight();
  });
</script>

<svelte:window on:resize="{setContainerHeight}" />
{#if $galleryModal.selected}
  <div style="height: {height}px;" bind:this="{container}" class="container">
    <div class="content-wrapper">
      <div
        on:click="{() => {
          galleryModal.closeModal();
        }}"
        class="close-x close-main"
      ></div>
      <h3 class="main-header">
        {$galleryModal.selected.label}
      </h3>
      <div class="content-container">
        {#if images.length < 3}
          <div class="gallery-container">
            {#each images as img}
              <div class="image-container">
                <img src="{img.url}" alt="" />
              </div>
            {/each}
          </div>
        {:else}
          <div class="main-image-container">
            <img src="{$galleryModal.selected.url}" alt="" />
          </div>
          {#if images.length > 0}
            <div class="flex-image-gallery-container col-3">
              <div class="image-container">
                <img src="{images[0].url}" alt="" />
              </div>
              <div class="image-container">
                <img src="{images[1].url}" alt="" />
              </div>
              <div class="image-container">
                <img src="{images[2].url}" alt="" />
              </div>
            </div>
          {/if}

          {#if images.length > 4}
            <div class="flex-image-gallery-container col-2">
              <div class="image-container">
                <img src="{images[3].url}" alt="" />
              </div>
              <div class="image-container">
                <img src="{images[4].url}" alt="" />
              </div>
            </div>
          {/if}
          <div class="carousel-container">
            <span on:click="{handleCarouselLeft}" class="control left">
              <LeftArrow />
            </span>
            {#if images.length > 0}
              <div class="carousel-main-container">
                <Carousel bind:this="{carousel}" perPage="{1}">
                  {#each images as data}
                    <div class="image-container">
                      <img class="carousel-image" src="{data.url}" alt="" />
                    </div>
                  {/each}
                </Carousel>
              </div>
            {/if}
            <span on:click="{handleCarouselRight}" class="control right">
              <RightArrow />
            </span>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .gallery-container {
    margin: auto;
    max-width: 800px;
    width: 100%;
    .image-container {
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .content-wrapper {
    z-index: 2;
    position: relative;

    padding: 30px;
  }
  .container {
    // background-image: url("https://res.cloudinary.com/dt4xntymn/image/upload/v1637997281/mainSite/Background_Photo_ojnwmx.jpg");

    z-index: 5;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: auto;
    font-family: 'Montserrat', sans-serif;
    .content-container {
      max-width: 1000px;
      width: 100%;
      margin: auto;

      position: relative;
      overflow-y: auto;

      display: flex;
      flex-direction: column;
      align-items: center;
      .main-image-container {
        position: relative;
        width: 100%;
        padding-bottom: 62%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          position: absolute;
          display: block;
          top: 0;
          bottom: 0;
          left: 0;

          right: 0;
        }
      }
    }
  }
  .carousel-container {
    max-width: 800px;
    width: 100%;

    position: relative;
    margin-top: 1.5rem;
    align-items: center;

    &:before {
      display: block;
      content: "";
      width: 100%;

      padding-top: (9 / 16) * 100%;
    }
    .carousel-main-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      .image-container {
        width: 100%;
        overflow: hidden;
        height: 100%;
        .carousel-image {
          width: 100%;
          display: block;
          height: 100%;
        }
      }
    }
  }

  .col-3 {
    .image-container {
      flex: 33%;
    }
  }
  .col-2 {
    .image-container {
      flex: 50%;
    }
  }
  .flex-image-gallery-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;

    .image-container {
      justify-content: center;
      position: relative;
      &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: 63%;
      }
      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      &:not(:last-child) {
        margin-right: 10px;
      }
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
  .main-header {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2em;
  }

  .control.right {
    right: -40px;
    top: 0;
    bottom: 0;
    margin: auto;
    @media screen and (max-width: 990px) {
      right: 20px;
    }
  }
  .control.left {
    left: -40px;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
    @media screen and (max-width: 990px) {
      left: 20px;
    }
  }

  .control {
    border-radius: 50%;

    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;

    position: absolute;
    cursor: pointer;
    justify-content: center;

    background-color: black;
  }
</style>
