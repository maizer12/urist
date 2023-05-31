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