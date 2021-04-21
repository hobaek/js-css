function scrollAppear() {
	let introText = document.querySelector('.intro-text');
	let introPosition = introText.getBoundingClientRect().top;
	let screenPosition = window.innerHeight / 2;

	if (introPosition < screenPosition) {
		introText.classList.add('intro-appear');
	}
}

window.addEventListener('scroll', scrollAppear);
