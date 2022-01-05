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
    height: 100vh;
    width: 100vw;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;

    display: flex;
    justify-content: center;
  }
  .gallery-container {
    display: flex;
    align-items: center;
    flex-direction: column;

    height: 100%;

    .image-container {
      margin-bottom: 1.5rem;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
</style>
