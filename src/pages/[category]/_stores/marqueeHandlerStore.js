import { writable } from "svelte/store";


const marqueeStore = () => {
  const state = {
    page: null,
    component: null,
    category: true,
  };
  const { subscribe, set, update } = writable(state);

  const methods = {
    setCategory(category) {
      update((s) => {
        s.category = category;

        return s;
      });
    },
    setPage(page) {
      update((s) => {
        s.page = page;
        return s;
      });
    },
  };
  return {
    subscribe,
    set,
    update,
    ...methods,
  };
};

export const marqueeHandlerStore = marqueeStore();
