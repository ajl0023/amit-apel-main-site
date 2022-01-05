import LazyLoad from "vanilla-lazyload";

export function lazy(node) {
  const lazyLoadInstance = document.lazyLoadInstance;
  if (window.location.origin !== "http://jsdom.ssr") {
    lazyLoadInstance.update();

    return {
      update(url) {
        LazyLoad.resetStatus(node);
        lazyLoadInstance.update();
      },
    };
  }
}
