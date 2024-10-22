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


// EJ 10


// EJ 11


// EJ 12


// EJ 13


// EJ 14


// EJ 15


// EJ 16


// EJ 17


// EJ 18


// EJ 19
