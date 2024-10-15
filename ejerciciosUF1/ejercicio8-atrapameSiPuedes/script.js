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
const dado1 = document.querySelector('div.boton1');
const dado2 = document.querySelector('div.boton2');

//FICHAS de los jugadores
const ficha1 = document.querySelector('.ficha1');
const ficha2 = document.querySelector('.ficha2');

const reload = document.querySelector('button#reload');

//variables globales
let posActualFicha1 = 0;
let posActualFicha2 = 0;

const posiciones = [
    {x: "180", y: "517"},
    {x: "177", y: "440"},
    {x: "196", y: "363"},
    {x: "213", y: "298"},
    {x: "222", y: "225"},
    {x: "230", y: "150"}, // 1, 6
    {x: "314", y: "145"},
    {x: "395", y: "145"},
    {x: "466", y: "145"},
    {x: "536", y: "145"},
    {x: "613", y: "145"},
    {x: "693", y: "145"}, // 6, 12
    {x: "695", y: "226"},
    {x: "711", y: "308"},
    {x: "724", y: "399"},
    {x: "730", y: "496"}, // 12, 16
    {x: "625", y: "496"},
    {x: "516", y: "496"},
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
    {x: "610", y: "405"},
    {x: "534", y: "405"}, // 27, 30
    {x: "452", y: "405"},
    {x: "380", y: "405"},
    {x: "380", y: "318"}, //  30, 33
    {x: "462", y: "318"}, // 33, 34
    {x: "534", y: "318"}, //34, 36
];



tablero.addEventListener('mousemove', function(e) { 
    let tableroCoord = tablero.getBoundingClientRect();
    
    //relativo al viewport
    coordX.innerHTML = e.clientX - Math.floor(tableroCoord.left);
    coordY.innerHTML = e.clientY - Math.floor(tableroCoord.top);

});

console.log(tablero.getBoundingClientRect());


//Función que situe las fichas en la posicion inicial
reload.addEventListener('click', start);
function start(){
    ficha1.style.top = posiciones[0].y + 'px';
    ficha1.style.left = posiciones[0].x + 'px';
    ficha2.style.top = posiciones[0].y + 'px';
    ficha2.style.left = posiciones[0].x + 'px';
}

dado1.addEventListener('click', function() {
    // moverFicha(ficha1);

    //TODO: GENERAR NUMERO ALEATORIO Y MOVER TANTAS POSICIONES COMO EL NUMERO DEL DADO INDIQUE
    let numPosiciones = Math.floor(Math.random() * 6) + 1;
    console.log(numPosiciones);

    moverFicha(ficha1, numPosiciones);

});

function moverFicha(ficha, numPosiciones) {
    console.log('posiciones a mover: ', numPosiciones);
    
    function mover() {
        if (posicionActual < numPosiciones) {
            ficha.style.top = posiciones[i].y + 'px';
            ficha.style.left = posiciones[i].x + 'px';
            i++;

            if (ficha == ficha1) {
                posActualFicha1++;
            }else{
                posActualFicha2++;
            }

            setTimeout(mover, 300);
        }
    }
    
    mover();
}



dado2.addEventListener('click', function() {
    ficha2.style.top = '';
    ficha2.style.left = '';
});