let controle = true;
const element = document.getElementById("galinha");

setInterval(function () {
	if (controle == true) {
		element.src = './img/galinha1.png';
		controle = false;
	} else {
		element.src = './img/galinha2.png';
		controle = true;
	}
}, 500);
