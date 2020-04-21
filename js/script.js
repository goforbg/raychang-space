'use strict';

class Portfolio {
	constructor() {
		this.loadingEl = document.querySelector('.loading');
		this.dateEl = document.querySelector('.date');
		this.worksEl = document.querySelector('.works');
		this.works = [
			// {
			// 	title: 'Ray Chang Space',
			// 	subtitle: '100% Respondsive Portfolio Website',
			// 	cover: '',
			// 	destination: 'https://raychang2017.github.io/raychang-space/'
			// },
			{
				title: 'Horizontal Scrolling Theater',
				subtitle: 'Built with Vue.js and GSAP',
				cover:
					'https://cdn.dribbble.com/users/3800131/screenshots/11028118/media/8ba2db964d4f882bd59e50050cb09c46.png',
				destination: 'https://raychang2017.github.io/horizontal-scrolling-theater/'
			},
			{
				title: 'Linktree Clone',
				subtitle: 'The only link I need on Instagram',
				cover:
					'https://cdn.dribbble.com/users/3800131/screenshots/10724954/media/529252d97de31baf1548bd817ad6bc1a.png',
				destination: 'https://raychang2017.github.io/linktree-clone/'
			},
			{
				title: '當我按下 Enter 之後的事 — HTTP、API 與非同步跨來源請求',
				subtitle: 'An Medium blog post',
				cover: 'https://raw.githubusercontent.com/raychang2017/raychang-space/master/img/medium-logo.png',
				destination: 'https://medium.com/@raychangdesign/%E7%95%B6%E6%88%91%E6%8C%89%E4%B8%8B-enter-%E4%B9%8B%E5%BE%8C%E7%9A%84%E4%BA%8B-http-api-%E8%88%87%E9%9D%9E%E5%90%8C%E6%AD%A5%E8%B7%A8%E4%BE%86%E6%BA%90%E8%AB%8B%E6%B1%82-13bcaa426bc0'
			},
			{
				title: 'Node.js 前後端分離與 NPM 套件管理',
				subtitle: 'An Medium blog post',
				cover: 'https://raw.githubusercontent.com/raychang2017/raychang-space/master/img/medium-logo.png',
				destination: 'https://medium.com/@raychangdesign/node-js-%E5%89%8D%E5%BE%8C%E7%AB%AF%E5%88%86%E9%9B%A2%E8%88%87-npm-%E5%A5%97%E4%BB%B6%E7%AE%A1%E7%90%86-4f39ba1c315a'
			},
			{
				title: 'Coffee Menu Editor',
				subtitle: 'Built with Vue.js',
				cover:
					'https://cdn.dribbble.com/users/3800131/screenshots/7101781/media/cbab08496ca35c2f443aa01bbd0d4d31.png',
				destination: 'https://codepen.io/raychang2017/full/MWgOMEL'
			},
			{
				title: 'Git 與 Github 是什麼？如何使用 Git？',
				subtitle: 'An Medium blog post',
				cover: 'https://raw.githubusercontent.com/raychang2017/raychang-space/master/img/medium-logo.png',
				destination: 'https://medium.com/@raychangdesign/git-%E8%88%87-github-%E6%98%AF%E4%BB%80%E9%BA%BC-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-git-fc61f3cd0948'
			},
			{
				title: 'JS Block Memory Game',
				subtitle: 'How many levels can you achieve?',
				cover:
					'https://cdn.dribbble.com/users/3800131/screenshots/10000193/media/5a5acc6684a86a5f46a9b4cd34f4df8e.gif',
				destination: 'https://codepen.io/raychang2017/full/eYNmMZe'
			},
			{
				title: '快速精通 JavaScript 的 this',
				subtitle: 'An Medium blog post',
				cover: 'https://raw.githubusercontent.com/raychang2017/raychang-space/master/img/medium-logo.png',
				destination: 'https://medium.com/@raychangdesign/%E5%BF%AB%E9%80%9F%E7%B2%BE%E9%80%9A-javascript-%E7%9A%84-this-3f707e0bf873'
			},
			{
				title: 'Elegant Vanilla JS Calculator',
				subtitle: 'Which shows the result immediately',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6901484/_____2019-08-02___4.01.34.png',
				destination: 'https://codepen.io/raychang2017/full/jgLppK'
			},
			{
				title: '搞懂網頁技術名詞：MVC、SPA、SSR、AMP 及 PWA',
				subtitle: 'An Medium blog post',
				cover: 'https://raw.githubusercontent.com/raychang2017/raychang-space/master/img/medium-logo.png',
				destination: 'https://medium.com/@raychangdesign/%E6%90%9E%E6%87%82%E7%B6%B2%E9%A0%81%E6%8A%80%E8%A1%93%E5%90%8D%E8%A9%9E-mvc-spa-ssr-amp-%E5%8F%8A-pwa-17adfd3d7f7c'
			},
			{
				title: 'JavaScript Click Game',
				subtitle: 'How many scores can you get?',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6827214/_____2019-07-21___5.25.09.png',
				destination: 'https://codepen.io/raychang2017/full/EqjXJN'
			},
			{
				title: 'Smoothly Draggable To-do List',
				subtitle: 'And automatically saved in LocalStorage',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6757018/_____2019-07-09___11.03.44.png',
				destination: 'https://raychang2017.github.io/draggable-localStorage-todoList/'
			},
			{
				title: 'JavaScript 簡介：ES6 以及更早之前的版本',
				subtitle: 'An Medium blog post',
				cover: 'https://raw.githubusercontent.com/raychang2017/raychang-space/master/img/medium-logo.png',
				destination: 'https://medium.com/@raychangdesign/javascript-%E7%B0%A1%E4%BB%8B-es6-%E4%BB%A5%E5%8F%8A%E6%9B%B4%E6%97%A9%E4%B9%8B%E5%89%8D%E7%9A%84%E7%89%88%E6%9C%AC-7c78e80248f9'
			},
			{
				title: 'Day/Night Transition Postcard',
				subtitle: 'Animated with CSS keyframes',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6754986/_____2019-07-05___2.28.36.gif',
				destination: 'https://codepen.io/raychang2017/full/EBGaZQ'
			},
			{
				title: 'RWD Project Management Page',
				subtitle: 'Displayed with CSS Grid & Flexbox',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736854/_____2019-07-05___2.16.23.png',
				destination: 'https://codepen.io/raychang2017/full/rEoNzx'
			},
			{
				title: 'Apple Magic Keyboard',
				subtitle: 'Built with pure codes of course',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736810/_____2019-07-05___2.06.35.png',
				destination: 'https://codepen.io/raychang2017/full/ZdVzmZ'
			},
			{
				title: 'Where Is My Cake!?',
				subtitle: 'Interacted with CSS animation',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736735/_____2019-07-05___5.34.58.gif',
				destination: 'https://codepen.io/raychang2017/full/VJqZeY'
			},
			{
				title: 'Interactive Chocolate Cake',
				subtitle: 'Made with animate.css',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736602/_____2019-07-05___1.51.04.gif',
				destination: 'https://codepen.io/raychang2017/full/ZdmgMr'
			}
		];
		// this.workEls = document.querySelectorAll('.work');
		this.isTouchDevice = false;
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

		this.updateDate();
		this.updateWorks();

		// DOM Tree load finished
		document.onload = () => {
			this.detectTouchDevice();
			if (this.isTouchDevice) this.cancelHoverInteraction();
		};

		// All HTML elements load finished
		window.onload = () => {
			// this.scrollToTop();

			setTimeout(() => {
				this.hideLoadingEl();
			}, 1000);
		};
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}

	hideLoadingEl() {
		this.loadingEl.classList.add('hide');
	}
	
	updateDate() {
		const today = new Date();
		const date = `${this.convertNumToMonth(today.getMonth() + 1)} ${today.getDate()}, ${today.getFullYear()}`;

		this.dateEl.textContent = date;
	}

	convertNumToMonth(num) {
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 
		'July', 'August', 'September', 'October', 'November', 'December'];

		return months[num - 1];
	}

	updateWorks() {
		for (let i = 0; i < this.works.length; i++) {
			const listEl = document.createElement('li');

			listEl.classList.add('work');
			listEl.innerHTML = `
				<a href="${this.works[i].destination}" target="_blank">
          <img src="${this.works[i].cover}" alt="${this.works[i].title}">
        </a>
        <section>
          <div class="number">${this.addZeroToNumberUnderTen(this.works.length - i)}</div>
          <div class="title">${this.works[i].title}</div>
          <div class="subtitle">${this.works[i].subtitle}</div>
        </section>`;

			this.worksEl.appendChild(listEl);
		}
	}

	addZeroToNumberUnderTen(num) {
		return num < 10 ? '0' + num : '' + num;
	}

	detectTouchDevice() {
		try {
			document.createEvent('TouchEvent');
			this.isTouchDevice = true;
		} catch (e) {
			this.isTouchDevice = false;
		}
	}

	cancelHoverInteraction() {
		this.worksEl.classList.add('no-hover-interaction');
	}
}

let portfolio = new Portfolio();
