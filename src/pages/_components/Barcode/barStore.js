import { writable } from "svelte/store";
import { testing } from "../../../isTesting";

export const loadedVideos = writable([]);

const store = () => {
  let state = {
    exited: [],
    currentCategory: null,
    mobileAnimationSet: {},
    desktopAnimationSet: {},
    hide: false,
    marqueeEle: null,
    pageContent: false,
    centerPosition: {
      x: 0,
      y: 0,
    },
  };
  if (testing) {
    state = {
      exited: [],
      currentCategory: 3,
      mobileAnimationSet: {},
      desktopAnimationSet: {},
      hide: false,
      marqueeEle: null,
      testing: true,
      pageContent: true,
      centerPosition: {
        x: 0,
        y: 0,
      },
    };
  }
  const { subscribe, set, update } = writable(state);
  const methods = {
    attachReverseListener(anim) {},

    init(index, animMobile, animDesktop) {
      update((s) => {
        this.attachReverseListener(animMobile);
        this.attachReverseListener(animDesktop);

        return s;
      });
    },

    setPageContent(category) {
      update((s) => {
        s.currentCategory = category;

        return s;
      });
    },
    pageContentToggle(bool) {
      update((s) => {
        s.pageContent = bool;
        return s;
      });
    },
    showMarqueeDesktop(i) {
      update((s) => {
        s.desktopAnimationSet[i].play();
        return s;
      });
    },
    closeMarquee(size) {
      update((s) => {
        s.desktopAnimationSet[s.currentCategory].reverse();

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
export const barStore = store();
