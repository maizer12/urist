const body = document.querySelector('body')
$(function () {
	$('.services-accordion').accordion({
		collapsible: true,
		active: 0,
	})
})
//items open detail
const allItemsSer = document.querySelector('.services__items')

allItemsSer?.addEventListener('click', e => {
	const elem = e.target
	const open = elem.classList.contains('services-item__btn')
	const close = elem.classList.contains('services-detail__close')
	if (open) {
		const item = elem.parentNode.parentNode
		item.classList.toggle('services-item-open-det')
	}
	if (close) {
		const item = elem.parentNode.parentNode.parentNode.parentNode
		console.log(item)
		item.classList.toggle('services-item-open-det')
	}
})

//map
const mapImg = document.querySelector('.map-img')

mapImg?.addEventListener('mouseover', e => {
	const elem = e.target.dataset.piece
	const element = document.querySelector('[data-text="' + elem + '"]')
	const active = document.querySelector('.active-path-text')
	if (active) {
		active.classList.remove('active-path-text')
	}
	element.classList.add('active-path-text')
})
//slice
function updateSliderInfoAndSum(swiper) {
	var totalSlides = swiper.slides.length - 1; 
	var activeSlideIndex = swiper.activeIndex + 1; 
	var sliderInfo = "" + activeSlideIndex + "/" + totalSlides; 
	var sliderSumElement = document.querySelector('.triumphs-slider__sum');
	if (sliderSumElement) {
			sliderSumElement.textContent = sliderInfo; 
	}
}

var newSwipe = new Swiper('.triumphs-items-swiper', {
	navigation: {
			nextEl: '.triumphs-slider__next',
			prevEl: '.triumphs-slider__prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		670: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		750: {
			slidesPerView: 2,
			spaceBetween: 60,
		},
		980: {
			slidesPerView: 1,
			spaceBetween: 101,
		},
		1500: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	},
});

newSwipe.on('slideChange', function () {
	updateSliderInfoAndSum(newSwipe); // Оновлюємо інформацію про активний слайд при зміні слайда
});

updateSliderInfoAndSum(newSwipe); // Викликаємо функцію для почат

//slider-blog
var swiper = new Swiper('.blog-slider__swiper', {
	navigation: {
		nextEl: '.swiper-blog-next',
		prevEl: '.swiper-blog-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		670: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		750: {
			slidesPerView: 2,
			spaceBetween: 60,
		},
		980: {
			slidesPerView: 2,
			spaceBetween: 101,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 41,
		},
	},
	on: {
		init: function () {
			updateSlideInfo.call(this)
		},
		slideChange: function () {
			updateSlideInfo.call(this)
		},
	},
})

function updateSlideInfo() {
	var activeSlideIndex = this.activeIndex + 1 // Индекс текущего слайда (начиная с 0)
	var totalSlides = this.slides.length // Общее количество слайдов
	var numbersElement = document.querySelector('.blog-slider__numbers')
	numbersElement.textContent = activeSlideIndex + '/' + totalSlides
}

//burg
function switchBody(newClass, also) {
	const body = document.querySelector('body')
	if (body.classList.contains('open')) {
		body.classList = ''
		if (also) {
			body.classList.add(newClass)
			body.classList.add('open')
		}
	} else {
		if (newClass) {
			body.classList.add(newClass)
			body.classList.add('open')
		}
	}
}
function getElem(e, classCheck) {
	const elem = e.target
	if (elem.classList.contains(classCheck)) {
		return elem
	}
}
const btnBurg = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')
const tellBtn = document.querySelector('.header-tell')
const closePopup = document.querySelector('.popup__close')
const openPopup = document.querySelectorAll('.open-form-all')
const popupHome = document.querySelector('.popup')


openPopup?.forEach(e =>{
	e.addEventListener('click', () => {
		console.log(13)
		body.classList.toggle('popup-open')
	})
})



btnBurg?.addEventListener('click', () => {
	switchBody('menu-open')
})

menu?.addEventListener('click', e => {
	const elem = getElem(e, 'menu')
	if (elem) {
		switchBody('menu-open')
	}
})

tellBtn.addEventListener('click', () => {
	switchBody('header-contacts-open', true)
})

popupHome?.addEventListener('click', (e) => {
	if(getElem(e, 'popup')){
		body.classList.toggle('popup-open')
	}
})
closePopup?.addEventListener('click', () => {
	body.classList.toggle('popup-open')
})
//lang
function handleResize() {
	var screenWidth = $(window).width()

	if (screenWidth < 590) {
		var languageElement = $('.language')
		var menuListElement = $('.menu__list')

		languageElement.detach().appendTo(menuListElement)
	}
}

$(window).on('resize', handleResize)
$(document).ready(handleResize)
//select
var phoInput = document.querySelector("#phone");
if(phoInput){
	var phoNum = window.intlTelInput(phoInput, {
		hiddenInput: "full",
		placeholderNumberType: "MOBILE",
		preferredCountries: ["ua", "sa", "eg", "ae", "us"],
		separateDialCode: true,
		showFlags: true,
		utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
	});
	
	$("form").submit(function() {
		var full_number = phoNum.getNumber(intlTelInputUtils.numberFormat.E164);
		$("input[name='page_contact_phone[full]'").val(full_number);
		alert(full_number);
	});
}




