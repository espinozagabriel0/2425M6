console.log("Programa inicialitzat!")

const tituloPregunta = document.querySelector('h2#question')
const btnSiguientePregunta = document.querySelector('button#next-question')
const resultadoError = document.querySelector('#result')
const casellas = document.querySelectorAll('.div')

let posicioActual = 1
let encerts = 0
let errors = 0


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
    },
    {
    pregunta: "¿Cuál es el deporte que se juega con una pelota redonda y dos equipos de 11 jugadores?",
    respuesta: ["Baloncesto", "Fútbol", "Béisbol", "Rugby"],
    correcta: 1
    },
    {
    pregunta: "¿Cuál es el deporte olímpico en el que se utilizan raquetas y una red?",
    respuesta: ["Tenis", "Bádminton", "Ping-pong", "Squash"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan patines y un disco de goma?",
    respuesta: ["Hockey sobre hielo", "Patinaje artístico", "Curling", "Patinaje de velocidad"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan caballos?",
    respuesta: ["Polo", "Salto de obstáculos", "Carreras de caballos", "Doma clásica"],
    correcta: 2
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan raquetas y una pelota de fieltro?",
    respuesta: ["Tenis de mesa", "Bádminton", "Squash", "Pádel"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan esquíes y se desciende por una pista de nieve?",
    respuesta: ["Esquí alpino", "Snowboard", "Esquí de fondo", "Patinaje artístico"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan aros, pelotas y cintas?",
    respuesta: ["Gimnasia rítmica", "Gimnasia artística", "Natación sincronizada", "Patinaje artístico"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan bates y una pelota dura?",
    respuesta: ["Béisbol", "Sóftbol", "Críquet", "Tee ball"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan remos y se compite en embarcaciones?",
    respuesta: ["Remo", "Canotaje", "Piragüismo", "Vela"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan pelotas de cuero y se juega con las manos?",
    respuesta: ["Fútbol americano", "Rugby", "Fútbol gaélico", "Balonmano"],
    correcta: 2
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan raquetas y una pelota de goma?",
    respuesta: ["Tenis", "Bádminton", "Squash", "Pádel"],
    correcta: 3
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan patines y se compite en una pista ovalada?",
    respuesta: ["Patinaje de velocidad", "Hockey sobre patines", "Patinaje artístico", "Roller derby"],
    correcta: 3
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan arcos y flechas?",
    respuesta: ["Tiro con arco", "Esgrima", "Tiro al blanco", "Lanzamiento de jabalina"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan tablas y se practica en el mar?",
    respuesta: ["Surf", "Windsurf", "Kitesurf", "Bodyboard"],
    correcta: 0
    },
    {
    pregunta: "¿Cuál es el deporte en el que se utilizan pelotas de goma y se juega en una cancha cubierta?",
    respuesta: ["Baloncesto", "Voleibol", "Balonmano", "Squash"],
    correcta: 0
    }
]
console.log(preguntas)

console.log('Posició Actual: ',posicioActual)
console.log('Encerts: ',encerts)
console.log('Errors: ',errors)


let preguntaCargada;
cargarPreguntaAleatoria()

//FUNCION GENERAR PREGUNTA ALEATORIA
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
              mouJugador(true)
          }else{
              resultadoError.innerHTML = `Incorrecto, la respuesta correcta es: ${preguntaCargada.respuesta[numRespuestaCorrecta]}` 
              resultadoError.style.display = "block"
              console.log(`La respuesta ${opcionEscogida[i].innerHTML} no es correcta!`)
              mouJugador(false)
            }
      })
  }
}

//Boton cargar siguiente pregunta
btnSiguientePregunta.addEventListener('click', function () {
    cargarPreguntaAleatoria()
})

//FUNCION MOVER JUGADOR
function mouJugador(endavant) {
    if (endavant) {
        casellas[posicioActual].classList.add('div-point')
        casellas[posicioActual-1].classList.remove('div-point')
    
        posicioActual++
        encerts++
        console.log("Resposta Correcta! Nova posició: ", posicioActual)
        
    } else {
        casellas[posicioActual-1].classList.remove('div-point')
        errors++
        console.log("Resposta incorrecta! Nova posició ", posicioActual)
        if (posicioActual > 3) {
            posicioActual -= 3
        }else if (posicioActual >=2) {
            posicioActual--
        }
        casellas[posicioActual-1].classList.add('div-point')
    }
    console.log("Encerts: ", encerts)
    console.log("Errors: ", errors)   
    comprovaFinalJoc()
}
function comprovaFinalJoc() {
    if (posicioActual == 20) {
        console.log(`Has arribar a la casella 20! Encerts: ${encerts}, Errors: ${errors}`)
        btnSiguientePregunta.setAttribute('disabled', true)
    }
}



