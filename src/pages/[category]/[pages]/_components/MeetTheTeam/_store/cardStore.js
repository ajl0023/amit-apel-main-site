import gsap from "gsap";
import { tick } from "svelte";

import { writable } from "svelte/store";
import { distance } from "../../../../_stores/utils";

const store = () => {
  const state = {
    introAnimation: gsap.timeline({
      paused: true,
    }),
    exitedArr: [],
    currentStack: [5, 4, 3, 2, 1, 0],
    shouldReturn: false,
    outline: null,
    cardToExit: null,
    shouldAnimate: true,
  };
  const copy = { ...state };
  const { subscribe, set, update } = writable(state);
  const methods = {
    returnCard(i) {
      // this is going to remove card from exited
      // add card on top of currentStack
      update((s) => {
        s.exitedArr = s.exitedArr.filter((num) => {
          return num !== i;
        });
        s.currentStack = [...s.currentStack, i];

        return s;
      });
    },
    init(outline) {
      update((s) => {
        s.outline = outline;
        return s;
      });
    },
    exit(i) {
      update((s) => {
        s.currentStack = s.currentStack.filter((f) => {
          return f !== i;
        });
        s.exitedArr = [...s.exitedArr, i];

        return s;
      });
      return;
    },

    detectCollision(card) {
      const cardPosition = card.getBoundingClientRect();
      const outlinePosition = state.outline.getBoundingClientRect();
      let d1Offset = cardPosition;

      let d1Left = d1Offset.left;

      let d2Offset = outlinePosition;

      return !(d1Left < d2Offset.right - 100);
    },
    introAnim() {
      update((s) => {
        s.introAnimation.to(".meet-the-team-card", {
          y: 0,
          delay: 1.2,
          stagger: -0.2,
          duration: 0.5,
        });
        s.introAnimation.play();

        // s.introAnimation.progress(1);
        return s;
      });
    },
    reset() {
      update((s) => {
        s.shouldReturn = true;

        return s;
      });
    },
    getExitLocation(ele, index) {
      const outLinePosition = state.outline.getBoundingClientRect();
      const stackPosition = ele.getBoundingClientRect();
      const distanceRes = distance(
        outLinePosition.x,
        stackPosition.x,
        outLinePosition.y,
        stackPosition.y
      );

      return distanceRes;
    },
    manualExit(ele, index) {
      update((s) => {
        s.cardToExit = s.currentStack[s.currentStack.length - 1];
        return s;
      });
    },
    returnAll() {
      update((s) => {
        s.shouldAnimate = false;
        s.shouldReturn = true;
        return s;
      });
      let count = 0;

      gsap.to(".meet-the-team-card", {
        x: 0,

        stagger: {
          amount: 0.5,
          from: 6,
          onStart: function () {
            gsap.set(this.targets()[0], {
              zIndex: count,
            });
            count += 1;
          },
        },

        delay: 1.5,
        onComplete: function () {
          update((s) => {
            s = { ...copy };

            return s;
          });
        },
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
export const cardStore = store();
