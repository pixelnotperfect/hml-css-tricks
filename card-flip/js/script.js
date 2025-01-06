"use strict"

document.querySelector('.card').addEventListener('click', () => {
	const cardContainer = document.querySelector('.card__container');
	cardContainer.classList.toggle('is-flipped'); 
});
