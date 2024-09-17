console.log('sesión 1!!!');

// Comentarios

// Variables
var nombre = "Pepe";
let apellidos = 'Potamos';
const dominio = "@fpllefia.com";
const nombreCompleto = apellidos.toLowerCase() + nombre.toLowerCase();
console.log('nombreCompleto: ', nombreCompleto);

const email = apellidos+nombre+dominio;
console.log('email: ', email);

// Concatenar textos con variables
const email2 = "otroemail"+dominio;
console.log('email2: ', email2);

// Utilizando backticks
const email3 = `otroemail${dominio}`
console.log('email3: ', email3);

// Ejemplo de uso de backsticks con codigo html
const miCodigoHtml = `
    <div>Hola</div>
`
console.log(miCodigoHtml)