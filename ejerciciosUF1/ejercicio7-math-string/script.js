// Ejercicio 1
const minNum = document.querySelector('input#num1');
const maxNum = document.querySelector('input#num2');
const btnEnviar = document.querySelector('#ej1Btn');
const numGenerado = document.querySelector('#numeroAleatorio')

// Ejercicio 2
const textArea = document.querySelector('textarea#texto');
const btnMayus = document.querySelector('#convMayus');
const btnMinus = document.querySelector('#convMinus');
const contadorPalabras = document.querySelector('span#contadorPalab');

// Ejercicio 3

// Ejercicio 4

// Ej 1
function generarRandom(numInicial, numFinal) {
    return Math.floor(Math.random() * numFinal) + numInicial;
}

btnEnviar.addEventListener('click', function() {
    numGenerado.innerHTML = generarRandom(parseInt(minNum.value), parseInt(maxNum.value))
});


// Ej 2



