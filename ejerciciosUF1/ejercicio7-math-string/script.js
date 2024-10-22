// Ejercicio 1
const minNum = document.querySelector('input#num1');
const maxNum = document.querySelector('input#num2');
const btnEnviar = document.querySelector('#ej1Btn');
const numGenerado = document.querySelector('#numeroAleatorio')

// Ejercicio 2
const textArea = document.querySelector('textarea#texto');
const btnMayus = document.querySelector('#convMayus');
const btnMinus = document.querySelector('#convMinus');
const contadorPalabras = document.querySelector('strong#contadorPalab');

const btnBuscar = document.querySelector('#buscarPalab');
const buscarInput = document.querySelector('input#buscarInput');
const textoABuscar = document.querySelector('div#textoBuscador');


// Ejercicio 3
const nombreInput = document.querySelector('input#nomInputEj3');
const fechaInput = document.querySelector('input#fechaInputEj3');
const btnConvNom = document.querySelector('button#btnConvNom');
const btnConvFecha = document.querySelector('button#btnConvFecha');
const nomConvResult = document.querySelector('strong#nomConvResult');
const fechaConvResult = document.querySelector('strong#nomConvResult');

// Ejercicio 4

// Ej 1
function generarRandom(numInicial, numFinal) {
    return Math.floor(Math.random() * (numFinal - numInicial + 1)) + numInicial;
}
    

btnEnviar.addEventListener('click', function() {
    try {
        if (parseInt(maxNum.value.trim()) < parseInt(minNum.value.trim())) {
            throw "El numero final no puede ser menor al inicial.";
        }
        if (maxNum.value.trim() == "" || minNum.value.trim() == "") {
            throw "Los campos no pueden estar vacíos.";
        }
        if (isNaN(maxNum.value.trim()) || isNaN(minNum.value.trim())){
            throw "Introduce dígitos.";
        }
        numGenerado.innerHTML = generarRandom(parseInt(minNum.value), parseInt(maxNum.value));
    
    } catch (error) {
        numGenerado.innerHTML = `Error: ${error}`;
        console.log('Error:', error);
    }
});

// Ej 2
textArea.addEventListener('input', function() {
    //Contador palabras
    let texto = textArea.value;
    let numeroPalabras = texto.split(" ").length;
    contadorPalabras.innerHTML = numeroPalabras - 1;
});

btnMayus.addEventListener('click', function() {
    let texto = textArea.value;
    textArea.value = texto.toUpperCase();
});

btnMinus.addEventListener('click', function() {
    let texto = textArea.value;
    textArea.value = texto.toLowerCase();
});

// Buscar palabra
btnBuscar.addEventListener('click', function() {
    let texto = buscarInput.value.trim();
    let txtBuscar = texto.split(" ");
    // console.log(txt);
    let txt = textoABuscar.split(" ");

    //Buscar texto 
    for (let i = 0; i < txt.length; i++) {
      
    }
});



// Ej 3
btnConvNom.addEventListener('click', function() {
    let resultado = (nombreInput.value.replace(" ", "-")).toUpperCase();

    //Convertir string a formato: s-s (sin espacios)
    nomConvResult.innerHTML = resultado;
});

btnConvFecha.addEventListener('click', function() {
    
});



/*

metodos utiles:

includes, match, split, indexOf....
padEnd --> añadir el final con text hasta llegar al tamaño size
*/







