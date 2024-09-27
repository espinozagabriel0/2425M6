console.log("Quiz cargado correctamente.")

const tituloPregunta = document.querySelector('h2#question')
const btnSiguientePregunta = document.querySelector('button#next-question')
const resultadoError = document.querySelector('#result')

const preguntas = [
    {
      pregunta: "¿Cuál es el planeta más cercano al Sol?",
      respuesta: ["Tierra", "Marte", "Venus", "Mercurio"],
      correcta: 3
    },
    {
      pregunta: "¿Qué órgano del cuerpo humano es responsable de bombear sangre?",
      respuesta: ["Pulmones", "Hígado", "Corazón", "Riñones"],
      correcta: 2
    },
    {
      pregunta: "¿Cuál es la capital de Francia?",
      respuesta: ["Roma", "Berlín", "Madrid", "París"],
      correcta: 3
    },
    {
      pregunta: "¿Quién escribió 'Cien años de soledad'?",
      respuesta: ["Jorge Luis Borges", "Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda"],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es el metal más liviano?",
      respuesta: ["Plata", "Aluminio", "Hierro", "Litio"],
      correcta: 3
    },
    {
      pregunta: "¿Qué país tiene el Monte Everest en su territorio?",
      respuesta: ["China", "India", "Nepal", "Bután"],
      correcta: 2
    },
    {
      pregunta: "¿Cuál es el océano más grande del mundo?",
      respuesta: ["Atlántico", "Pacífico", "Índico", "Ártico"],
      correcta: 1
    },
    {
      pregunta: "¿Qué gas es esencial para la respiración humana?",
      respuesta: ["Nitrógeno", "Dióxido de carbono", "Oxígeno", "Helio"],
      correcta: 2
    },
    {
      pregunta: "¿Cuál es el país más grande del mundo?",
      respuesta: ["Estados Unidos", "China", "Rusia", "Canadá"],
      correcta: 2
    },
    {
      pregunta: "¿En qué año ocurrió la Revolución Francesa?",
      respuesta: ["1789", "1776", "1815", "1492"],
      correcta: 0
    },
    {
      pregunta: "¿Cuál es el animal terrestre más rápido?",
      respuesta: ["León", "Tigre", "Guepardo", "Elefante"],
      correcta: 2
    },
    {
      pregunta: "¿Quién pintó la Mona Lisa?",
      respuesta: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es la fórmula química del agua?",
      respuesta: ["H2O", "CO2", "O2", "NaCl"],
      correcta: 0
    },
    {
      pregunta: "¿Qué continente tiene la mayor cantidad de países?",
      respuesta: ["Asia", "África", "Europa", "América del Sur"],
      correcta: 1
    },
    {
      pregunta: "¿Cuántos lados tiene un hexágono?",
      respuesta: ["Cinco", "Seis", "Siete", "Ocho"],
      correcta: 1
    }
]
console.log(preguntas)

let preguntaCargada;
cargarPreguntaAleatoria()

function cargarPreguntaAleatoria() {
    //Cargar pregunta aleatoria del arreglo
    resultadoError.style.display = "none"
    const randomNumber = Math.floor(Math.random()*preguntas.length)
    console.log('Numero random generado:', randomNumber)

    //Objeto de la pregunta cargada
    preguntaCargada = preguntas[randomNumber]

    // Titulo cargado
    let tituloCargado = preguntaCargada.pregunta
    tituloPregunta.innerHTML = tituloCargado

    //Cargamos los botones
    let botonesRespuestas = ''
    for (let i = 0; i < preguntaCargada.respuesta.length; i++) {
        botonesRespuestas += 
        `
        <button class="btn btn-primary" id="answer${i+1}">${preguntaCargada.respuesta[i]}</button>
        `
    }
    document.querySelector('#answers').innerHTML = botonesRespuestas
    respuestaEscogida()
}

//TODO: FUNCION QUE MUESTRE SI EL USUARIO HA ESCOGIDO LA RESPUESTA CORRECTA O NO
function respuestaEscogida() {
  let opcionEscogida = document.querySelectorAll('button.btn-primary') 
  let numRespuestaCorrecta = preguntaCargada.correcta
  console.log('La respuesta correcta es: ', numRespuestaCorrecta)

  for (let i = 0; i < opcionEscogida.length; i++) {
      opcionEscogida[i].addEventListener('click', function() {

          if (opcionEscogida[i].innerHTML == preguntaCargada.respuesta[numRespuestaCorrecta]) {
              console.log(`La respuesta ${opcionEscogida[i].innerHTML} es correcta!`)  
              opcionEscogida[i].classList.add('bg-success')
              resultadoError.style.display = "none"
          }else{
              resultadoError.innerHTML = `Incorrecto, la respuesta correcta es: ${preguntaCargada.respuesta[numRespuestaCorrecta]}` 
              resultadoError.style.display = "block"
              console.log(`La respuesta ${opcionEscogida[i].innerHTML} no es correcta!`)
          }
      })
  }
}

//Boton cargar siguiente pregunta
btnSiguientePregunta.addEventListener('click', function () {
  cargarPreguntaAleatoria()
})
