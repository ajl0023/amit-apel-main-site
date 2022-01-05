<script>
  import { goto, params } from "@roxi/routify";
  import { pageLayoutMaster } from "../../../../pageLayout";
  import { marqueeHandlerStore } from "../../_stores/marqueeHandlerStore";
  import LeftArrow from "./LeftArrow.svelte";
  import ListIcon from "./images/ListIcon.svelte";
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
        src="{'https://res.cloudinary.com/dt4xntymn/image/upload/v1638227177/mainSite/home/logo_yd4luk.png'}"
        alt=""
      />
    </div>
    <div class="icon-container">
      <LeftArrow />{#if $params.pages}
        <ListIcon />
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
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

    padding: 10px;

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
      }
    }
    .nav-top {
      display: flex;

      justify-content: center;
      align-items: center;
    }
  }
</style>
