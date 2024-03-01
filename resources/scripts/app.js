import domReady from '@roots/sage/client/dom-ready';

/**
 * Application entrypoint
 */
domReady(async () => {
  // ...
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);

const postSplide = document.querySelectorAll('.post__splide');

if (postSplide) {
  postSplide.forEach((slider)=>{
    new Splide( slider, {
      arrows: true,
      perPage: 3,
      perMove: 1,
      gap: 25,
      pagination: true,
      type: 'loop',
      autoplay: true,
      breakpoints: {
        767: {
          perPage: 1,
        },
      }
    } ).mount();
  });
}
