"use strict"
document.querySelectorAll('.custom-select').forEach(select => {
	const trigger = select.querySelector('.custom-select__trigger span');
	const options = select.querySelectorAll('.custom-select__option');

	// Відкриття/закриття списку
	select.querySelector('.custom-select__trigger').addEventListener('click', () => {
		select.classList.toggle('open');
	});

	// Вибір опції
	options.forEach(option => {
		option.addEventListener('click', () => {
			// Оновлення тексту тригера
			trigger.textContent = `Sort by: ${option.textContent.trim()}`;
			// Закриття списку
			select.classList.remove('open');
		});
	});

	// Закриття списку при кліку за межами
	document.addEventListener('click', (e) => {
		if (!select.contains(e.target)) {
			select.classList.remove('open');
		}
	});
});
