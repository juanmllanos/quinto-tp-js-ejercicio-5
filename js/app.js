const $botonIniciar = document.querySelector('#iniciar');
const $botonPausar = document.querySelector('#pausar');
const $botonReiniciar = document.querySelector('#reiniciar');
const $cronometro = document.querySelector('#cronometro');

let centesimas = 0;
let segundos = 0;
let minutos = 0;

let pausar;

function mostrarCronometro() {
	$cronometro.innerText = `${minutos < 10 ? '0' + minutos : minutos} : ${segundos < 10 ? '0' + segundos : segundos} : ${centesimas < 10 ? '0' + centesimas : centesimas}`
};

function conteo() {
	if (centesimas === 99) {
		centesimas = 0;
		sumarSegundos();
	} else {
		centesimas++;
	};

	mostrarCronometro();
	$botonIniciar.innerText = `Pausar`;
};

function sumarSegundos() {
	if (segundos === 59) {
		segundos = 0;
		sumarMinutos();
	} else {
		segundos++;
	};
};

function sumarMinutos() {
	if (minutos < 99) {
		minutos++;
	} else {
		alert('Tiempo Maximo superado!')
		clearInterval(pausar);
	}
};

$botonIniciar.onclick = function () {
	if ($botonIniciar.innerText === 'Iniciar' || $botonIniciar.innerText === 'Reanudar') {
		conteo();
		pausar = setInterval(conteo, 10);
	} else if ($botonIniciar.innerText === 'Pausar') {
		clearInterval(pausar);
		$botonIniciar.innerText = `Reanudar`
	};
};

$botonReiniciar.onclick = function() {
	clearInterval(pausar);
	minutos = 0;
	segundos = 0;
	centesimas = 0;
	mostrarCronometro();
	$botonIniciar.innerText = `Iniciar`
};

mostrarCronometro();