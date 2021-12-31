import gsap from "gsap";
import { get, writable } from "svelte/store";
import { marqueeHandlerStore } from "./marqueeHandlerStore";

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const marqueeStore = () => {
  const state = {
    pageTransition: gsap.timeline({
      paused: true,
    }),
    navigator: null,
    isAnimating: false,
    pageContentContainer: null,
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
  const { subscribe, set, update } = writable(state);

  const methods = {
    initMarquee() {
      update((s) => {
        s.marqueeEle = document.querySelector(".marquee-wrapper");
        return s;
      });
    },
    initNav(navigator) {
      update((s) => {
        s.navigator = navigator;

        return s;
      });
    },
    init() {
      update((s) => {
        return s;
      });
    },
    triggerAnim(navigator) {
      let anim;
      update((s) => {
        gsap.set(".marquee-animation-container", { y: "0vh" });
        anim = s.pageTransition
          .to(".marquee-animation-container", {
            y: "100vh",
          })
          .to(".page-transition-black", {
            height: "100vh",
            duration: "1.2",
            ease: "power3.out",
            onComplete: () => {},
          })
          .to(".page-transition-black", {
            height: "0vh",
            duration: "1.2",
            ease: "power3.out",
            onComplete: () => {},
          });

        return s;
      });
      return anim;
    },
    reverseAnim(navigator) {
      update((s) => {
        s.pageTransition.reverse();
        return s;
      });
    },
    showMarquee(i, size, centerPosition) {
      update((s) => {
        s.centerPosition = {
          x: 0,
          y: 0,
        };
        s.desktopAnimationSet[i] = gsap.timeline();

        s.desktopAnimationSet[i].eventCallback("onReverseComplete", () => {
          update((s) => {
            s.hide = false;
            s.currentCategory = false;
            s.centerPosition = false;
            this.pageContentToggle(false);
            return s;
          });
        });
        gsap.set(s.marqueeEle, {
          left: centerPosition.x,
          top: centerPosition.y,
        });
        s.desktopAnimationSet[i].to(s.marqueeEle, {
          width: "100vw",
          top: 0,
          duration: 0.4,
          height: "100vh",
          left: 0,
        });

        return s;
      });
    },
    updateAnim() {
      update((s) => {
        if (s.pageTransition.isActive()) {
          gsap.set(".page-content-container-anim", { y: "100vh", top: 0 });
        } else {
          gsap.set(".page-content-container-anim", { y: "0vh", top: 0 });
        }

        s.pageTransition.to(
          ".page-transition-black",
          {
            height: "0vh",
            ease: "power3.in",

            duration: "0.8",
          },
          "<"
        );
        return s;
      });
    },
    closeMarquee() {
      update((s) => {
        const currentCategory = get(marqueeHandlerStore).category;
        s.desktopAnimationSet[currentCategory].reverse();

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

export const marqueeAnimationStore = marqueeStore();
