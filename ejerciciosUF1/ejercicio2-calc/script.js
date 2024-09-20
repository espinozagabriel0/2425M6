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


const pantalla = document.querySelector('#pantalla')

boton1.addEventListener('click', function name(params) {
    pantalla.innerHTML = "1"
})

boton2.addEventListener('click', function() {
    pantalla.innerHTML = "2"
})

boton3.addEventListener('click', function() {
    pantalla.innerHTML = "3"
})

boton4.addEventListener('click', function() {
    pantalla.innerHTML = "4"
})

boton5.addEventListener('click', function() {
    pantalla.innerHTML = "5"
})

boton6.addEventListener('click', function() {
    pantalla.innerHTML = "6"
})

boton7.addEventListener('click', function() {
    pantalla.innerHTML = "7"
})

boton8.addEventListener('click', function() {
    pantalla.innerHTML = "8"
})

boton9.addEventListener('click', function() {
    pantalla.innerHTML = "9"
})

boton0.addEventListener('click', function() {
    pantalla.innerHTML = "0"
})

btnBorrar.addEventListener('click', function() {
    pantalla.innerHTML = "0"
})