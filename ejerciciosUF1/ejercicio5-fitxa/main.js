console.log("hello world")

const btnEnviarFicha = document.querySelector('button.btn')
const nombreInput = document.querySelector('input#name')
const ap1Input = document.querySelector('input#ap1')
const ap2Input = document.querySelector('input#ap2')
const dniInput = document.querySelector('input#dni')
const urlInput = document.querySelector('input#url')

const nombreFicha  = document.querySelector('span#nomFicha')
const apellidosFicha = document.querySelector('span#apellidosFicha')
const dniFicha = document.querySelector('span#dniFicha')

let nom = nombreInput.value
let ap1 = ap1Input.value
let ap2 = ap2Input.value
let dni = dniInput.value
let url = urlInput.value

function agruparDades() {
    return ap1 + ap2
}

//FUNCION QUE CREA LA FICHA
btnEnviarFicha.addEventListener('click', function() {
    nombreFicha.innerHTML = nom
    apellidosFicha.innerHTML = agruparDades()
    dniFicha.innerHTML = dni
})