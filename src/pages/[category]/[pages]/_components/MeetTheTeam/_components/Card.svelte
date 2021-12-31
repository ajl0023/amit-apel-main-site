<script>
  import { DragGesture } from "@use-gesture/vanilla";
  import gsap from "gsap";

  import { onMount, tick } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import { derived } from "svelte/store";
  import { distance } from "../../../../_stores/utils";
  import { cardStore } from "../_store/cardStore";

  export let index;

  export let image;
  export let stack;
  export let outline;

  $: ({ shouldReturn, cardToExit, shouldAnimate } = $cardStore);
  $: cardZ = $cardStore.currentStack.indexOf(index);
  let ele;
  let rotateY = gsap.timeline({ paused: true });

  let exited = false;

  async function returnCard() {
    exited = false;
    cardStore.returnCard(index);
    await tick();
    if (ele) {
      gsap.to(ele, {
        x: 0,
      });
    }
  }
  function getCenterPos() {
    const outLinePosition = outline.getBoundingClientRect();
    const stackPosition = stack.getBoundingClientRect();
    const distanceRes = distance(
      outLinePosition.x,
      stackPosition.x,
      outLinePosition.y,
      stackPosition.y
    );
    return distanceRes;
  }
  async function exitCard(mobile) {
    exited = true;
    const distanceRes = getCenterPos();
    cardStore.exit(index);
    await tick();
    gsap.to(ele, {
      x: mobile ? -900 : -distanceRes,
    });
  }

  onMount(() => {
    rotateY.to(ele, {
      rotateY: -180,
    });
    new DragGesture(
      ele,
      async ({ xy, active, offset, tap, swipe }) => {
        if (shouldAnimate) {
          if (tap && !gsap.isTweening(ele) && exited) {
            returnCard();
            await tick();
          } else if (tap && !exited) {
            if (rotateY.reversed()) {
              rotateY.play();
            } else {
              rotateY.reverse();
            }
          } else if (!exited) {
            if (active) {
              gsap.set(ele, {
                x: offset[0],
                zIndex: 10,
              });
              gsap.killTweensOf(ele, "x");
            } else if (
              window.innerWidth >= 550 &&
              !cardStore.detectCollision(ele) &&
              !active
            ) {
              exitCard();

              return;
            } else if (window.innerWidth <= 550 && swipe[0] === -1) {
              exitCard(true);
            } else {
              gsap.to(ele, {
                x: 0,
              });
            }
          }
        }
      },
      {
        eventOptions: { capture: false, passive: false },
        filterTaps: true,
        from: function () {
          const position = gsap.getProperty(ele, "x");

          return [position, 0];
        },
      }
    );

    gsap.set(ele, {
      y: "-100vh",
      rotateZ: index * (Math.random() * 2),
    });
  });
  //make this await tick i dontknow lol
  $: {
    if (cardToExit === index) {
      exitCard(window.innerWidth <= 550);
      gsap.set(ele, {
        zIndex: 10,
      });
    }
  }

  $: {
    // if card is in currentStack, make zIndex its position in the stack
    // if card is exited, make zIndex its position in the exited stack
    if (ele && cardZ >= 0) {
      gsap.set(ele, {
        zIndex: cardZ,
      });
    }
  }
  $: cardZExited = $cardStore.exitedArr.indexOf(index);

  $: {
    if (cardZExited >= 0 && ele) {
      gsap.to(ele, { zIndex: cardZExited, delay: 0.3 });
    } else {
      gsap.to(ele, { zIndex: cardZ });
    }
  }
  $: {
    if (shouldReturn) {
      exited = false;
    }
  }
</script>

<svelte:window
  on:resize={() => {
    if (exited) {
      gsap.set(ele, {
        x: -getCenterPos(),
      });
    }
  }}
/>
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  on:mouseover={() => {
    if (!exited && !shouldReturn) {
      gsap.to(ele, {
        scale: 1.1,
      });
    }
  }}
  on:mouseout={() => {
    gsap.to(ele, {
      scale: 1,
    });
  }}
  bind:this={ele}
  draggable="false"
  class="card-container meet-the-team-card"
>
  <div draggable="false" class="image-container front-container">
    <img
      draggable="false"
      on:dragstart={(e) => {
        e.preventDefault();
      }}
      src={image["front"]}
      alt=""
    />
  </div>
  <div draggable="false" class="image-container back-container">
    <img
      on:dragstart={(e) => {
        e.preventDefault();
      }}
      draggable="false"
      src={image["back"]}
      alt=""
    />
  </div>
</div>

<style lang="scss">
  .card-container {
    display: flex;
    pointer-events: all;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    will-change: transform;
    touch-action: none;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .front-container {
    position: absolute;
  }
  .image-container {
    overflow: hidden;

    border-radius: 10px;
    backface-visibility: hidden;
    box-shadow: 0 12.5px 100px -10px rgb(50 50 73 / 20%),
      0 10px 10px -10px rgb(50 50 73 / 20%);
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .back-container {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    transform: rotateY(180deg);
  }
</style>
