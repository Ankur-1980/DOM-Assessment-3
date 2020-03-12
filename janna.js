// change color of the background
const toggle = document.getElementById('toggleButton');
// const body = document.querySelector('body').style
// toggle.addEventListener('click', () => {
// if(e.target.body.style.backgroundColor = "white") {
//     e.target.body.style.backgroundColor ='lightcoral';
// } else if(e.target.body.style.backgroundColor = "lightcoral"){
//     e.target.body.style.backgroundColor ='white'
//     }
// })
toggle.addEventListener('click', () => {
	// change to light coral
	document.body.style.backgroundColor = 'lightcoral';
	toggle.style.color = 'blue';
});
toggle.addEventListener('dblclick', () => {
	//double click will change it back to white
	document.body.style.backgroundColor = 'white';
	toggle.style.color = 'black';
});
// adding boxes to the page
const adding = document.getElementById('addBox');
adding.addEventListener('click', () => {
	const myBox = document.createElement('div');
	myBox.innerHTML = 'I am a box';
	myBox.style.width = '50px';
	myBox.style.height = '50px';
	myBox.style.backgroundColor = 'green';
	document.querySelector('box').appendChild(myBox);
});
