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


