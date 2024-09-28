// console.log("hello world")

const btnEnviarFicha = document.querySelector('button.btn')
const nombreInput = document.querySelector('input#name')
const ap1Input = document.querySelector('input#ap1')
const ap2Input = document.querySelector('input#ap2')
const dniInput = document.querySelector('input#dni')
const urlInput = document.querySelector('input#url')

const nombreFicha  = document.querySelector('span#nomFicha')
const apellidosFicha = document.querySelector('span#apellidosFicha')
const dniFicha = document.querySelector('span#dniFicha')

// Imagen ficha
const imgFicha = document.querySelector('img.card-img-top')

//FUNCION QUE CREA LA FICHA
btnEnviarFicha.addEventListener('click', function(e) {
    e.preventDefault()

    if (nombreInput.value != "") {
        nombreFicha.innerHTML = nombreInput.value
    }else{
        nombreFicha.innerHTML = "John"
    }

    if (ap1Input.value != "" || "" != ap2Input.value) {
        apellidosFicha.innerHTML = agruparApellidos()
    }else{
        console.log("Introduce los dos apellidos")
        apellidosFicha.innerHTML = "Doe" 
    }

    apellidosFicha.innerHTML = agruparApellidos()
    dniFicha.innerHTML = dniInput.value

    //Control errores
    try {
        if (urlInput.value == "") {
            throw "Error: Introduce una URL de imagen válida"
        }
    
        imgFicha.src = `${urlInput.value}`
    } catch (error) {
        console.log(error)
    }

    console.log(nombreFicha.innerHTML)
    console.log(apellidosFicha.innerHTML)
    console.log(dniFicha.innerHTML)

    limpiarFormulario()
})

function agruparApellidos(){
    return ` ${ap1Input.value} ${ap2Input.value}`
}
function limpiarFormulario(){

    nombreInput.value = ""
    ap1Input.value = ""
    ap2Input.value = ""
    dniInput.value = ""
    urlInput.value = ""
}