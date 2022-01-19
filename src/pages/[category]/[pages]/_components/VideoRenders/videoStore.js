import { writable } from "svelte/store";

export const store = () => {
  const state = {
    visible: false,
    src: null,
  };
  const { subscribe, set, update } = writable(state);

  const methods = {
    handleVisible() {
      update((s) => {
        s.visible = !s.visible;
        return s;
      });
    },
    setVideo(url) {
      update((s) => {
        s.src = url;

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

export const videoStore = store();
