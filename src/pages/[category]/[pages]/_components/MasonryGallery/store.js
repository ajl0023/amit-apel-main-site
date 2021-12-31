import { writable } from "svelte/store";

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29
export const store = () => {
  const state = {
    grid: null,
    content: [],
    gridItems: [],
    imagesLoaded: false,
  };
  const { subscribe, set, update } = writable(state);

  const methods = {
    init(ele, eleA, marquee, marqueeInner) {},
  };
  return {
    subscribe,
    set,
    update,
    ...methods,
  };
};

export const masonryStore = store();
