import LazyLoad from "vanilla-lazyload";

export function lazy(node) {
  const lazyLoadInstance = document.lazyLoadInstance;
  if (window.location.origin !== "http://jsdom.ssr") {
    // LazyLoad.resetStatus(node);

    lazyLoadInstance.update();

    return {
      update(url) {},
    };
  }
}
export function lazyMasonry(node) {
  if (window.location.origin !== "http://jsdom.ssr") {
    // LazyLoad.resetStatus(node);

    return {
      update(params) {
        const { grid, content, imageEle } = params;
       
      },
    };
  }
}
