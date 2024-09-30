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

    if (ap1Input.value != "" && "" != ap2Input.value) {
        apellidosFicha.innerHTML = agruparApellidos()
    }else{
        console.log("Introduce los dos apellidos")
        apellidosFicha.innerHTML = " Doe" 
    }

    // Validación DNI
    if (dniInput.value != "") {
        dniFicha.innerHTML = dniInput.value
    } else {
        dniFicha.innerHTML = '00000000M'
    }

    //Validación URL imagen
    if (esValidoUrl(urlInput.value)) {
        imgFicha.src = `${urlInput.value}`
    }else{
        imgFicha.src = "https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png"
    }

    
    console.log(nombreFicha.innerHTML)
    console.log(apellidosFicha.innerHTML)
    console.log(dniFicha.innerHTML)

    limpiarFormulario()
})

//Función que agrupa los apellidos 
function agruparApellidos(){
    return ` ${ap1Input.value} ${ap2Input.value}`
}
//Función que válida si la URL proporcionada es válida o no
function esValidoUrl(urlString) {
    try {
        let url =  new URL(urlString);
        console.log(url);
        return true;
    } catch (error) {
        console.log("Error: URL no válida");
        return false;
    }
}
function limpiarFormulario(){
    nombreInput.value = "";
    ap1Input.value = "";
    ap2Input.value = "";
    dniInput.value = "";
    urlInput.value = "";
}