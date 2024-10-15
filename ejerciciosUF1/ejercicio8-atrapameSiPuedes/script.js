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


const referenciaX = 358;
const referenciaY = 253;
const ficha1 = document.querySelector('.ficha1');
const ficha2 = document.querySelector('.ficha2');

const reload = document.querySelector('button#reload');

const posiciones = [
    {x: "177", y: "440"},
    {x: "196", y: "363"},
    {x: "213", y: "298"},
    {x: "222", y: "225"},
    {x: "230", y: "150"}, // primera columna ascendente
    {x: "314", y: "145"},
    {x: "395", y: "145"},
    {x: "466", y: "145"},
    {x: "536", y: "145"},
    {x: "613", y: "145"},
    {x: "693", y: "145"}, // primera fila hacia la derecha
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""}, // primera columna descendente
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""},
    {x: "", y: ""}
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
    ficha1.style.top = "526px";
    ficha1.style.left = "166px";
    ficha2.style.top = "512px";
    ficha2.style.left = "205px";

}

dado1.addEventListener('click', function() {
    moverFicha(ficha1);
});

function moverFicha(ficha) {
    let i = 0;
    
    function mover() {
        if (i <= 12 && i < posiciones.length) {
            ficha.style.top = posiciones[i].y + 'px';
            ficha.style.left = posiciones[i].x + 'px';
            i++;
            setTimeout(mover, 500);
        }
    }
    
    mover();
}



dado2.addEventListener('click', function() {
    ficha2.style.top = '';
    ficha2.style.left = '';
});