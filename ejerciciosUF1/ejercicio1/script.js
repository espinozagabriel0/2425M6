let div = document.querySelector('div.mensaje')
let input = document.querySelector('input')
let btn = document.querySelector('button')
let numeroAdivinar = 10

btn.addEventListener('click', function(){
    let numero = parseInt(input.value)
    if(numero != numeroAdivinar){
        div.innerHTML = `El número ${numero} no es correcto.`
    }else{
        div.innerHTML = `El número ${numero} es correcto!`
    }
});