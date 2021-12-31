<script>
  import { params } from "@roxi/routify";
  import { lazy } from "../../../../../helpers/lazy";
  import { galleryModal } from "../../../../_components/GalleryModal/store";
  import { marqueeHandlerStore } from "../../../_stores/marqueeHandlerStore";

  export let img;

  export let modal;
</script>

<div
  on:click="{() => {
    galleryModal.openModal(img, $marqueeHandlerStore.page);
  }}"
  class:image-container-margin="{modal || $params.category === 'design'}"
  class="item-container {$params.category}"
>
  <div>
    <div
      style="padding-bottom: {(img.height / img.width) * 100}%;"
      class="aspect-ratio-box"
    >
      <div class="image-container">
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
          use:lazy
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
    font-family: "Fira Sans Condensed", sans-serif;
    color: #68208e;
    padding: 4px;
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
