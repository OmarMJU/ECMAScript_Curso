// Operador de reposo.
const persona = {
    nombre: "Omar",
    edad: 28,
    pais: "MX"  
};

let { nombre, ...todo } = persona;
console.log( nombre);
console.log(todo);

// Añadiendo propiedades de un objeto a otro con el operdor de arrastre.
const persona2 = {
    ...persona,
    profesion: "ingeniero",
    edocivil: "soltero"
}

console.log(persona2);


// Finally en promesas.
const miPromesa = () => {
    return new Promise((resolve, rejected) => {
        true ? setTimeout(() => resolve("Todo de maravilla 😎"), 3000)
        : rejected("Algo salió mal 😣");
    });
};

miPromesa()
.then(respuesta => console.log(respuesta))
.catch(error => console.error(error))
.finally(() => console.log("No sé si falle o no pero yo tengo que mostrar esto"));


// Trabajando con expresiones regulares (regex).
const fecha = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = fecha.exec("1991-06-09");
const anio = match[1];
const mes = match[2];
const dia = match[3];

console.log(anio, mes, dia);