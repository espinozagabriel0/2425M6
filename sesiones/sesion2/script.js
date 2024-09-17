console.log('Hola sesión 2');
//SUMAR NÚMEROS

// Pedir datos con prompt
/*
const numero = prompt('Introduce un número: ')
console.log('numero: ', numero);

const numero2 = prompt('Introduce un segundo número: ')
console.log('numero2: ', numero2)

console.log('suma', parseInt(numero) + parseInt(numero2))
*/



// JUEGO DE LOS ADIVINAR NÚMERO
const numeroAdivinar = 10;
let numeroIntentos = 3;


while(numeroIntentos > 0){
    //let intentoResupuesta = prompt('Introduce un numero');
    console.log('Numero Intentos: ', numeroIntentos)
    const numeroIntroducido = prompt('Introduce un numero: ');

    if (numeroIntroducido == '') {
        console.log('Introduce un numero!');        
    }else{
        if (parseInt(numeroIntroducido)> numeroAdivinar) {
            console.log('Es mas pequeño!');
        }else if(parseInt(numeroIntroducido) < numeroAdivinar){
            console.log('Es mas grande!');
        }else{
            console.log('Acertaste en:', `${numeroIntentos} intentos!`);
            break;
        }
    }
    numeroIntentos--;
}


