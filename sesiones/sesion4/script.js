console.log("Sesion 4")

// array
const frutas = ['pera',  'manzana', 'platano', 9, 32]
console.log(frutas)

//acceso a posición del array
console.log(frutas[2])


//array bidimensional
const barquitos = [
    ["1A", "1B", "1C"],
    ["2A", "2B", "2C"],
    ["3A", "3B", "3C"]
]
console.log(barquitos[2][1])

//Objetos javascript
const persona = {
    nombre: 'Pepe',
    apellidos: 'Lotillas Rotas',
}
console.log(persona.apellidos)


//Array de objetos
const arrayPersonas = [
    {
        nombre: 'Pepe',
        apellidos: 'Lotillas Rotas',
    },
    {
        nombre: 'Sara',
        apellidos: 'Lotillas Rotas',
    },
    {
        nombre: 'Andre',
        apellidos: 'Roto Rotas',
    }
]
console.log(arrayPersonas[2].apellidos)