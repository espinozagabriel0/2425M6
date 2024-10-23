const boton1 = document.querySelector('button#boton1');
const boton2 = document.querySelector('button#boton2');
const boton3 = document.querySelector('button#boton3');

// EJ 1
boton1.addEventListener('click', function() {
    console.log("Hola!")
});
boton2.addEventListener('click', function() {
    console.log("Muy buenas!")
});
boton3.addEventListener('click', function() {
    console.log("Noo!")
});

// EJ 2
const div2 = document.querySelector('div#miDiv');
const btnCanviarCon = document.querySelector('button#boton');
btnCanviarCon.addEventListener('click', function() {
    div2.innerHTML = "Has cambiado el contenido!";
})

// EJ 3
const div3 = document.querySelector('div#miDiv2');
const btnToggle = document.querySelector('button#toggleButton');
btnToggle.addEventListener('click', function() {
    div3.classList.toggle("displayElement");
});

// EJ 4
const spanRandom = document.querySelector('span#resultatSpan');
const botonRand = document.querySelector('button#botonRandom');

botonRand.addEventListener('click', function() {
    let numRandom = Math.floor(Math.random() * 100) + 1;
    spanRandom.innerHTML = numRandom;
})


// EJ 5
const img5 = document.querySelector('img#imatge');
const btnImg5 = document.querySelector('button#canviarImatge');
btnImg5.addEventListener('click', function() {
   img5.setAttribute('src', 'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?semt=ais_hybrid');
});

// EJ 6
const div6 = document.querySelector('div#miElement6');
const btnToggle6 = document.querySelector('button#toggleClass6')
btnToggle6.addEventListener('click', function() {
    div6.classList.toggle('actiu');
})

// EJ 7
const listaFrutas = document.querySelector('ul#fruitList');
let frutas = ['Naranaja', 'Manzana', 'Kiwi', 'Plátano', 'Melocotón'];

frutasLista = '';
frutas.forEach(fruta => {
    frutasLista += `<li>${fruta}</li>`
});
listaFrutas.innerHTML = frutasLista;

// EJ 8
let preguntasRespuestas = [
    ["Máximo ganador del balón de oro:", "Messi"], 
    ["Jugador mas joven en debutar en el barça", "Lamine Yamal"], 
    ["País más grande del mundo", "Rúsia"], 
    /*...*/
];
const pregunta = document.querySelector('div#pregunta');
const respuesta = document.querySelector('div#resposta');
pregunta.innerHTML = preguntasRespuestas[0][0];
respuesta.innerHTML = preguntasRespuestas[0][1];

// EJ 9
const divResultado = document.querySelector('div#resultatSuma');
const btnSuma = document.querySelector('button#botonSuma');
btnSuma.addEventListener('click', function () {
    divResultado.innerHTML = sumar(3, 5);
});

function sumar(num1, num2){
    return num1 + num2;
}
// EJ 10
const inputEntrada = document.querySelector('input#entrada');
const btnValidar = document.querySelector('button#botonValidar');
const divValidar = document.querySelector('div#divValidar');

btnValidar.addEventListener('click', function() {
    (inputEntrada.value.trim() === "") ? divValidar.innerHTML = "Introduce un valor correcto" : divValidar.innerHTML = "";
});
// EJ 11

const btnAlert = document.querySelector('button#botonAlerta');
btnAlert.addEventListener('click', function() {
    alert("Has clickat el botó!");
});


// EJ 12
const btnComparar = document.querySelector('button#botonComparar');
btnComparar.addEventListener('click', function() {
    comparar(10)
});

function comparar(n1) {
    if (n1 == 10) {
        alert("Es igual a 10");
    }else if (n1 < 10) {
        alert("Es menor a 10");
    }else{
        alert("Es mayor a 10");
    }
}
// EJ 13
const img13 = document.querySelector('img#imatge13');
const resultat13 = document.querySelector('div#resultat13')
const btnMostrarSrc = document.querySelector('button#mostrarSrc');

btnMostrarSrc.addEventListener('click', function() {
    resultat13.innerHTML = img13.getAttribute('src');
});

// EJ 14
const img14 = document.querySelector('img#imatge14');
const btnEliminarAlt= document.querySelector('button#eliminarAlt');

btnEliminarAlt.addEventListener('click', function() {
    img14.removeAttribute('alt');
});
// EJ 15
let numeros = [2, 5, 3, 7, 140, 11, 1, 6];
const result15 = document.querySelector('div#resultat15'); 

let numerosFiltrados = '';
numeros.forEach(num => {
    if (num % 2 == 0) {
        numerosFiltrados += `<p>${num}</p>`;
    }
});
result15.innerHTML = numerosFiltrados;

// EXCERCICIS JAVASCRIPT (MATH)

// EJ 1
function valorAbsolut(num) {
    return Math.abs(num);
}
// EJ 2
function determinarSigne(num) {
    const signe = Math.sign(num);
    if (signe === 1) return "El número és positiu.";
    if (signe === -1) return "El número és negatiu.";
    return "El número és zero.";
}
// EJ 3
function trobarMaxim(a, b, c) {
    return Math.max(a, b, c);
}
// EJ 4
let numerosSpread = [3, 7, 2, 9, 4];
function trobarMinim(arrayNumeros) {
    return Math.min(...arrayNumeros);
}
console.log(trobarMinim(numerosSpread)); // Retorna 2

// EJ 5
function calcularArrelQuadrada(num) {
    if (num < 0) return "No es pot calcular l'arrel quadrada d'un número negatiu.";
    return Math.sqrt(num);
}
console.log(calcularArrelQuadrada(16)); // Retorna 4
console.log(calcularArrelQuadrada(-9)); // Retorna "No es pot calcular l'arrel quadrada d'un número negatiu."

// EJ 6
function arrodonirNumero(num) {
    return Math.round(num);
}

// Exemple d'ús:
console.log(arrodonirNumero(4.6)); // Retorna 5
console.log(arrodonirNumero(4.3)); // Retorna 4

// EJ 7
function arrodonirCapAmunt(num) {
    return Math.ceil(num);
}

// Exemple d'ús:
console.log(arrodonirCapAmunt(3.1)); // Retorna 4
console.log(arrodonirCapAmunt(7.9)); // Retorna 8

// EJ 8

function arrodonirCapAvall(num) {
    return Math.floor(num);
}

console.log(arrodonirCapAvall(5.8)); // Retorna 5
console.log(arrodonirCapAvall(2.2)); // Retorna 2
// EJ 9

function truncarNumero(num) {
    return Math.trunc(num);
}
console.log(truncarNumero(6.7));   // Retorna 6
console.log(truncarNumero(-6.7));  // Retorna -6
// EJ 10

function calcularSinus(angleGraus) {
    const angleRadians = angleGraus * (Math.PI / 180);
    return Math.sin(angleRadians);
}
console.log(calcularSinus(30)); // Retorna 0.5
console.log(calcularSinus(90)); // Retorna 1

// Excercicis JS Strings

//EJ 1
function interpolarVariables(nom, edat) {
    return `El meu nom és ${nom} i tinc ${edat} anys.`;
}
console.log(interpolarVariables("Joan", 25)); // Retorna "El meu nom és Joan i tinc 25 anys."
//EJ 2
function obtenirCaracter(cadena, posicio) {
    return cadena.charAt(posicio);
}
console.log(obtenirCaracter("Hola", 1)); // Retorna "o"
//EJ 3
function trobarPosicio(cadena, subcadena) {
    return cadena.indexOf(subcadena);
}
console.log(trobarPosicio("JavaScript és genial", "genial")); // Retorna 14
//EJ 4
function repetirCadena(cadena, vegades) {
    return cadena.repeat(vegades);
}
console.log(repetirCadena("Hola", 3)); // Retorna "HolaHolaHola"
//EJ 5
function obtenirSubstring(cadena, inici, fi) {
    return cadena.substring(inici, fi);
}
console.log(obtenirSubstring("JavaScript", 0, 4)); // Retorna "Java"
//EJ 6
function obtenirSubstr(cadena, inici, longitud) {
    return cadena.substr(inici, longitud);
}
console.log(obtenirSubstr("JavaScript", 4, 6)); // Retorna "Script"
//EJ 7
function dividirCadena(cadena, separador) {
    return cadena.split(separador);
}
console.log(dividirCadena("poma,pera,plàtan", ",")); // Retorna ["poma", "pera", "plàtan"]
//EJ 8
function comencaAmb(cadena, subcadena) {
    return cadena.startsWith(subcadena);
}
console.log(comencaAmb("JavaScript", "Java")); // Retorna true
//EJ 9
function acabaAmb(cadena, subcadena) {
    return cadena.endsWith(subcadena);
}
console.log(acabaAmb("JavaScript", "Script")); // Retorna true
//EJ 10
function contéSubcadena(cadena, subcadena) {
    return cadena.includes(subcadena);
}
console.log(contéSubcadena("JavaScript és genial", "genial")); // Retorna true
//EJ 11
function cercarCadena(cadena, subcadena) {
    return cadena.search(subcadena);
}
console.log(cercarCadena("JavaScript és genial", "genial")); // Retorna 14
//EJ 12
function buscarCoincidencies(cadena, patró) {
    return cadena.match(patró);
}
console.log(buscarCoincidencies("Hola 123, adéu 456", /\d+/g)); // Retorna ["123", "456"]

//EJ 13
function substituirCadena(cadena, vellSubcadena, nouSubcadena) {
    return cadena.replace(vellSubcadena, nouSubcadena);
}
console.log(substituirCadena("Hola món", "món", "JavaScript")); // Retorna "Hola JavaScript"
//EJ 14
function substituirTotes(cadena, vellSubcadena, nouSubcadena) {
    return cadena.replaceAll(vellSubcadena, nouSubcadena);
}
console.log(substituirTotes("Hola món, món", "món", "JavaScript")); // Retorna "Hola JavaScript, JavaScript"

//EJ 15
function convertirMinuscules(cadena) {
    return cadena.toLowerCase();
}
console.log(convertirMinuscules("Hola Món")); // Retorna "hola món"

//EJ 16
function convertirMajuscules(cadena) {
    return cadena.toUpperCase();
}
console.log(convertirMajuscules("Hola Món")); // Retorna "HOLA MÓN"

//EJ 17
function eliminarEspaisInicials(cadena) {
    return cadena.trimStart();
}
console.log(eliminarEspaisInicials("   Hola Món")); // Retorna "Hola Món"

//EJ 18
function eliminarEspaisFinals(cadena) {
    return cadena.trimEnd();
}
console.log(eliminarEspaisFinals("Hola Món   ")); // Retorna "Hola Món"

//EJ 19
function eliminarEspaisExtrems(cadena) {
    return cadena.trim();
}
console.log(eliminarEspaisExtrems("   Hola Món   ")); // Retorna "Hola Món"