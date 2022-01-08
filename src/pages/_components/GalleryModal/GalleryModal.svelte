<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { params } from "@roxi/routify";
  import { tick } from "svelte";
  import LeftArrow from "./assets/chevron_left_black_24dp.svelte";
  import RightArrow from "./assets/chevron_right_black_24dp.svelte";
  import { galleryModal } from "./store";

  $: ({ images } = $galleryModal);

  let carousel;

  const handleCarouselLeft = () => {
    carousel.left();
  };
  const handleCarouselRight = () => {
    carousel.right();
  };
  //temporary images until all images are organized
  const randomInd = () => {
    return Math.floor(Math.random() * (images.length - 1 - 0) + 0);
  };
</script>

<div class="container">
  <div
    on:click="{() => {
      galleryModal.closeModal();
    }}"
    class="close-x close-main"
  ></div>
  <!-- <h3 class="main-header">
    {$galleryModal.selected.label}
  </h3> -->
  <div class="content-container">
    <div class="main-image-container">
      <img src="{$galleryModal.selected.url}" alt="" />
    </div>
    {#if images.length > 0}
      <div class="flex-image-gallery-container">
        <div class="image-container">
          <img src="{images[randomInd()].url}" alt="" />
        </div>
        <div class="image-container">
          <img src="{images[randomInd()].url}" alt="" />
        </div>
        <div class="image-container">
          <img src="{images[randomInd()].url}" alt="" />
        </div>
      </div>
    {/if}

    {#if images.length > 0}
      <div class="flex-image-gallery-container">
        <div class="image-container">
          <img src="{images[randomInd()].url}" alt="" />
        </div>
        <div class="image-container">
          <img src="{images[randomInd()].url}" alt="" />
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
            {#each images.slice(0, images.length - 1) as data}
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
  </div>
</div>

<style lang="scss">
  .container {
    // background-image: url("https://res.cloudinary.com/dt4xntymn/image/upload/v1637997281/mainSite/Background_Photo_ojnwmx.jpg");

    z-index: 5;
    width: 100vw;
    height: 100%;

    padding: 30px;

    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;

    overflow-y: hidden;
    font-family: "Fira Sans Condensed", sans-serif;
    .content-container {
      max-width: 1000px;
      width: 100%;
      margin: auto;

      overflow-y: auto;
      height: 100%;
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

  .flex-image-gallery-container {
    display: flex;

    margin-top: 2.5rem;
    width: 100%;
    .image-container {
  
      margin-right: 10px;
      &:last-child {
        margin-right: 0px;
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
