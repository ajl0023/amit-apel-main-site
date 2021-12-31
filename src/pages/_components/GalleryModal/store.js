import { writable } from "svelte/store";
const store = () => {
  const state = {
    selected: null,
    visible: false,
    images: [],
  };
  const { subscribe, set, update } = writable(state);
  const methods = {
    openModal(content, category) {
      update((s) => {
        s.selected = content;
        s.visible = true;

        return s;
      });
    },
    closeModal() {
      update((s) => {
        s.selected = null;
        s.visible = false;
        s.images = [];
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
export const galleryModal = store();
