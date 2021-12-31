<script>
  import { goto } from "@roxi/routify";
  import { onMount } from "svelte";
  import { marqueeHandlerStore } from "../_stores/marqueeHandlerStore";
  import { marqueeStore } from "../_stores/menuItemAnimation";

  export let menuItem;

  let menuItemOuterEle;
  let menuItemInnerEle;
  let marqueeInnerEle;
  let marquee;

  let store;

  onMount(() => {
    store = marqueeStore();

    store.init(menuItemOuterEle, menuItemInnerEle, marquee, marqueeInnerEle);
  });
</script>

<div
  on:click={async (e) => {
    $goto("./" + menuItem.urlFormatted);

    // marqueeHandlerStore.setPage(menuItem.urlFormatted);
  }}
  bind:this={menuItemOuterEle}
  class="menu__item"
>
  <div
    on:mouseenter={(e) => {
      store.mouseEnter(e);
    }}
    on:mouseleave={(e) => {
      store.mouseLeave(e);
    }}
    class="menu__item-link"
  >
    {menuItem.title}
  </div>
  <div bind:this={marquee} class="marquee">
    <div bind:this={marqueeInnerEle} class="marquee__inner-wrap">
      <div class="marquee__inner" aria-hidden="true">
        {#each Array(8).fill(menuItem.title) as label}
          <span>{label}</span>
          <div class="marquee__img" />
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @keyframes marquee {
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }

  .marquee__inner {
    animation: marquee 15s linear infinite;
    color: white;
  }
  .marquee__img {
    width: 15vw;
    height: 70%;
    margin: 0 2vw;
    border-radius: 5vw;
    background-size: cover;
    background-position: 50% 50%;
  }

  .menu__item {
    cursor: default;
    position: relative;
    overflow: hidden;
    z-index: 5;
    display: block;
    background-color: transparent;
    text-decoration: none;
    width: 100%;
    font-family: "Fira Sans Condensed", sans-serif;
    text-align: center;
    border-top: 2px solid black;
    &:last-child {
      border-bottom: 2px solid black;
    }
  }

  .menu__item-link {
    display: block;
    position: relative;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }

  .marquee {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: #68208e;
    transform: translate3d(0, 101%, 0);
  }

  .marquee__inner-wrap {
    height: 100%;
    width: 100%;
    transform: translate3d(0, -101%, 0);
  }

  .marquee__inner {
    height: 100%;
    width: fit-content;
    align-items: center;
    display: flex;
    position: relative;
    animation: marquee 15s linear infinite;
    will-change: transform;
  }

  @keyframes marquee {
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }

  .menu__item-link,
  .marquee span {
    white-space: nowrap;
    font-size: 4vw;
    line-height: 1.2;
    font-weight: 600;
    padding: 1vh 1vw 0;
    text-transform: uppercase;
    @media screen and (max-width: 820px) {
      font-size: 10vw;
    }
  }

  .marquee span {
    text-align: center;
    color: var(--marquee-text);
    font-weight: 400;
  }
</style>
