const carouselSlide = document.querySelector('.carousel-slide');
const carouselImgs = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;
const size = carouselImgs[1].clientWidth;

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

nextBtn.addEventListener('click', () => {
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter++;
	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});
prevBtn.addEventListener('click', () => {
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter--;
	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
	if (carouselImgs[counter].id === 'lastClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImgs.length - 2;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
	}
	if (carouselImgs[counter].id === 'firstClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImgs.length - counter;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
	}
});
