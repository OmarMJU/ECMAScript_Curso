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


