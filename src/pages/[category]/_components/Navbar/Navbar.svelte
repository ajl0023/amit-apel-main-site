<script>
  import { goto,params } from "@roxi/routify";
  import { pageLayoutMaster } from "../../../../pageLayout";
  import { marqueeHandlerStore } from "../../_stores/marqueeHandlerStore";
  import LeftArrow from "./LeftArrow.svelte";

  let categoryDetails =
    pageLayoutMaster["categories"]["byTitle"][$params.category];
  const pagesArr = categoryDetails.pages.map((page) => {
    return pageLayoutMaster["pages"]["byTitle"][page.key];
  });
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

    <LeftArrow />
  </div>
  {#if $params.pages}
    <div class="nav-bottom">
      <ul class="nav-alt-list">
        {#each pagesArr as title}
          <li
            on:click="{() => {
              $goto(`./${title.urlFormatted}`);

              marqueeHandlerStore.setPage(title.urlFormatted);
            }}"
            class="list-item"
          >
            <h4
              class="page-title"
              class:underline="{title.urlFormatted === $params.pages}"
            >
              {title.title}
            </h4>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
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
    .nav-bottom {
      margin-right: -20px;
      margin-top: 10px;
      .nav-alt-list {
        .underline {
          &:after {
            content: "";
            display: block;
            height: 2px;
            width: 100%;
            background-color: white;
          }
        }
        font-family: "Fira Sans Condensed", sans-serif;
        text-transform: uppercase;
        color: white;
        display: flex;
        list-style: none;
        .list-item {
          cursor: pointer;
          font-size: 1.3em;
          margin-right: 20px;
        }
      }
    }
  }
</style>
