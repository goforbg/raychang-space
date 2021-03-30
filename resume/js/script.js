'use strict'

const isTouchDevice = 'ontouchstart' in document.documentElement;
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const bodyWidth = document.body.getBoundingClientRect().width;
const menuEl = document.querySelector('.menu');
const containerEl = document.querySelector('.container');
const resumeEl = document.querySelector('.resume');
const pageAudio = new Audio('https://raw.githubusercontent.com/rayc2045/raychang-space/master/audio/page.mp3')

document.oncontextmenu = () => false;
window.onscroll = e => e.preventDefault();
window.onresize = () => hideMenu();

window.onload = () => {
  if (bodyWidth < 768) resumeEl.classList.remove('slide');
  
  setTimeout(() => {
    window.onscroll = () => hideMenu();
    if (!isTouchDevice && !isFirefox) smoothScroll();
    document.oncontextmenu = e => showMenu(e);
  }, 1800);
};

document.onselectstart = () => false;
document.ondragstart = () => false;

document.onmousedown = e => {
  if (!e.target.classList.contains('menu')) hideMenu();
}

document.onmouseup = e => {
  if (e.target.hasAttribute('href')) {
    playAudio(pageAudio);
    if (e.which === 3) window.open(e.target.href, '_blank');
  }
};

function smoothScroll() {
  new SmoothScroll({
    target: containerEl,
    scrollEase: 0.08,
    maxOffset: 500,
  });
}

function showMenu(e) {
  e.preventDefault();
  menuEl.classList.add('show');
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