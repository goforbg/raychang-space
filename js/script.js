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
		this.inputCompanyEl = document.querySelector('.input-company');
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
				title: 'Ghibli Gallery App',
				subtitle: 'Remaster Studio Ghibli\'s Work Album with Vue 3.0',
				cover:'https://cdn.dribbble.com/users/3800131/screenshots/14489502/media/e740658dea07f7e82afa9e88d4dd880a.png',
				info: 'https://github.com/rayc2045/ghibli-gallery',
				link: 'https://rayc2045.github.io/ghibli-gallery/'
			},
			{
				title: 'Horizontal Scrolling Theater',
				subtitle: 'Enjoy the movie purchasing',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/11028118/media/8ba2db964d4f882bd59e50050cb09c46.png',
				info:'https://github.com/rayc2045/horizontal-scrolling-theater',
				link: 'https://rayc2045.github.io/horizontal-scrolling-theater/'
			},
			{
				title: 'Block Memory Game',
				subtitle: 'How many levels can you accomplish?',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/10000193/media/5a5acc6684a86a5f46a9b4cd34f4df8e.gif',
				info: 'https://github.com/rayc2045/block-memory-game',
				link: 'https://rayc2045.github.io/block-memory-game/'
			},
			{
				title: 'Vanilla Calculator',
				subtitle: 'Elegantly shows the result immediately',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6901484/_____2019-08-02___4.01.34.png',
				info: 'https://github.com/rayc2045/vanilla-calculator',
				link: 'https://rayc2045.github.io/vanilla-calculator/'
			},
			{
				title: 'Draggable To-do List',
				subtitle: 'Featured by autosave and markdown support',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/14655703/media/f45bd7c734c9acc23572c989a9703ef4.png',
				info: 'https://github.com/rayc2045/draggable-todoList',
				link: 'https://rayc2045.github.io/draggable-todoList/'
			},
			{
				title: 'Medium Blog',
				subtitle: 'Read my latest technical article',
				cover: 'https://raw.githubusercontent.com/rayc2045/raychang-space/master/img/medium-logo-transparent.png',
				link: 'https://medium.com/@raychangdesign/'
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
				<a href="${this.works[i].link}" target="_blank" rel="noreferrer noopener">
          <img src="${this.works[i].cover}" alt="${this.works[i].title}" loading="lazy">
        </a>
        <section>
          <div class="number">${this.addZeroToNumberUnderTen(this.works.length - i)}</div>
          <div class="title">${this.works[i].title}</div>
          <div class="subtitle">${this.works[i].subtitle}${this.works[i].info ? ` (<a class="info" href="${this.works[i].info}" target="_blank" rel="noreferrer noopener">info</a>)` : ''}</div>
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

		setTimeout(() => {
			const receiver = 'rayc2045@gmail.com';
			location.target = '_top';
			location.href = `mailto:${receiver}?subject=${this.inputSubjectEl.value}&body=${this.textareaMessageEl.value}`;
		}, 800)
	}

	checkForm() {
		this.inputNameEl.value = this.removeTag(this.inputNameEl.value);
		this.inputCompanyEl.value = this.removeTag(this.inputCompanyEl.value);
		this.inputEmailEl.value = this.removeTag(this.inputEmailEl.value);
		this.inputSubjectEl.value = this.removeTag(this.inputSubjectEl.value);
		this.textareaMessageEl.value = this.removeTag(this.textareaMessageEl.value);

		const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!this.inputNameEl.value) {
			this.isValidated = false;
			this.alertAnimate(this.inputNameEl.parentNode);
		}
		if (!this.inputEmailEl.value.match(emailFormat)) {
			this.isValidated = false;
			this.alertAnimate(this.inputEmailEl.parentNode);
		}
		if (!this.inputSubjectEl.value) {
			this.isValidated = false;
			this.alertAnimate(this.inputSubjectEl.parentNode);
		}
		if (!this.textareaMessageEl.value) {
			this.isValidated = false;
			this.alertAnimate(this.titleMessageEl);
			this.alertAnimate(this.textareaMessageEl.parentNode);
		}
	}

	alertAnimate(el) {
		if (el.classList.contains('alert')) return;
		el.classList.add('alert');
		setTimeout(() => el.classList.remove('alert'), 1000);
	}

	removeTag(text) {
		return String(text)
			.trim()
			.replace(/%3C/gi, '')
			.replace(/(<([^>]+)>)/gi, '');
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