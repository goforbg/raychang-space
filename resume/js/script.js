'use strict'

const isTouchDevice = 'ontouchstart' in document.documentElement;
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const bodyWidth = document.body.getBoundingClientRect().width;
const containerEl = document.querySelector('.container');
const resumeEl = document.querySelector('.resume');

window.onscroll = e => e.preventDefault();

window.onload = () => {
  if (bodyWidth < 768) resumeEl.classList.remove('slide');
  
  setTimeout(() => {
    window.onscroll = null;
    if (!isTouchDevice && !isFirefox) smoothScroll();
  }, 1800);
};

document.onselectstart = () => false;
document.ondragstart = () => false;
document.oncontextmenu = () => false;

document.onmouseup = e => {
  if (e.target.hasAttribute('href')) {
    playAudio('https://raw.githubusercontent.com/rayc2045/raychang-space/master/audio/page.mp3');
    if (e.which === 3) window.open(e.target.href, '_blank');
  }
};

resumeEl.onmousedown = e => appendCircle(e, resumeEl);

function smoothScroll() {
  new SmoothScroll({
    target: containerEl,
    scrollEase: 0.08,
    maxOffset: 500,
  });
}

function appendCircle(e, element, duration = 1.5) {
  const circle = document.createElement('div');
  circle.classList.add('circle');

  const circleOffset = 0.25 * document.body.getBoundingClientRect().width;
  let customCursorOffset = -(0.004 * document.body.getBoundingClientRect().width);
  if (isTouchDevice) customCursorOffset = 0;
  circle.style.left = `${e.pageX - circleOffset - customCursorOffset}px`;
  circle.style.top = `${e.pageY - circleOffset - customCursorOffset}px`;
  circle.style.animationDuration = `${duration}s`;

  element.appendChild(circle);
  setTimeout(() => removeElement(circle), duration * 1000);
}

function removeElement(el) {
  el.parentNode.removeChild(el);
}

function playAudio(audio, volume = 1) {
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}