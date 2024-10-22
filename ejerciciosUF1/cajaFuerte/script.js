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


// EJ 16


// EJ 17


// EJ 18


// EJ 19
