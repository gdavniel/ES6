let variable = `1920923`

console.log(variable);

const letra = `a`

console.log(letra);

//

var nombre = 'luis'

if (nombre) {
    var nombre = 'carlos'
}

console.log(nombre); // carlos

//

let nombres = 'luis'

if (nombres) {
    let nombres = 'carlos'
}

console.log(nombres); // carlos

//

const trabajo = "medico"

console.log("nombre: " + nombre + " trabajo: " + trabajo);

console.log(`nombre: ${nombre} trabajo: ${trabajo}`);

//

saludar()
// Funcion Declarativa
function saludar() {

    console.log('hola');
}

// Funcion Expresiva
const saludar2 = () => console.log('hola');

saludar2()