'use strict';

class Portfolio {
	constructor() {
		this.worksEl = document.querySelector('.works');
		this.works = [
			{
				title: 'Ray Chang Space',
				subtitle: '100% Respondsive Portfolio Website',
				cover: '',
				destination: 'https://raychang2017.github.io/raychang-space/'
			},
			{
				title: 'Horizontal Scrolling Theater with Vue.js',
				subtitle: '',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/11028118/media/8ba2db964d4f882bd59e50050cb09c46.png',
				destination: 'https://raychang2017.github.io/horizontal-scrolling-theater/'
			},
			{
				title: 'Let’s Make A Linktree Clone',
				subtitle: 'a new, refined vertion',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/10724954/media/529252d97de31baf1548bd817ad6bc1a.png',
				destination: 'https://raychang2017.github.io/linktree-clone/'
			},
			{
				title: 'Vue.js Find Card Game',
				subtitle: '',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/8192733/media/af0a6f22cb41c347f1c78de1e92b2c3e.png',
				destination: 'https://codepen.io/raychang2017/full/XWWEvKj'
			},
			{
				title: 'Vue.js Coffee Menu Editor',
				subtitle: '',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/7101781/media/cbab08496ca35c2f443aa01bbd0d4d31.png',
				destination: 'https://codepen.io/raychang2017/full/MWgOMEL'
			},
			{
				title: 'Vanilla JS Block Memory Game',
				subtitle: 'How many levels can you achieve',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/10000193/media/5a5acc6684a86a5f46a9b4cd34f4df8e.gif',
				destination: 'https://codepen.io/raychang2017/full/eYNmMZe'
			},
			{
				title: 'Elegant Vanilla JS Calculator',
				subtitle: 'which shows the result immediately',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6901484/_____2019-08-02___4.01.34.png',
				destination: 'https://codepen.io/raychang2017/full/jgLppK'
			},
			{
				title: 'JavaScript Click Game',
				subtitle: 'How many times can you click in a minute?',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6827214/_____2019-07-21___5.25.09.png',
				destination: 'https://codepen.io/raychang2017/full/EqjXJN'
			},
			{
				title: 'Draggable To-do List',
				subtitle: 'And LocalStorage Of Course',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6757018/_____2019-07-09___11.03.44.png',
				destination: 'https://raychang2017.github.io/draggable-localStorage-todoList/'
			},
			{
				title: 'Day/Night Transition Postcard',
				subtitle: 'with CSS Keyfram Animation',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6754986/_____2019-07-05___2.28.36.gif',
				destination: 'https://codepen.io/raychang2017/full/EBGaZQ'
			},
			{
				title: 'Responsive Project Management Web Page',
				subtitle: 'with CSS Grid & Flexbox',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736854/_____2019-07-05___2.16.23.png',
				destination: 'https://codepen.io/raychang2017/full/rEoNzx'
			},
			{
				title: 'Apple Magic Keyboard',
				subtitle: 'with CSS Grid & Flexbox',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736810/_____2019-07-05___2.06.35.png',
				destination: 'https://codepen.io/raychang2017/full/ZdVzmZ'
			},
			{
				title: 'Where Is My Cake!?',
				subtitle: 'CSS Hover, Active Animation',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736735/_____2019-07-05___5.34.58.gif',
				destination: 'https://codepen.io/raychang2017/full/VJqZeY'
			},
			{
				title: 'Interactive Cake',
				subtitle: 'with animate.css',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736602/_____2019-07-05___1.51.04.gif',
				destination: 'https://codepen.io/raychang2017/full/ZdmgMr'
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
        <a href="${this.works[i].destination}" target="_blank">
          <img src="${this.works[i].cover}" alt="${this.works[i].title}">
        </a>
        <section>
          <div class="number">${this.addZeroToNumberUnderTen(this.works.length - i)}</div>
          <div class="title">${this.works[i].title}</div>
          <div class="subtitle">${this.works[i].subtitle}</div>
        </section>
      </article>`;

			this.worksEl.appendChild(workEl);
		}
	}

	addZeroToNumberUnderTen(num) {
		return num < 10 ? '0' + num : num;
	}
}

let portfolio = new Portfolio();
