<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { params } from "@roxi/routify";
  import { onMount, tick } from "svelte";
  import { galleryModal } from "./store";
  import LeftArrow from "./assets/chevron_left_black_24dp.svelte";
  import RightArrow from "./assets/chevron_right_black_24dp.svelte";

  let images = [];
  let carousel;
  onMount(async () => {
    
  });
  fetch(
    true
      ? `${window.location.hostname}/.netlify/functions/get-full-images/?category=${$params.pages}&property=${$galleryModal.selected.key}`
      : `${window.location.hostname}/.netlify/functions/images/?category=${$params.pages}`
  )
    .then((res) => res.json())
    .then(async (data) => {
      images = data;
      await tick();
    });

  const handleCarouselLeft = () => {
    carousel.left();
  };
  const handleCarouselRight = () => {
    carousel.right();
  };
</script>

<!-- <div
  on:click={() => {
    galleryModal.closeModal();
  }}
  class="modal-container"
>
  <div class="content-container">
    <MasonryGallery modal={true} />
  </div>
</div> -->

<div class="container">
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
    <div class="main-image-container">
      <img src="{$galleryModal.selected.url}" alt="" />
    </div>
    {#if images.length > 0}
      <div class="flex-image-gallery-container">
        <div class="image-container">
          <img src="{images[2].url}" alt="" />
        </div>
        <div class="image-container">
          <img src="{images[5].url}" alt="" />
        </div>
        <div class="image-container">
          <img src="{images[7].url}" alt="" />
        </div>
      </div>
    {/if}
    <div class="description-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vero
        dolore odit nostrum ab fuga autem at maxime repellat natus nesciunt
        beatae, et quae tempore modi tenetur pariatur cum illo. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Molestias vero dolore odit
        nostrum ab fuga autem at maxime repellat natus nesciunt beatae, et quae
        tempore modi tenetur pariatur cum illo. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Molestias vero dolore odit nostrum ab fuga
        autem at maxime repellat natus nesciunt beatae, et quae tempore modi
        tenetur pariatur cum illo.
      </p>
    </div>
    {#if images.length > 0}
      <div class="flex-image-gallery-container">
        <div class="image-container">
          <img src="{images[3].url}" alt="" />
        </div>
        <div class="image-container">
          <img src="{images[9].url}" alt="" />
        </div>
      </div>
    {/if}
    <div class="carousel-container">
      <span on:click="{handleCarouselLeft}" class="control left">
        <LeftArrow />
      </span>
      {#if images.length > 0}
        <Carousel bind:this="{carousel}" perPage="{1}">
          {#each images.slice(10, 20) as data}
            <div class="image-container">
              <img class="carousel-image" src="{data.url}" alt="" />
            </div>
          {/each}
        </Carousel>
      {/if}
      <span on:click="{handleCarouselRight}" class="control right">
        <RightArrow /></span
      >
    </div>
  </div>
</div>

<style lang="scss">
  .control.left {
    left: -2vw;
  }
  .control.right {
    right: -2vw;
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

    svg {
      fill: white;
    }
  }
  .carousel-container {
    max-width: 800px;
    width: 100%;
    margin: 2.5rem auto auto auto;

    position: relative;
    display: flex;
    align-items: center;
    .carousel-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  .flex-image-gallery-container {
    display: flex;
    overflow: hidden;
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
  .content-container {
    max-width: 1000px;
    width: 100%;
    margin: auto;

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
    .description-container {
      margin-top: 2.5rem;
      padding: 0.5rem;
    }
  }
  .container {
    padding: 30px;
    background-image: url("https://res.cloudinary.com/dt4xntymn/image/upload/v1637997281/mainSite/Background_Photo_ojnwmx.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    font-family: "Fira Sans Condensed", sans-serif;
  }
</style>
