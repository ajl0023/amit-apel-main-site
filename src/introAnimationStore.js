import { writable } from "svelte/store";
import gsap from "gsap";

import { testing } from "./isTesting";

const introAnimation = () => {
  const state = {
    timeline: null,
    shouldReturn: false,
    shouldPointerEvents: false,
    shouldPulse: false,
    shouldRemoveStroke: false,
    videos: [],
  };
  const { subscribe, set, update } = writable(state);
  const methods = {
    init() {
      update((s) => {
        s.timeline = gsap.timeline({
          paused: true,
          onComplete: () => {
            update((s) => {
              s.shouldPointerEvents = true;
              return s;
            });
          },
        });
        s.timeline
          .to(".video-brush", {
            opacity: 0,
            delay: 3,
            duration: 1,
            onComplete: function () {
              update((s) => {
                s.shouldRemoveStroke = true;
                return s;
              });
            },
          })
          .to(".video-render", {
            opacity: 1,
            duration: 1,
          })
          .to(
            ".bar-mask",
            {
              opacity: 1,

              stagger: 0.4,
              duration: 3,
              onStart: () => {
                s.videos.forEach((v) => {
                  if (v) {
                    v.play();
                  }
                });
              },
              onComplete: () => {
                update((s) => {
                  s.shouldReturn = true;
                  s.shouldPulse = true;
                  return s;
                });
              },
            },
            "initialFade"
          )
          //this is where sveltes crossfade is happening

          .to(".bar", {
            stagger: {
              grid: [1, 15],
              axis: "x",
              amount: 2,
            },
            opacity: 1,
          })
          .to(
            ".main-text.fade",
            {
              stagger: 1,
              opacity: 1,
            },
            ">-0.5"
          )
          .to(
            ".main-text.fade",
            {
              stagger: 1,
              opacity: 1,
            },
            "<"
          )
          .to(".logo-text-container", {
            opacity: 1,
          });

        return s;
      });
    },
    endAnim() {
      update((s) => {
        s.timeline.progress(1, true);
        s.shouldPointerEvents = true;
        s.shouldPulse = true;
        s.shouldReturn = true;
        return s;
      });
    },
    triggerAnim(shouldAnimate) {
      update((s) => {
        if (testing) {
          this.endAnim();

          return s;
        }
        if (shouldAnimate) {
          s.timeline.play();
        } else {
          this.endAnim();
        }
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
export const introAnimationStore = introAnimation();
