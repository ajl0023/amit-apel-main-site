<script>
  import { params, ready } from "@roxi/routify";
  import { onDestroy, onMount } from "svelte";
  import { pageLayoutMaster } from "../../../../../pageLayout";
  import { marqueeHandlerStore } from "../../../_stores/marqueeHandlerStore";

  let pageDetails;

  $: {
    pageDetails =
      pageLayoutMaster["pages"]["byTitle"][$marqueeHandlerStore.page];
  }
  function reDirect(e) {
    e.preventDefault();

    window.open(pageDetails.data.link);
  }
  onMount(() => {
    $ready();
  });
</script>

{#if pageDetails.data}
  <div class="page-container"></div>
  <div class="container">
    <div class="left-page">
      <div class="header-container">
        <h5 class="main-header">
          Project, <span class="property-header">{$params.pages}</span>
        </h5>
      </div>
      <div class="text-wrapper">
        <div class="text-content-container">
          <p class="description">
            {pageDetails.data.description}
          </p>
        </div>
      </div>
      <button on:click="{reDirect}" class="redirect-button">visit site</button>
    </div>
    <div class="main-image-container">
      <img class="main-image" src="{pageDetails.data.img}" alt="" />
    </div>
  </div>
{/if}

<style lang="scss">
  .left-page {
    display: flex;
    flex-direction: column;
    width: 50vw;
    justify-content: center;
    padding: 5vw;
    height: 100%;
    @media screen and (max-width: 955px) {
      width: 100%;
      height: auto;
      padding: 2vw;
    }
    @media screen and (max-width: 420px) {
      align-items: center;
    }
  }
  .main-header {
    font-family: "Fira Sans Condensed", sans-serif;
    text-transform: uppercase;
    font-size: 2em;
  }
  .header-container {
    margin-bottom: 1.5rem;

    .property-header {
      color: #5d1089;
      font-weight: 800;
      font-family: "Fira Sans Condensed", sans-serif;
    }
  }
  .redirect-button {
    text-transform: uppercase;
    font-family: "Fira Sans Condensed", sans-serif;
    font-weight: 800;
    background: #5d1089;
    border: none;
    color: white;
    cursor: pointer;

    text-align: center;
    border-radius: 4px;
    max-width: 200px;
    padding: 5px 15px;
    @media screen and (max-width: 420px) {
      width: 100%;
      max-width: 100%;
    }
  }
  .text-wrapper {
    max-width: 500px;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 955px) {
      width: 100%;
    }
  }

  .text-content-container {
    text-align: left;
    .description {
      font-family: "Fira Sans Condensed", sans-serif;
      font-size: 1.5em;
      @media screen and (max-width: 955px) {
        width: 100%;
        font-size: 1.1em;
      }
    }
  }

  .container {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    @media screen and (max-width: 955px) {
      flex-direction: column;
      align-items: center;
      padding: 10px;
      overflow-x: hidden;
      overflow-y: auto;
      height: auto;
      justify-content: space-around;
    }
  }
  .main-image-container {
    height: 100%;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      content: "";
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.9192051820728291) 21%,
        rgba(255, 255, 255, 0.01) 100%
      );
      display: block;
    }
    .main-image {
      object-fit: cover;
      width: 100%;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      height: 100%;
    }
    @media screen and (max-width: 955px) {
      width: 100%;
      height: 400px;
    }
  }
</style>
