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
const saludar2 = (nombre='luis') => console.log(`hola ${nombre}`);

saludar2()
saludar2('carlos')

// objeto literal

const persona = {
    nombre,
    trabajo,
    edad: 20
}

console.log(persona, persona.nombre, persona['edad']);

// object constructor

function Tarea(nombre) {
    this.nombre = nombre
}

Tarea.prototype.mostrarInfo = function(){
    return `nombre tarea: ${this.nombre}`
}

const tarea1 = new Tarea('tarea 1')
const tarea2 = new Tarea('tarea 2')
const tarea3 = new Tarea('tarea 3')

console.log(tarea1, tarea2, tarea3, tarea1.mostrarInfo());

// object destructuring

const carro = {
    placa: 'U-234',
    dueño: 'luis',
    año: 2020,
    info() {
        console.log(this.placa)
    }
}

const {placa:placaCarro, dueño, año} = carro

console.log(placaCarro, dueño, año);

carro.info()

// object literal enhacement

const persona1 = { nombre, trabajo }

//
