'use strict'

const isTouchDevice = 'ontouchstart' in document.documentElement;
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

window.onload = () => {
  if (!isTouchDevice && !isFirefox) smoothScroll();
};

function smoothScroll() {
  new SmoothScroll({
    target: document.querySelector('.container'),
    scrollEase: 0.1,
    maxOffset: 500,
  });
}