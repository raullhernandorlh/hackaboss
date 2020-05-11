const process = require('process');

const divDePositivos = (a, b) => {
    if (a < 0 || b < 0) {
        return -1;
    }

    if (b == 0) {
        return -1;
    }

    return a/b;
}

const multDePositivos = (a, b) => {
    if (a < 0 || b < 0) {
        return -1;
    }
    
    return a * b;
}


const valor1 = 9;
const valor2 = 1;

const valor3 = 2;
const valor4 = 4;

const resultado = divDePositivos(valor1, valor2);

if (resultado == -1) {
    console.log('Hubo un error. No se pude ejecutar')
} else {
    console.log(`la división es ${resultado}`);

    const resultadoMul = multDePositivos(valor3, valor4);

    if (resultadoMul == -1) {
        console.log('Hubo un error. No se pude ejecutar')
    } else {
        console.log(`la multiplicación es ${resultadoMul}`)
    }
}
