const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
document.querySelector('.menu-icon').addEventListener('click', function() {
	document.querySelector('nav').classList.toggle('show');
});
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});