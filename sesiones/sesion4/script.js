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


//Array alumnos
const alumnes = [
    {
      nom: "Joan Pérez",
      edat: 18,
      correu: "joan.perez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 8.5 },
        { nom: "Bases de Dades", nota: 7.0 },
        { nom: "Sistemes Operatius", nota: 6.5 }
      ]
    },
    {
      nom: "Maria Sánchez",
      edat: 19,
      correu: "maria.sanchez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 9.0 },
        { nom: "Bases de Dades", nota: 8.0 },
        { nom: "Sistemes Operatius", nota: 7.5 }
      ]
    },
    {
      nom: "Pere Martínez",
      edat: 20,
      correu: "pere.martinez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 7.5 },
        { nom: "Bases de Dades", nota: 6.0 },
        { nom: "Sistemes Operatius", nota: 8.0 }
      ]
    }
];


console.log(alumnes[1].moduls[2].nota)
console.log(alumnes[2].moduls[1].nota)

//Recorrer un array
for (let i = 0; i < arrayPersonas.length; i++) {
  console.log('nombre de ', i, arrayPersonas[i].nombre)
}





//Generando html a partir de un array
//Creamos lista desordenada con nombre de alumnos
let listaHTML = '<ul>'

for (let i = 0; i < arrayPersonas.length; i++) {
  listaHTML += `<li>${arrayPersonas[i].nombre}</li>`
}
listaHTML += '</ul>'

document.querySelector('#miLista').innerHTML = listaHTML




//Generar html en una tabla
let tabla = ''

for (let i = 0; i < arrayPersonas.length; i++) {
  tabla += 
    `<tr>
      <td>${arrayPersonas[i].nombre}</td>
      <td>${arrayPersonas[i].apellidos}</td>
    </tr>
    `
}
document.querySelector('tbody').innerHTML = tabla