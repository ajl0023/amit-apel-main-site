<script>
  import { galleryModal } from "../GalleryModal/store";
</script>

<div class="container">
  <div
    on:click="{() => {
      galleryModal.closeModal();
    }}"
    class="close-x close-main"
  ></div>
  <div class="gallery-container">
    {#each $galleryModal.images as img}
      <div class="image-container">
        <img src="{img.url}" alt="" />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    padding: 30px;
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
  .gallery-container {
    max-width: 1200px;
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
</style>
