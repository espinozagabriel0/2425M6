// EVENT-clientX, event.clientY (estará el top y el left relativo al div),  de essta forma guardamos lac oordenadas de las posiciones de cada casilla, en un array de documentos json
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
const referenciaX = 472;
const referenciaY = 72;
const ficha1 = document.querySelector('.ficha1');
const ficha2 = document.querySelector('.ficha2');

const reload = document.querySelector('button#reload');

const posiciones = [
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
    {x: " px", y: " px"},
];


tablero.addEventListener('mousemove', function(e) {
    coordX.innerHTML = e.clientX - referenciaX;
    coordY.innerHTML = e.clientY - referenciaY;
})

// //Función que situe las fichas en la posicion inicial
reload.addEventListener('click', start);
function start(){
    ficha1.style.top = "567" + "px";
    ficha1.style.left = "188" + "px";
    ficha2.style.top = "549" + "px";
    ficha2.style.left = "211" + "px";
}