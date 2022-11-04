console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img').addEventListener('mouseover', () => {
	alert('This is a compliment to whomever selected this fine photo of the rubber duck')
})