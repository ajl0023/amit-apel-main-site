import { writable } from "svelte/store";
const store = () => {
  const state = {
    selected: null,
    visible: false,
    images: [],
    type: null,
  };
  const { subscribe, set, update } = writable(state);
  const copy = Object.assign({}, state);

  const methods = {
    openModal(content, type) {
      update((s) => {
        s.selected = content;
        s.visible = true;
        s.type = type;
        return s;
      });
    },
    closeModal() {
      update((s) => {
    
        s = { ...copy };
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
