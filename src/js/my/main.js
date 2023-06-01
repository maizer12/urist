$(function() {
	$(".services-accordion").accordion({
		'collapsible': true,
		'active': 0
	});
});
//items open detail
const allItemsSer = document.querySelector('.services__items')


allItemsSer?.addEventListener('click', (e)=>{
	const elem = e.target
	const open = elem.classList.contains('services-item__btn')
	const close = elem.classList.contains('services-detail__close')
	if(open){
		const item = elem.parentNode.parentNode
		item.classList.toggle('services-item-open-det')
	}
	if(close){
		const item = elem.parentNode.parentNode.parentNode.parentNode
		console.log(item)
		item.classList.toggle('services-item-open-det')
	}
})

//map
const mapImg = document.querySelector('.map-img')

mapImg?.addEventListener('mouseover', (e)=>{
	const elem = e.target.dataset.piece
	const element = document.querySelector('[data-text="'+ elem +'"]');
	const active = document.querySelector('.active-path-text')
	if(active){
		active.classList.remove('active-path-text')
	}
	element.classList.add('active-path-text')
})

//slider one
$(document).ready(function(){
  var slider = $('.triumphs-slider__items');

  slider.slick({
    // Опції слайдера Slick тут
    dots: true,
    prevArrow: $('.triumphs-slider__prev'),
    nextArrow: $('.triumphs-slider__next'),
    appendDots: $('.triumphs-slider__sum')
  });

  var slideCount = slider.slick('getSlick').slideCount;
  var currentSlide = slider.slick('slickCurrentSlide') + 1;

  updateSlideCount(slideCount, currentSlide);

  slider.on('afterChange', function(event, slick, currentSlide){
    var currentSlideNumber = currentSlide + 1;
    updateSlideCount(slideCount, currentSlideNumber);
  });

  function updateSlideCount(totalSlides, currentSlideNumber) {
    if (currentSlideNumber) {
      $('.triumphs-slider__sum').text(formatSlideNumber(currentSlideNumber) + ' / ' + formatSlideNumber(totalSlides));
    } else {
      $('.triumphs-slider__sum').text(formatSlideNumber(totalSlides));
    }
  }

  function formatSlideNumber(number) {
    return number.toString();
  }
});

