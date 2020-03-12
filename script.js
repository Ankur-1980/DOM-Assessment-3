const toggleColor = document.querySelector('#toggle-color');
toggleColor.addEventListener('click', function() {
	document.body.classList.toggle('light-coral');
});

let number = 1;
const addBox = document.querySelector('#add-box');
let boxes = () => {
	const box = document.createElement('div');

	box.setAttribute('class', 'box');
	box.setAttribute('title', "I'm a box");
	box.innerHTML = number++;
	document.body.appendChild(box);
	box.addEventListener('click', function(e) {
		e.target.remove();
	});
};

addBox.addEventListener('click', boxes);
