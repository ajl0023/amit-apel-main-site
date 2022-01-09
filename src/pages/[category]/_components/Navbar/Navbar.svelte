<script>
  import { goto, params } from "@roxi/routify";
  import { pageLayoutMaster } from "../../../../pageLayout";
  import { marqueeHandlerStore } from "../../_stores/marqueeHandlerStore";
  import LeftArrow from "./LeftArrow.svelte";
  import ListIcon from "./ListIcon.svelte";
</script>

<div class="top-nav-container">
  <div class="nav-top">
    <div
      on:click="{(e) => {
        $goto('/');
      }}"
      class="logo-container"
    >
      <img
        src="{'https://res.cloudinary.com/dt4xntymn/image/upload/v1641600476/mainSite/home/LOGO_hzvhrk.png'}"
        alt=""
      />
    </div>
    <div class="icon-container">
      <LeftArrow />
    </div>
  </div>
  <div class="menu-icon-container">
    <ListIcon />
  </div>
</div>

<style lang="scss">
  .menu-icon-container {
    position: absolute;
    left: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
      right: 30px;
      left: auto;
    }
  }
  .icon-container {
    position: absolute;
    left: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top-nav-container {
    width: 100%;
    background-color: rgb(111, 63, 138);

    padding: 20px;

    display: flex;
    flex-direction: column;
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
        object-fit: cover;
      }
    }
    .nav-top {
      display: flex;

      justify-content: center;
      align-items: center;
    }
  }
</style>
