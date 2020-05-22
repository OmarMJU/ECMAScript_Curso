const datos = {
    fontend: "Omar",
    backend: "Mauricio",
    diseniador: "Juarez"
};

const entradas = Object.entries(datos);
console.log(entradas);
console.log(entradas.length);

const entradasValores = Object.values(datos);
console.log(entradasValores);

// PadStart y padEnd.
const nombre = "Mauricio";
console.log(nombre.padStart(13, "Omar "));
console.log(nombre.padEnd(15, " Juarez"));


// Async - Await.
const holaMundo = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => resolve("Todo salió genial 😎"), 3000)
        : reject(new Error("Algo paso 😩😨"));
    });
};

const holaAsync = async () => {
    const hola = await holaMundo();
    console.log(hola);
}

holaAsync();

// Alternativa con try - carch.
const holaAsync2 = async () => {
    try {
        const holaAsyncAwait = await holaMundo();
        console.log(holaAsyncAwait);
    } catch (error) {
        console.error(error);
    }
};

holaAsync2();