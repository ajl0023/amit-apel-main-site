<script>
  import { goto } from "@roxi/routify";
  import LeftArrow from "./LeftArrow.svelte";
</script>

<div class="top-nav-container">
  <div
    on:click={(e) => {
      $goto("/");
    }}
    class="logo-container"
  >
    <img
      class="top-nav-container"
      src={"https://res.cloudinary.com/dt4xntymn/image/upload/v1638227177/mainSite/home/logo_yd4luk.png"}
      alt=""
    />
  </div>

  <LeftArrow />
</div>

<style lang="scss">
  .top-nav-container {
    width: 100%;
    background-color: rgb(111, 63, 138);

    padding: 10px;

    display: flex;

    justify-content: center;
    align-items: center;
    position: relative;
    .logo-container {
      cursor: pointer;
      width: 220px;

      position: relative;
      pointer-events: all;
      z-index: 5;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
