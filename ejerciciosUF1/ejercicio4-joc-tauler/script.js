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
    pregunta: "¿Qué equipo ha ganado más títulos de la Premier League desde su creación en 1992?",
    respuesta: ["Chelsea", "Manchester City", "Manchester United", "Liverpool"],
    correcta: 2
  },
  {
    pregunta: "¿Quién es el máximo goleador en la historia de la Premier League?",
    respuesta: ["Thierry Henry", "Sergio Agüero", "Wayne Rooney", "Alan Shearer"],
    correcta: 3
  },
  {
    pregunta: "¿En qué equipo jugaba Cristiano Ronaldo antes de unirse al Real Madrid en 2009?",
    respuesta: ["Manchester United", "Juventus", "Sporting de Lisboa", "PSG"],
    correcta: 0
  },
  {
    pregunta: "¿Quién ganó el Balón de Oro en 2007, rompiendo la racha de Messi y Cristiano Ronaldo?",
    respuesta: ["Zinedine Zidane", "Ronaldinho", "Kaká", "Andriy Shevchenko"],
    correcta: 2
  },
  {
    pregunta: "¿Qué equipo italiano ha ganado más títulos de la Serie A?",
    respuesta: ["AC Milan", "Inter de Milán", "Juventus", "Roma"],
    correcta: 2
  },
  {
    pregunta: "¿Qué equipo inglés ganó la Champions League por primera vez en 2012?",
    respuesta: ["Manchester United", "Arsenal", "Liverpool", "Chelsea"],
    correcta: 3
  },
  {
    pregunta: "¿Quién es el máximo goleador histórico de la Serie A?",
    respuesta: ["Francesco Totti", "Silvio Piola", "Gunnar Nordahl", "Alessandro Del Piero"],
    correcta: 1
  },
  {
    pregunta: "¿Qué club ha ganado más títulos de La Liga?",
    respuesta: ["FC Barcelona", "Atlético de Madrid", "Real Madrid", "Valencia"],
    correcta: 2
  },
  {
    pregunta: "¿En qué año ganó Inglaterra su única Copa del Mundo?",
    respuesta: ["1966", "1970", "1986", "1990"],
    correcta: 0
  },
  {
    pregunta: "¿Qué jugador ha ganado el mayor número de títulos de la Champions League?",
    respuesta: ["Cristiano Ronaldo", "Paolo Maldini", "Lionel Messi", "Francisco Gento"],
    correcta: 3
  },
  {
    pregunta: "¿Qué equipo fue conocido como los 'Invincibles' en la Premier League por no perder ningún partido en la temporada 2003-04?",
    respuesta: ["Manchester United", "Arsenal", "Liverpool", "Chelsea"],
    correcta: 1
  },
  {
    pregunta: "¿Qué equipo ganó la primera edición de la UEFA Champions League en 1992-93?",
    respuesta: ["AC Milan", "Barcelona", "Olympique de Marsella", "Ajax"],
    correcta: 2
  },
  {
    pregunta: "¿Quién es el jugador con más partidos jugados en la historia de La Liga?",
    respuesta: ["Xavi Hernández", "Iker Casillas", "Andoni Zubizarreta", "Raúl González"],
    correcta: 2
  },
  {
    pregunta: "¿En qué equipo jugaba Diego Maradona cuando ganó la Serie A en 1987?",
    respuesta: ["AC Milan", "Napoli", "Juventus", "Inter de Milán"],
    correcta: 1
  },
  {
    pregunta: "¿Qué equipo ganó la Premier League en 2016, sorprendiendo al mundo del fútbol?",
    respuesta: ["Leicester City", "Tottenham Hotspur", "Manchester City", "Everton"],
    correcta: 0
  },
  {
    pregunta: "¿Qué entrenador ha ganado más títulos de la Premier League?",
    respuesta: ["Pep Guardiola", "Arsène Wenger", "José Mourinho", "Sir Alex Ferguson"],
    correcta: 3
  },
  {
    pregunta: "¿En qué año debutó Lionel Messi con el primer equipo del FC Barcelona?",
    respuesta: ["2003", "2004", "2005", "2006"],
    correcta: 0
  },
  {
    pregunta: "¿Qué equipo español ganó la Europa League tres veces consecutivas entre 2014 y 2016?",
    respuesta: ["Villarreal", "Atlético de Madrid", "Valencia", "Sevilla"],
    correcta: 3
  },
  {
    pregunta: "¿Cuál es el club más exitoso en la historia de la Serie A italiana?",
    respuesta: ["Juventus", "AC Milan", "Inter de Milán", "Roma"],
    correcta: 0
  },
  {
    pregunta: "¿Qué jugador es apodado 'El Fenómeno' y jugó para Barcelona, Inter de Milán y Real Madrid?",
    respuesta: ["Rivaldo", "Romário", "Ronaldo Nazário", "Ronaldinho"],
    correcta: 2
  },
  {
    pregunta: "¿Qué selección ganó la Copa Mundial de la FIFA en 2018?",
    respuesta: ["Brasil", "Alemania", "Francia", "Argentina"],
    correcta: 2
  },
  {
    pregunta: "¿Qué jugador argentino fue el máximo goleador de la Serie A en múltiples temporadas durante los años 90?",
    respuesta: ["Gabriel Batistuta", "Diego Maradona", "Hernán Crespo", "Juan Sebastián Verón"],
    correcta: 0
  },
  {
    pregunta: "¿Qué equipo ganó la Liga Española en la temporada 2020-2021?",
    respuesta: ["Real Madrid", "FC Barcelona", "Atlético de Madrid", "Sevilla"],
    correcta: 2
  },
  {
    pregunta: "¿Qué portero tiene el récord de más partidos sin recibir goles en la Premier League?",
    respuesta: ["Edwin van der Sar", "David de Gea", "Petr Čech", "Alisson Becker"],
    correcta: 2
  },
  {
    pregunta: "¿Qué jugador fue transferido del Borussia Dortmund al Manchester United en 2021?",
    respuesta: ["Erling Haaland", "Jadon Sancho", "Robert Lewandowski", "Pierre-Emerick Aubameyang"],
    correcta: 1
  },
  {
    pregunta: "¿En qué año se celebró la primera edición de la Copa Mundial de la FIFA?",
    respuesta: ["1930", "1946", "1950", "1966"],
    correcta: 0
  },
  {
    pregunta: "¿Qué jugador ganó el Balón de Oro en 2021?",
    respuesta: ["Robert Lewandowski", "Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé"],
    correcta: 1
  },
  {
    pregunta: "¿Qué selección ha ganado más Copas del Mundo de la FIFA?",
    respuesta: ["Alemania", "Argentina", "Italia", "Brasil"],
    correcta: 3
  },
  {
    pregunta: "¿Qué equipo ganó la Serie A en la temporada 2020-2021, rompiendo la racha de títulos de Juventus?",
    respuesta: ["AC Milan", "Inter de Milán", "Roma", "Atalanta"],
    correcta: 1
  },
  {
    pregunta: "¿Qué jugador inglés es el máximo goleador de la historia del Tottenham Hotspur?",
    respuesta: ["Harry Kane", "Gary Lineker", "Teddy Sheringham", "Dele Alli"],
    correcta: 0
  }
];

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



