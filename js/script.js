'use strict';

class Portfolio {
	constructor() {
		this.worksEl = document.querySelector('.works');
		this.works = [
			{
				title: 'Ray Chang Space',
				subtitle: '100% Respondsive Portfolio Website',
				cover: ''
			},
			{
				title: 'Horizontal Scrolling Theater with Vue.js',
				subtitle: '',
				cover: ''
			},
			{
				title: 'Let’s Make A Linktree Clone',
				subtitle: 'a new, refined vertion',
				cover: ''
			},
			{
				title: 'Vue.js Find Card Game',
				subtitle: '',
				cover: ''
			},
			{
				title: 'Vue.js Coffee Menu Editor',
				subtitle: '',
				cover: ''
			},
			{
				title: 'Vanilla JS Block Memory Game',
				subtitle: '',
				cover: ''
			},
			{
				title: 'Elegant Vanilla JS Calculator',
				subtitle: 'which shows the result immediately',
				cover: ''
			},
			{
				title: 'JavaScript Click Game',
				subtitle: 'How many times can you click in a minute?',
				cover: ''
			},
			{
				title: 'Draggable LocalStorage To-do List',
				subtitle: '',
				cover: ''
			},
			{
				title: 'Day/Night Transition Postcard',
				subtitle: 'with CSS Keyfram Animation',
				cover: ''
			},
			{
				title: 'Responsive Project Management Web Page',
				subtitle: 'with CSS Grid & Flexbox',
				cover: ''
			},
			{
				title: 'Apple Magic Keyboard',
				subtitle: 'with CSS Grid & Flexbox',
				cover: ''
			},
			{
				title: 'Where Is My Cake!?',
				subtitle: 'CSS Hover, Active Animation',
				cover: ''
			},
			{
				title: 'Interactive Cake',
				subtitle: 'with animate.css',
				cover: ''
			}
		];
		this.events();
	}

	events() {
		document.onselectstart = () => {
			return false;
		};
		document.ondragstart = () => {
			return false;
		};
		document.oncontextmenu = () => {
			return false;
		};

		window.onload = () => {
			this.updateWorks();
		};
	}

	updateWorks() {
		for (let i = 0; i < this.works.length; i++) {
			const workEl = document.createElement('work');

			workEl.innerHTML = `
      <article class="work">
        <img src="${this.works[i].cover}" alt="${this.works[i].title}">
        <section>
          <div class="title">${this.works[i].title}</div>
          <div class="subtitle">${this.works[i].subtitle}</div>
          <div class="number">${this.works.length - i}</div>
        </section>
      </article>`;

			this.worksEl.appendChild(workEl);
		}
	}
}

let portfolio = new Portfolio();
