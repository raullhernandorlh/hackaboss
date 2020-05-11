const process = require('process');

const divDePositivos = (a, b) => {

    if (a < 0 || b < 0) {
        throw new Error('bad-parameters.div');
    }

    if (b == 0) {
        throw new Error('bad-parameters.div');
    }

    return a/b;
}

const multDePositivos = (a, b) => {
    if (a < 0 || b < 0) {
        throw new Error('bad-parameters.mul');
    }

    return a * b;
}

const valor1 = 9;
const valor2 = 0;

const valor3 = 2;
const valor4 = 4;


try {
    const resultado = divDePositivos(valor1, valor2);
    const resultadoMul = multDePositivos(valor3, valor4);

    console.log(`La división es: ${resultado}`);
    console.log(`La multiplicación es: ${resultadoMul}`);
} catch (e) {
    console.log('Hubo algún error: ');
    console.log(e);
    //process.exit();   // salgo de la aplicación
}

console.log('Línea al final')
