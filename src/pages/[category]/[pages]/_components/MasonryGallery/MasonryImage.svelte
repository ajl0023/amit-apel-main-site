<script>
  import { goto, params } from "@roxi/routify";
  import { tick } from "svelte";
  import { lazy } from "../../../../../helpers/lazy";
  import { galleryModal } from "../../../../_components/GalleryModal/store";
  import { marqueeHandlerStore } from "../../../_stores/marqueeHandlerStore";

  export let img;

  export let modal;
</script>

<div
  class:image-container-margin="{modal || $params.category === 'design'}"
  class="item-container {$params.category}"
>
  <div>
    <div
      style="padding-bottom: {(img.height / img.width) * 100}%;"
      class="aspect-ratio-box"
    >
      <div
        on:click="{() => {
          const masonryGalleryPages = ['private-homes', 'multi-units'];

          if (masonryGalleryPages.includes($params.pages)) {
            galleryModal.openModal(img, 'spec');
          } else {
            galleryModal.openModal(img, 'basic');
          }
          const url = img.label.replace(/\s/g, '');

          fetch(
            `${
              window.location.origin === 'http://jsdom.ssr' ||
              (!import.meta.env.PROD &&
                window.location.origin !== 'http://192.168.0.249:5000')
                ? 'http://localhost:9999'
                : window.location.origin
            }/.netlify/functions/get-full-images/?category=${$params.pages}${
              $params.pages === 'private-homes'
                ? `&subCategory=${img.category}`
                : ''
            }&property=${$galleryModal.selected.key}`
          )
            .then((res) => res.json())
            .then(async (data) => {
              $galleryModal.images = data;
              await tick();
            });
        }}"
        class="image-container"
      >
        <div class="hover-container">
          <div class="label-container">
            <h5 class="label">
              {img.label}
            </h5>
          </div>
        </div>
        <img
          width="{img.width}"
          height="{img.height}"
          use:lazy="{img.url}"
          class="image lazy"
          data-src="{img.url}"
          alt=""
        />
      </div>
    </div>
    <div class="label-container">
      <h5 class="label">
        {img.label}
      </h5>
    </div>
  </div>
</div>

<style lang="scss">
  .image-container-margin {
    margin-bottom: 15px;
  }
  .label-container {
    font-family: "Montserrat", sans-serif;

    color: #68208e;
    padding: 4px;
    text-transform: uppercase;
    .label {
      font-weight: 500;
      @media screen and (max-width: 800px) {
        font-size: 2em;
      }
    }
  }
  .aspect-ratio-box {
    overflow: hidden;

    position: relative;
  }

  .hover-element-container {
    @media screen and (min-width: 430px) {
      &:hover {
        opacity: 1;
      }
    }
  }
  .image-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .image {
      opacity: 1;
      width: 100%;
      height: 100%;
      display: block;

      object-position: center center;
    }
    .hover-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      font-size: 2em;
      .label-container {
        color: white;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
  .item-container {
    overflow: hidden;
    height: fit-content;

    position: relative;

    width: 100%;

    @media screen and (max-width: 430px) {
      display: flex;

      flex-direction: column-reverse;
    }
  }
  .item-container.architecture {
    display: flex;
    font-size: 1.3em;

    flex-direction: column-reverse;
  }
</style>
