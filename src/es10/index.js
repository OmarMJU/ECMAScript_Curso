// Flat.
let arreglo = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(arreglo);
console.log(arreglo.flat(3));

let arreglo2 = [1, 2, 3, 4, 5];
console.log(arreglo2.flatMap(valor => [valor, valor * 2]));

// Entries.
let arregloObjeto = [["nombre", "Omar"], ["Edad", "28"]];
console.log(Object.fromEntries(arregloObjeto));

// Symbol (No le veo mucho sentido)
let mySimbolo = "Hola, soy un simbolo";
let symbolo = Symbol(mySimbolo);
console.log(symbolo.description);