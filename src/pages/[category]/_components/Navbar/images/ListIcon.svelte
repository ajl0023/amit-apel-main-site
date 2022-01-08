<script>
  import { goto, params } from "@roxi/routify";

  import { pageLayoutMaster } from "../../../../../pageLayout";
  let drop = false;

  let categoryDetails =
    pageLayoutMaster["categories"]["byTitle"][$params.category];
  const pagesArr = categoryDetails.pages.map((page) => {
    return pageLayoutMaster["pages"]["byTitle"][page.key];
  });
</script>

<div
  on:click="{() => {
    drop = !drop;
  }}"
  class="container"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    class="menu-icon"
    viewBox="0 0 24 24"
    width="24px"
    fill="white"
    ><path d="M0 0h24v24H0z" fill="none"></path><path
      d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
    ></path></svg
  >
  {#if drop}
    <div class="drop-down-container">
      <div class="arrow-up"></div>
      <ul class="nav-alt-list">
        {#each pagesArr as page}
          <li
            on:click="{() => {
              $goto(`./${page.urlFormatted}`);
            }}"
            class="nav-list-item"
          >
            <h4 class="nav-sub-item">
              {page.title}
            </h4>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  .arrow-up {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-bottom: 10px solid white;
    position: absolute;
    top: -5px;
    left: 5px;
  }
  .menu-icon {
    display: block;
    cursor: pointer;
    height: 30px;
    width: 30px;
   
  }
  .drop-down-container {
    height: auto;
    background-color: white;

    border-radius: 9px;
    z-index: 15;
    font-family: "Fira Sans Condensed", sans-serif;
    text-transform: uppercase;
    position: absolute;
    .nav-alt-list {
      overflow: hidden;
    }
    .nav-list-item {
      display: block;
      cursor: pointer;
      padding: 20px;
      border-bottom: 1px solid rgb(161, 161, 161);
      white-space: nowrap;
      &:hover {
        background-color: rgb(111, 63, 138);
        color: white;
      }
      &:last-child {
        margin-bottom: 0px;
        border: none;
      }
    }
  }
</style>
