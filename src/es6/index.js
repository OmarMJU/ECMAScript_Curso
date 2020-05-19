// Antes de ES6.
function obtenerDatos(nombre, edad, pais) {
    var nombreF = nombre || "Omar";
    var edadF = edad || 28;
    var paisF = pais || "MX";

    console.log(nombreF, edadF, paisF);
}

// obtenerDatos();

function obtenerDatosES6(nombre = "Omar", edad = 28, pais = "MX") {
    console.log(nombre, edad, pais);
}

obtenerDatosES6();
obtenerDatosES6("Valeria", 25, "MX");


/** DESTRUCTURACIÓN DE DATOS **/
const persona = {
    nombre: "Jhovana",
    edad: 27,
    pais: "MX"
};

const { nombre, edad, pais } = persona;
console.log(nombre, edad, pais);


/** SPREAD OPERATOR **/
const chicasGuapas = ["Jhivana", "Sharon", "Viridiana", "Joseline", "Valeria"];
const profesiones = ["Doctora", "Diseñadora", "Ingeniera", "Desarrolladora", "Abogada"];
const team = ["Leslie", ...chicasGuapas, ...profesiones];
console.log(team);


/** PROMESAS **/
// Tarea que va a realizar la promesa.
function funcionPromesa(todoOk, todoNoOK) {
    if (true) {
        todoNoOK("Hurra!! Todo esta genial 😍");
    } else {
        todoNoOK("Algo fallo 😩");
    }
}

// Tarea que va a realizar la promesa si todo salió bien.
function cumpliPromesa(mensaje) {
    console.log(mensaje);
} 

// Tarea que va a realizar la promesa si todo salió mal.
function noCumpliPromesa(mensaje) {
    console.error(mensaje);
}

// La promesa.
let promesa = new Promise(funcionPromesa);
promesa.then(cumpliPromesa)
.catch(noCumpliPromesa);


// Ejemplo 2.
let promesa2 = new Promise((todoOk, todoNoOK) => {
    if(false) {
        todoNoOK("Hurra!! Todo esta genial 😍");
    } else {
        todoNoOK("Algo fallo 😩");
    }
});

promesa2.then(hurra => console.log(hurra))
.catch(error => console.log(error));


// Ejemplo 3
const promesa3 = () => {
    return new Promise((todoOk, noOk) => {
        if(false) {
            todoOk("Hurra!! Todo esta genial 😍");
        } else {
            noOk("Algo fallo 😩");
        }
    }); 
};

promesa3()
.then(mensajeOk => console.log(mensajeOk))
.catch(mensajeError => console.error(mensajeError));


/** MODULOS **/
import { saludar } from "./modulo.js";
saludar("Mauricio");



/** GENERADORES **/
function* funcionGenerador() {
    if(true) {
        yield "Hola (Primer llamado al generador)";
    }
    if(true) {
        yield "Omar (Segundo llamado al generador)";
    }
}

const generadorM = funcionGenerador();
console.log(generadorM.next().value);
console.log(generadorM.next().value);