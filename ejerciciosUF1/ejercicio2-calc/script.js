console.log("Calculadora inicializada.")

const boton1 = document.querySelector('#btn1')
const boton2 = document.querySelector('#btn2')
const boton3 = document.querySelector('#btn3')
const boton4 = document.querySelector('#btn4')
const boton5 = document.querySelector('#btn5')
const boton6 = document.querySelector('#btn6')
const boton7 = document.querySelector('#btn7')
const boton8 = document.querySelector('#btn8')
const boton9 = document.querySelector('#btn9')
const boton0 = document.querySelector('#btn0')
const btnBorrar = document.querySelector('#btnBorrar')
const btnRestar = document.querySelector('#btnResta')
const btnSumar =  document.querySelector('#btnSuma')
const btnIgual = document.querySelector('#btnIgual')

const pantalla = document.querySelector('#pantalla')
let entradaActual = ''

boton1.addEventListener('click', function () {
    entradaActual += '1'
    pantalla.innerHTML = entradaActual
})

boton2.addEventListener('click', function() {
    entradaActual += '2'
    pantalla.innerHTML = entradaActual
})

boton3.addEventListener('click', function() {
    entradaActual += '3'
    pantalla.innerHTML = entradaActual
})

boton4.addEventListener('click', function() {
    entradaActual += '4'
    pantalla.innerHTML = entradaActual
})

boton5.addEventListener('click', function() {
    entradaActual += '5'
    pantalla.innerHTML = entradaActual
})

boton6.addEventListener('click', function() {
    entradaActual += '6'
    pantalla.innerHTML = entradaActual
})

boton7.addEventListener('click', function() {
    entradaActual += '7'
    pantalla.innerHTML = entradaActual
})

boton8.addEventListener('click', function() {
    entradaActual += '8'
    pantalla.innerHTML = entradaActual
})

boton9.addEventListener('click', function() {
    entradaActual += '9'
    pantalla.innerHTML = entradaActual
})

boton0.addEventListener('click', function() {
    cont = 0
    if (parseInt(pantalla.innerHTML) == 0) {
        entradaActual = '0'
        pantalla.innerHTML = entradaActual
    }else{
        entradaActual += '0'
        pantalla.innerHTML = entradaActual
    }
})

btnSumar.addEventListener('click', function() {
    entradaActual += '+'
    pantalla.innerHTML = entradaActual
})
btnRestar.addEventListener('click', function() {
    entradaActual += '-'
    pantalla.innerHTML = entradaActual
})
btnIgual.addEventListener('click', function() {
    try {
        if (pantalla.innerHTML != "0") {
            let resultado = eval(entradaActual)
            pantalla.innerHTML = eval(resultado)
            entradaActual = resultado
            console.log("Resultado: ", resultado)
        }else{
            throw "Nombre no valid"
        }
    } catch (error) {
        pantalla.innerHTML = 'Error'
        console.log("Error: ", error)
    }
})


btnBorrar.addEventListener('click', function() {
    entradaActual = ''
    pantalla.innerHTML = entradaActual + '0'
})