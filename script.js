//your JS code here. If required.
let button = document.getElementById("button");
button.addEventListener("click", () => {
	let slide = document.getElementById("colorSelect");
	let color = slide.value.toLowerCase();

	let element = document.getElementById(color);
	slide.removeChild(element);	
})