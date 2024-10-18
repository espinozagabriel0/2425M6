console.log("tablero cargado")

/* TODO:
    1. Inicialmente las dos fichas estarán en la casilla inicial.
    2. Cada jugador tendrá un botón (dado) que, al ser clicado, generará un número aleatorio que podrá valer entre 1 y 6. A continuación la ficha se moverá tantas casillas como indique el dado.
    3. Si una ficha cae en la posición de su compañera, esta volverá a la casilla de salida.
    4. Si una ficha llega al final se acaba la partida
    5. Deben respetarse las reglas del tablero como: saltar a otras casillas, regresar a la casilla de inicio, saltar turnos, etc.
    6. Cuando un jugador cae en las casillas que no tienen normas, (simplemente número) deben responder a una pregunta aleatoria (hay que reutilizar la práctica anterior). Si no aciertan la pregunta retroceden una casilla.
*/

const tablero = document.querySelector('div.container-tablero');
const coordX = document.querySelector('span#coordX');
const coordY = document.querySelector('span#coordY');
const dado1 = document.querySelector('button.boton1');
const dado2 = document.querySelector('button.boton2');
const msjPartida = document.querySelector('#mensajePartida');


//FICHAS de los jugadores
const ficha1 = document.querySelector('.ficha1');
const ficha2 = document.querySelector('.ficha2');

const reload = document.querySelector('button#reload');



//dados jugadores (simplemente para visualizar que numero se genera al tirar al dado)
const txtDado1 = document.querySelector('span#dado1Mostrar');
const txtDado2 = document.querySelector('span#dado2Mostrar');

//div de las preguntas quiz
const preguntasQuiz = document.querySelector('div.coordinates');
const tituloPregunta = document.querySelector('h2#question')
const btnSiguientePregunta = document.querySelector('button#next-question')
const resultadoError = document.querySelector('#result')


//variables globales
let posActualFicha1 = 0;
let posActualFicha2 = 0;

const posiciones = [
    {x: "180", y: "517"},
    {x: "177", y: "440"},
    {x: "196", y: "363"},
    {x: "213", y: "298"},
    {x: "222", y: "225"}, // --> posicion 5: se pierde un turno
    {x: "230", y: "150"}, // 1, 6
    {x: "314", y: "145"}, // --> posicion 7: avanzar a la siguiente estrella
    {x: "395", y: "145"},
    {x: "466", y: "145"},
    {x: "536", y: "145"},
    {x: "613", y: "145"}, // --> posicion 11: estrella
    {x: "693", y: "145"}, // 6, 12 --> pos 12: volver a casilla 0
    {x: "695", y: "226"},
    {x: "711", y: "308"}, // --> pos 14: ir a casilla 29
    {x: "724", y: "399"},
    {x: "730", y: "496"}, // 12, 16
    {x: "625", y: "496"},
    {x: "516", y: "496"}, // --> pos 18: se pierde 1 turno
    {x: "418", y: "496"},  
    {x: "318", y: "496"}, // 16, 20
    {x: "288", y: "428"},
    {x: "295", y: "337"}, 
    {x: "300", y: "227"},
    {x: "380", y: "227"}, // 20, 23
    {x: "452", y: "227"},
    {x: "534", y: "227"},
    {x: "610", y: "227"},
    {x: "610", y: "286"}, // 23, 27
    {x: "610", y: "341"},
    {x: "610", y: "405"}, // pos 30 (se puede llegar desde pos 14)
    {x: "534", y: "405"}, // 27, 30
    {x: "452", y: "405"},
    {x: "380", y: "405"},
    {x: "380", y: "318"}, //  30, 33
    {x: "462", y: "318"}, // 33, 34
    {x: "534", y: "318"}, //34, 36
];

document.addEventListener('DOMContentLoaded', function() {
    start();
});

console.log(tablero.getBoundingClientRect());

//Función que situe las fichas en la posicion inicial
reload.addEventListener('click', start);
function start(){
    ficha1.style.top = posiciones[0].y + 'px';
    ficha1.style.left = posiciones[0].x + 'px';
    ficha2.style.top = posiciones[0].y + 'px';
    ficha2.style.left = posiciones[0].x + 'px';
    posActualFicha1 = 0;
    posActualFicha2 = 0;
    // txtDado1.innerHTML = '';
    // txtDado2.innerHTML = '';
    console.clear();
    preguntasQuiz.style.display = "none";
}

//DADO 1er JUGADOR
dado1.addEventListener('click', function() {
    //TODO: GENERAR NUMERO ALEATORIO Y MOVER TANTAS POSICIONES COMO EL NUMERO DEL DADO INDIQUE
    let numPosiciones = Math.floor(Math.random() * 6) + 1;
    console.log('numero generado J1: ', numPosiciones);
    // txtDado1.innerHTML = numPosiciones;

    moverFicha(ficha1, numPosiciones, posActualFicha1);
    console.log(posActualFicha1);
    // comprobarCasilla(ficha1, posActualFicha1 + 1);
});

// DADO 2o JUGADOR
dado2.addEventListener('click', function() {
    //TODO: GENERAR NUMERO ALEATORIO Y MOVER TANTAS POSICIONES COMO EL NUMERO DEL DADO INDIQUE
    let numPosiciones = Math.floor(Math.random() * 6) + 1;
    console.log('numero generado J2: ', numPosiciones);
    // txtDado2.innerHTML = numPosiciones;

    moverFicha(ficha2, numPosiciones, posActualFicha2);
    console.log(posActualFicha2);
    // comprobarCasilla(ficha2, posActualFicha2 + 1);
});

function moverFicha(ficha, numPosiciones, posActual) {
    console.log('posiciones a mover: ', numPosiciones);
    console.log("---------------------");
  
    let i = posActual;
    let casillaFinal = numPosiciones + posActual;

    if (casillaFinal > 36) {
        casillaFinal = 36;
        console.log("te has pasado!");
    }

    let casilla = '';
    if (ficha == ficha1) {
        posActualFicha1 += numPosiciones;
        casilla = posActualFicha1;    
    }else{
        posActualFicha2 += numPosiciones;
        casilla = posActualFicha2;
    }

    function mover() {        
        if (i <= casillaFinal) {
            ficha.style.top = posiciones[i].y + 'px';
            ficha.style.left = posiciones[i].x + 'px';
            
            i++;
            setTimeout(mover, 300);
        }else{
            comprobarCasilla(ficha, casilla+1);
        }
    }
    console.log('pos actual J1: ', posActualFicha1 + 1);
    console.log('pos actual J2: ', posActualFicha2 + 1);    
    
    // console.log(casilla)
    mover();
}

// TODO: FUNCION QUE COMPRUEBA LA CASILLA EN LA QUE ESTA EL JUGADOR, Y HACE LAS ACCIONES CORRESPONDIENTES
function comprobarCasilla(ficha, casilla) {
    dado1.removeAttribute('disabled');
    dado2.removeAttribute('disabled');
    
    switch (casilla) {
        case 2: 
            alert("avanzas a la casilla 21");
            ficha.style.top = posiciones[20].y + 'px';
            ficha.style.left = posiciones[20].x + 'px';
            (ficha == ficha1) ?  posActualFicha1=21 : posActualFicha2=21;
            break;
        case 5: // pierde un turno
            alert("pierdes un turno");
            //deshabilitar el boton una vez
            (ficha == ficha1) ? dado1.setAttribute('disabled', true) : dado2.setAttribute('disabled', true);
            break;
        case 7: // avanza a posicion 11
            alert('avanzas a la estrella 11');
            console.log('asdf')
            ficha.style.top = posiciones[10].y + 'px';
            ficha.style.left = posiciones[10].x + 'px';
            // cambiar el valor de posicion actual de la ficha desplazada
            (ficha == ficha1) ? posActualFicha1=10 : posActualFicha2=10;
            break;
        case 12: //vuelve a la posicion inicial
            alert("vuelves al principio")
            ficha.style.top = posiciones[0].y + 'px';
            ficha.style.left = posiciones[0].x + 'px';
            (ficha == ficha1) ? posActualFicha1=0: posActualFicha2=0;
            break;
        case 14:
            alert('suerte');
            ficha.style.top = posiciones[28].y + 'px';
            ficha.style.left = posiciones[28].x + 'px';
            (ficha == ficha1) ? posActualFicha1=29: posActualFicha2=29;
            break;
        case 18:
            alert('pierdes un turno');
            (ficha == ficha1) ? dado1.setAttribute('disabled', true) : dado2.setAttribute('disabled', true);
            break;
        case 22:
            alert('avanzas 2 casillas');
            ficha.style.top = posiciones[casilla+2].y + 'px';
            ficha.style.left = posiciones[casilla+2].x + 'px';
            (ficha == ficha1) ? posActualFicha1+=2: posActualFicha2+=2;
            break;
        case 25:
            alert('mala suerte');
            ficha.style.top = posiciones[8].y + 'px';
            ficha.style.left = posiciones[8].x + 'px';
            (ficha == ficha1) ? posActualFicha1=9: posActualFicha2=9;
            break;
        case 30:
            alert('vuelves a casilla 27');
            ficha.style.top = posiciones[26].y + 'px';
            ficha.style.left = posiciones[26].x + 'px';
            (ficha == ficha1) ? posActualFicha1=27: posActualFicha2=27;
            break;
        case 31:
            alert('tira otra vez');
            break;
        case 33: 
            alert('vuelves a casilla 20');
            ficha.style.top = posiciones[19].y + 'px';
            ficha.style.left = posiciones[19].x + 'px';
            (ficha == ficha1) ? posActualFicha1=20: posActualFicha2=20;
            break;
        default:
            // mostrar pregunta
            cargarPreguntaAleatoria(ficha, casilla);
            preguntasQuiz.style.display = "block";
    }
}




// PREGUNTAS para las casillas sin acciones concretas


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


let preguntaCargada;
cargarPreguntaAleatoria()

//FUNCION GENERAR PREGUNTA ALEATORIA
function cargarPreguntaAleatoria(ficha, posActual) {
    //Cargar pregunta aleatoria del arreglo
    resultadoError.style.display = "none";
    const randomNumber = Math.floor(Math.random()*preguntas.length);
    console.log('Numero random generado:', randomNumber);

    //Objeto de la pregunta cargada
    preguntaCargada = preguntas[randomNumber];

    // Titulo cargado
    let tituloCargado = preguntaCargada.pregunta;
    tituloPregunta.innerHTML = tituloCargado;

    //Cargamos los botones
    let botonesRespuestas = '';
    for (let i = 0; i < preguntaCargada.respuesta.length; i++) {
        botonesRespuestas += 
        `
        <button class="btn btn-primary" id="answer${i+1}">${preguntaCargada.respuesta[i]}</button>
        `
    }
    document.querySelector('#answers').innerHTML = botonesRespuestas;
    respuestaEscogida(ficha, posActual);
}
function respuestaEscogida(ficha, posActual) {
    let opcionEscogida = document.querySelectorAll('button.btn-primary') ;
    let numRespuestaCorrecta = preguntaCargada.correcta;
    console.log('La respuesta correcta es: ', numRespuestaCorrecta);

    for (let i = 0; i < opcionEscogida.length; i++) {
        opcionEscogida[i].addEventListener('click', function() {

            if (opcionEscogida[i].innerHTML == preguntaCargada.respuesta[numRespuestaCorrecta]) {
                console.log(`La respuesta ${opcionEscogida[i].innerHTML} es correcta!`);
                opcionEscogida[i].classList.add('bg-success');
                resultadoError.style.display = "none";
                alert("Bien!");
            }else{
                resultadoError.innerHTML = `Incorrecto, la respuesta correcta es: ${preguntaCargada.respuesta[numRespuestaCorrecta]}`; 
                resultadoError.style.display = "block";
                console.log(`La respuesta ${opcionEscogida[i].innerHTML} no es correcta!`);

                alert("Pierdes una posicion!");
                ficha.style.top = posiciones[posActual-2].y + "px";
                ficha.style.left = posiciones[posActual-2].x + "px";
                (ficha == ficha1) ? posActualFicha1--: posActualFicha2--;
            }

            preguntasQuiz.style.display = 'none';
                
        });
    }
}
