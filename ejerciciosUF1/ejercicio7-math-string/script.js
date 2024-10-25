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
const coincidenciasSpan = document.querySelector('strong#coincidenciasBuscar');

const resumen = document.querySelector('div#resumen');

// Ejercicio 3
const nombreInput = document.querySelector('input#nomInputEj3');
const fechaInput = document.querySelector('input#fechaInputEj3');
const btnConvNom = document.querySelector('button#btnConvNom');
const btnConvFecha = document.querySelector('button#btnConvFecha');
const nomConvResult = document.querySelector('strong#nomConvResult');
const fechaConvResult = document.querySelector('strong#fechaConvResult');

// Ejercicio 4
const passwd = document.querySelector("input#pass")
const btnGenerar = document.querySelector('button#generarPass')

//Ejercicio 5
const emojiDiv = document.querySelector('div#emoji');
const btnEmoji = document.querySelector('button#generarEmoji');


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
    // let txtBuscar = texto.split(" ");
    // console.log(txt);
    let encontrado = textoABuscar.textContent.match(texto);
    
    coincidenciasSpan.innerHTML = encontrado.length;
    console.log(encontrado.length);
    console.log(encontrado);
});

//resumen de parrafo
let resumenString = '';

let txtResumen = textoABuscar.textContent.split(" "); 
for (let i = 0; i < 10; i++) {
    resumenString = resumenString+" " + txtResumen[i];
}
resumenString += '...'
resumen.innerHTML = resumenString;


// Ej 3
btnConvNom.addEventListener('click', function() {
    let resultado = (nombreInput.value.replaceAll(" ", "-")).toUpperCase();

    //Convertir string a formato: s-s (sin espacios)
    nomConvResult.innerHTML = resultado;
});

btnConvFecha.addEventListener('click', function() {
    //TODO: VALIDAR FECHA Y FORMATEARLA
    const fecha = new Date(fechaInput.value.trim()).toLocaleDateString('en-US');
    fechaConvResult.innerHTML = fecha.replaceAll("/", "-");

});

// Ej 4
btnGenerar. addEventListener('click', function() {
    let posiblesValores = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arrPasswd = posiblesValores.split('');
    let passwdValue = '';

    for (let i = 0; i < 10; i++) {
        let posRandom = generarRandom(0, arrPasswd.length-1);
        passwdValue += arrPasswd[posRandom];
    }
    passwd.value = passwdValue;
});

// Ej 5

btnEmoji.addEventListener('click', function() {
    let emojisArray = ["&#x1F600;", "&#x1F601;", "&#x1F602;", "&#x1F923;", "&#x1F603;", "&#x1F604;", "&#x1F605;", "&#x1F913;", "&#x1F61C;", "&#x1F631;", "&#x1F480;", "&#x1F639;", "&#x1F648;", "&#x1F466;", "&#x1F482;", "	&#x1F473;", "&#x1F3FF;", "&#x1F3C3;", "&#x1F3FF;", "&#x1F3FD;", "&#x1F921;"];

    let emojiRandom = emojisArray[generarRandom(0, emojisArray.length-1)];
    emojiDiv.innerHTML = emojiRandom;

});

/*

metodos utiles:

includes, match, split, indexOf....
padEnd --> añadir el final con text hasta llegar al tamaño size
*/







