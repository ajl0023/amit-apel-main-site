import { writable } from "svelte/store";
import { crossfade } from "svelte/transition";

function getAnimation(config) {
  const [send, receive] = crossfade({
    ...config,
  });
  return writable({ send, receive });
}

export const transition = getAnimation({});
export const introTransition = getAnimation({
  duration: 4000,
});
