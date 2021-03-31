'use strict'

const isTouchDevice = 'ontouchstart' in document.documentElement;
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const bodyWidth = document.body.getBoundingClientRect().width;
const menuEl = document.querySelector('.menu');
const pageAudio = new Audio('https://raw.githubusercontent.com/rayc2045/raychang-space/master/audio/page.mp3')

document.onselectstart = () => false;
document.ondragstart = () => false;
document.oncontextmenu = () => false;
document.body.style.overflow = 'hidden';
window.onscroll = () => hideMenu();
window.onresize = () => hideMenu();

window.onload = () => {
  setTimeout(() => {
    document.body.removeAttribute('style');
    document.oncontextmenu = e => showMenu(e);
    if (!isTouchDevice) smoothScroll();
  }, 1800);
};

document.onmousedown = e => {
  if (!e.target.hasAttribute('href')) hideMenu();
};

document.onmouseup = e => {
  if (e.target.hasAttribute('href')) {
    playAudio(pageAudio);
    hideMenu();
  }
};

function smoothScroll() {
  document.querySelector('.viewport').classList.add('SmoothScroll');

  new SmoothScroll({
    target: document.querySelector('.container'),
    scrollEase: 0.08,
    maxOffset: 500,
  });
}

function showMenu(e) {
  e.preventDefault();
  menuEl.classList.add('show');
  console.log(e.pageX, e.pageY);
  menuEl.style.left = `${e.pageX + 5}px`;
  menuEl.style.top = `${e.pageY - 5}px`;
}

function hideMenu() {
  menuEl.classList.remove('show');
}

function removeElement(el) {
  el.parentNode.removeChild(el);
}

function playAudio(audio, volume = 1) {
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}