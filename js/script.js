'use strict';

class Portfolio {
	constructor() {
		this.backgroundMusicEl = document.querySelector('.background-music');
		this.pagingSound = new Audio('https://raw.githubusercontent.com/rayc2045/raychang-space/master/audio/page.mp3');
		this.typingSound = new Audio('https://raw.githubusercontent.com/rayc2045/raychang-space/master/audio/type.mp3');
		this.loadingEl = document.querySelector('.loading');
		this.viewportEl = document.querySelector('.viewport');
		this.containerEl = document.querySelector('.container');
		this.contactButton = document.querySelector('.contact');
		this.contactEl = document.querySelector('#contact');
		this.toTopButton = document.querySelector('.toTop');
		this.dateEl = document.querySelector('.date');
		this.worksEl = document.querySelector('.works');
		this.formEl = document.querySelector('form');
		this.inputEls = document.querySelectorAll('input');
		this.textareaEls = document.querySelectorAll('textarea');
		this.inputNameEl = document.querySelector('.input-name');
		this.inputEmailEl = document.querySelector('.input-email');
		this.inputSubjectEl = document.querySelector('.input-subject');
		this.titleMessageEl = document.querySelector('.title-message');
		this.textareaMessageEl = document.querySelector('.textarea-message');
		this.sendButton = document.querySelector('.send');
		this.sayHelloEl = document.querySelector('.say-hello');
		this.appreciationEl = document.querySelector('.appreciation');
		this.footerEl = document.querySelector('footer');
		this.works = [
			{
				title: 'Ray Chang Space',
				subtitle: '2.5D Portfolio Website with Smooth-scrolling',
				cover:'https://cdn.dribbble.com/users/3800131/screenshots/11317150/media/08465ea718d17273f4800b2f490e65e7.png',
				github: 'https://github.com/rayc2045/raychang-space',
				destination: 'https://rayc2045.github.io/raychang-space/'
			},
			{
				title: 'Horizontal Scrolling Theater',
				subtitle: 'Enjoy the movie purchasing',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/11028118/media/8ba2db964d4f882bd59e50050cb09c46.png',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/13%20-%20%E7%94%A8%20Vue%20%E5%92%8C%20API%20%E5%81%9A%E4%B8%80%E5%80%8B%E6%A9%AB%E5%90%91%E6%8D%B2%E5%8B%95%E9%9B%BB%E5%BD%B1%E8%B3%BC%E7%89%A9%E9%A0%81%E9%9D%A2',
				destination: 'https://rayc2045.github.io/horizontal-scrolling-theater/'
			},
			{
				title: 'Ghibli Gallery App',
				subtitle: 'Remaster Ghibli Work Album',
				cover:'https://cdn.dribbble.com/users/3800131/screenshots/14489502/media/e740658dea07f7e82afa9e88d4dd880a.png',
				github: 'https://github.com/rayc2045/ghibli-gallery',
				destination: 'https://rayc2045.github.io/ghibli-gallery/'
			},
			{
				title: 'Block Memory Game',
				subtitle: 'How many levels can you accomplish?',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/10000193/media/5a5acc6684a86a5f46a9b4cd34f4df8e.gif',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/09%20-%20%E6%96%B9%E5%A1%8A%E8%A8%98%E6%86%B6%E9%81%8A%E6%88%B2%20%E2%80%93%20%E4%BD%A0%E8%83%BD%E7%8E%A9%E5%88%B0%E7%AC%AC%E5%B9%BE%E9%97%9C%EF%BC%9F',
				destination: 'https://codepen.io/rayc2045/full/eYNmMZe'
			},
			{
				title: 'Vanilla Calculator',
				subtitle: 'Elegantly shows the result immediately',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6901484/_____2019-08-02___4.01.34.png',
				github: 'https://github.com/rayc2045/f2e-portfolio/tree/master/08%20-%20%E5%81%9A%E4%B8%80%E5%80%8B%E5%84%AA%E9%9B%85%E7%9A%84%20Vanilla%20JS%20%E8%A8%88%E7%AE%97%E6%A9%9F%EF%BC%8C%E5%8D%B3%E6%99%82%E9%A1%AF%E7%A4%BA%E8%A8%88%E7%AE%97%E7%B5%90%E6%9E%9C',
				destination: 'https://rayc2045.github.io/vanilla-calculator/'
			},
			{
				title: 'Draggable To-do List',
				subtitle: 'Featured by autosave and markdown support',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/14655703/media/f45bd7c734c9acc23572c989a9703ef4.png',
				github: 'https://github.com/rayc2045/f2e-portfolio/tree/master/06%20-%20%E5%8F%AF%E6%8B%96%E6%8B%89%E4%BB%BB%E5%8B%99%E7%9A%84%20LocalStorage%20%E5%BE%85%E8%BE%A6%E4%BA%8B%E9%A0%85%E6%B8%85%E5%96%AE',
				destination: 'https://rayc2045.github.io/draggable-todoList/'
			},
			{
				title: 'Day/Night Transition Postcard',
				subtitle: 'Absolutely the modern way to share story',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6754986/_____2019-07-05___2.28.36.gif',
				github: 'https://github.com/rayc2045/f2e-portfolio/tree/master/05%20-%20%E5%AF%AB%E4%B8%80%E5%BC%B5%E5%8B%95%E6%85%8B%E6%98%8E%E4%BF%A1%E7%89%87%20%E2%80%93%20%E5%B8%8C%E8%87%98%E6%84%9B%E6%83%85%E6%B5%B7%20%E8%81%96%E6%89%98%E9%87%8C%E5%B0%BC%E5%B3%B6%E5%B0%8F%E7%99%BD%E6%88%BF',
				destination: 'https://codepen.io/rayc2045/full/EBGaZQ'
			},
			{
				title: 'Apple Magic Keyboard',
				subtitle: 'Made by pure codes of course',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736810/_____2019-07-05___2.06.35.png',
				github: 'https://github.com/rayc2045/f2e-portfolio/tree/master/03%20-%20%E4%BD%BF%E7%94%A8%20CSS%20Grid%20%E5%92%8C%20Flexbox%20%E6%89%8B%E5%88%BB%E4%B8%80%E5%80%8B%20Mac%20%E9%8D%B5%E7%9B%A4',
				destination: 'https://codepen.io/rayc2045/full/ZdVzmZ'
			},
			{
				title: 'Medium Blog',
				subtitle: 'Read my latest technical article',
				cover: 'https://raw.githubusercontent.com/rayc2045/raychang-space/master/img/medium-logo-transparent.png',
				destination: 'https://medium.com/@raychangdesign/'
			}
		];
		// this.workEls = document.querySelectorAll('.work');
		this.isTouchDevice = 'ontouchstart' in document.documentElement;
		this.bodyWidth = document.body.getBoundingClientRect().width;
		this.screenScale = this.bodyWidth / 1280;
		this.isValidated = false;
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

		this.preventScroll();
		this.updateDate();
		this.updateWorks();
		this.parallax();

		if (!this.isTouchDevice) {
			// document.onmousemove = e => this.antiMouseMove(e, this.nameEl, 80);
			this.activateHoverInteraction(this.worksEl, this.footerEl);
			this.smoothScroll();
		}
		
		document.onmouseup = e => {
			if (e.target.hasAttribute('href')) this.soundPlay(this.pagingSound);
		};

		this.containerEl.onmousedown = e => this.appendCircle(e);

		this.contactButton.onmouseup = () => {
			this.soundPlay(this.pagingSound);
			window.scrollTo(0, this.contactEl.getBoundingClientRect().top);
		};

		this.toTopButton.onmouseup = () => {
			this.soundPlay(this.pagingSound);
			window.scrollTo(0, 0);
		};

		this.formEl.onkeydown = () => this.soundPlay(this.typingSound, 0.65);

		this.textareaEls.forEach(el => {
			el.oninput = e => {this.autoExpand(e); this.resizeBodyHeight();};
			el.onkeyup = e => {this.autoExpand(e); this.resizeBodyHeight();};
			el.oncut = e => {this.autoExpand(e); this.resizeBodyHeight();};
			el.onpaste = e => {this.autoExpand(e); this.resizeBodyHeight();};
			el.onchange = e => {this.autoExpand(e); this.resizeBodyHeight();};
		});

		this.sendButton.onclick = e => {
			this.submitForm(e);
			this.resizeBodyHeight();
		};

		window.onscroll = () => this.putPackForm();

		window.onload = () => {
			this.resizeBodyHeight();
			this.endLoading();
			this.enableScroll();
			// this.backgroundMusicEl.play();
		};

		// window.onblur = () => this.backgroundMusicEl.pause();
		// window.onfocus = () => this.backgroundMusicEl.play();

		window.onresize = () => {
			this.resetParallax();
			setTimeout(() => this.resizeBodyHeight(), 500);
		};
	}

	soundPlay(audio, volume = 1) {
		audio.currentTime = 0;
		audio.volume = volume;
		audio.play();
	}

	appendCircle(e, duration = 1.5) {
		const circle = document.createElement('div');
		circle.classList.add('circle');

		const circleOffset = 0.25 * document.body.getBoundingClientRect().width;
		let customCursorOffset = -(0.004 * document.body.getBoundingClientRect().width);
		if (this.isTouchDevice) customCursorOffset = 0;
		circle.style.left = `${e.pageX - circleOffset - customCursorOffset}px`;
		circle.style.top = `${e.pageY - circleOffset - customCursorOffset}px`;
		circle.style.animationDuration = `${duration}s`;

		this.containerEl.appendChild(circle);
		setTimeout(() => this.removeElement(circle), duration * 1000);
	}

	removeElement(el) {
		el.parentNode.removeChild(el);
	}

	preventScroll() {
		document.body.style.overflow = 'hidden';
	}

	enableScroll() {
		document.body.style.overflow = '';
	}

	smoothScroll() {
		document.querySelector('.viewport').style.position = 'fixed';

		new SmoothScroll({
			target: this.containerEl,
			scrollEase: 0.08,
			maxOffset: 500
		});
	}

	// locomotiveScroll() {
	// 	new LocomotiveScroll({
	// 		el: this.containerEl,
	// 		smooth: true,
	// 	});
	// }

	resetParallax() {
		// Reset parameter
		this.bodyWidth = document.body.getBoundingClientRect().width;
		this.screenScale = this.bodyWidth / 1280;

		// Reset parallax
		ScrollTrigger.getAll().forEach(el => el.kill());
		this.parallax();
	}

	parallax() {
		// Best on 16:10 full screen (MacBook)
		this.gsapWithScrollTrigger('.circle-yellow', { y: 1200 * this.screenScale });
		this.gsapWithScrollTrigger('.circle-orange', { y: 2400 * this.screenScale });
		this.gsapWithScrollTrigger('.article-left', { y: 200 * this.screenScale });
		this.gsapWithScrollTrigger('.article-right', { y: 200 * this.screenScale });
		this.gsapWithScrollTrigger('.avatar', { y: -750 * this.screenScale });
		this.gsapWithScrollTrigger('.name', { y: -500 * this.screenScale });
		this.gsapWithScrollTrigger('.description', { y: -250 * this.screenScale });
	}

	gsapWithScrollTrigger(className, animation, scrub = 1) {
		ScrollTrigger.create({
			animation: gsap.to(className, animation),
			scrub
		});
	}

	// rellaxJS() {
	// 	this.parallaxElementSet(this.circleYellowEl, '-3');
	// 	this.parallaxElementSet(this.circleOrangeEl, '-6');
	// 	this.parallaxElementSet(this.articleLeftEl, '-1.5');
	// 	this.parallaxElementSet(this.articleRightEl, '-1.5');
	// 	let rellax = new Rellax('.rellax');
	// }

	// rellaxElementSet(el, rellaxSpeed) {
	// 	el.classList.add('rellax');
	// 	el.setAttribute('data-rellax-speed', rellaxSpeed);
	// }

	endLoading() {
		const delay = 500;
		setTimeout(() => this.loadingEl.classList.add('animated'), delay);
		setTimeout(() => this.removeElement(this.loadingEl), delay + 2000);
		// setTimeout(() => {
		// 	this.loadingEl.classList.add('hide');
		// 	this.loadingEl.classList.remove('animated');
		// }, delay + 2000);
	}

	updateDate() {
		const today = new Date();
		let date = `${this.convertNumToMonth(today.getMonth() + 1)} ${today.getDate()}, ${today.getFullYear()}`;
		this.dateEl.textContent = date;
	}

	convertNumToMonth(num) {
		return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][num - 1];
	}

	// antiMouseMove(e, el, max = 20) {
	// 	const x = e.clientX;
	// 	const y = e.clientY;
	// 	//console.log(x);
	// 	const winWidth = window.innerWidth;
	// 	const winHeight = window.innerHeight;
	// 	const halfWidth = winWidth / 2;
	// 	const halfHeight = winHeight / 2;
	// 	const rx = x - halfWidth;
	// 	const ry = y - halfHeight;

	// 	const dx = el.getBoundingClientRect().width / max * (rx / -halfWidth);
	// 	const dy = el.getBoundingClientRect().height / max * (ry / -halfHeight);

	// 	el.style['transform'] = el.style['-webkit-transform'] = `translate(${dx}px, ${dy}px)`;
	// }

	updateWorks() {
		for (const i in this.works) {
			const listEl = document.createElement('li');
			listEl.classList.add('work');

			listEl.innerHTML = `
				<a href="${this.works[i].destination}" target="_blank" rel="noreferrer noopener">
          <img src="${this.works[i].cover}" alt="${this.works[i].title}" loading="lazy">
        </a>
        <section>
          <div class="number">${this.addZeroToNumberUnderTen(this.works.length - i)}</div>
          <div class="title">${this.works[i].title}</div>
          <div class="subtitle">${this.works[i].subtitle}${this.works[i].github
				? ` (<a class="link" href="${this.works[i]
						.github}" target="_blank" rel="noreferrer noopener">info</a>)`
				: ''}</div>
				</section>`;

			this.worksEl.appendChild(listEl);
		}
	}

	addZeroToNumberUnderTen(num) {
		return num < 10 ? '0' + num : '' + num;
	}

	activateHoverInteraction(...els) {
		els.forEach((el) => el.classList.add('hover-interaction'));
	}

	autoExpand(e) {
		// console.log(e.target.scrollHeight);
		const offset = e.target.offsetHeight - e.target.clientHeight;
		e.target.style.height = 'auto';
		e.target.style.height = e.target.scrollHeight + offset + 'px';
	}

	resizeBodyHeight() {
		document.body.style.height = this.viewportEl.scrollHeight + 'px';
	}

	submitForm(e) {
		e.preventDefault();
		this.isValidated = true;
		this.checkForm();
		if (!this.isValidated) return false;
		this.emptyForm();
		this.hideForm();
		this.removeElement(document.querySelector('.circle')); // Stop the interactive effect when the form switching to appreciation block

		setTimeout(() => {
			const receiver = 'rayc2045@gmail.com';
			location.href = `mailto:${receiver}?subject=${this.inputSubjectEl.value}&body=${this.textareaMessageEl.value}`;
			// 製作網頁表單：https://medium.com/@AntheaLee/%E5%A6%82%E4%BD%95%E8%A3%BD%E4%BD%9C-%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91-%E7%B6%B2%E9%A0%81%E8%A1%A8%E5%96%AE-3df78756ec81
		}, 800)
	}

	checkForm() {
		// Check empty
		if (!this.inputNameEl.value.trim()) {
			this.alertAnimate(this.inputNameEl.parentNode);
			this.isValidated = false;
		}
		if (!this.inputEmailEl.value.trim()) {
			this.alertAnimate(this.inputEmailEl.parentNode);
			this.isValidated = false;
		}
		if (!this.inputSubjectEl.value.trim()) {
			this.alertAnimate(this.inputSubjectEl.parentNode);
			this.isValidated = false;
		}
		if (!this.textareaMessageEl.value.trim()) {
			this.alertAnimate(this.titleMessageEl);
			this.alertAnimate(this.textareaMessageEl.parentNode);
			this.isValidated = false;
		}
		// Check email format
		const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!this.inputEmailEl.value.trim().match(emailFormat)) {
			this.alertAnimate(this.inputEmailEl.parentNode);
			this.isValidated = false;
		}
	}

	alertAnimate(el) {
		if (el.classList.contains('alert')) return;
		el.classList.add('alert');
		setTimeout(() => el.classList.remove('alert'), 1000);
	}

	emptyForm() {
		this.inputEls.forEach((el) => {
			el.value = '';
		});

		this.textareaEls.forEach((el) => {
			el.style.height = 'auto';
			el.value = '';
		});
	}

	hideForm() {
		this.sayHelloEl.classList.add('hide');
		this.appreciationEl.classList.remove('hide');
	}

	putPackForm() {
		if (!this.sayHelloEl.classList.contains('hide')) return;
		if (!this.isInView(this.appreciationEl)) {
			this.sayHelloEl.classList.remove('hide');
			this.appreciationEl.classList.add('hide');
		}
	}

	isInView(el) {
		const elTop = ~(-el.getBoundingClientRect().top);
		const elBottom = ~(-el.getBoundingClientRect().bottom);
		return (elTop < window.innerHeight && elBottom >= 0);
		// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
	}

	// isFullyVisible(el) {
	// 	const elTop = ~(-el.getBoundingClientRect().top);
	// 	const elBottom = ~(-el.getBoundingClientRect().bottom);
	// 	return (elTop >= 0 && elBottom <= window.innerHeight);
	// }
}

new Portfolio();