/**
 * 
 * Este ejercicio se trata de una variante del anterior donde,
 * en lugar de desplazar al array una unidad, lo haremos, N
 * veces.
 * 
 * 
 * Ejemplos:
 * 
 * Si N=1 (mismo caso del ejercicio anterior)
 * Array original: [1,2,3,4]
 * Array resultante: [4,1,2,3]
 * 
 * Si N=2
 * Array original: [1,2,3,4]
 * Array resultante: [3,4,1,2]
 * 
 */

N=2
values = [1, 2, 3, 4, 5, 6, 7];
output = [];

// la idea de la solución consiste en lo siguiente:
//     - darse cuenta que los N elementos a desplazar
// se cuentan desde el final. Así, si N = 3, tendremos que 
// mover el subarray [5, 6, 7].
//     - en el array resultante hay dos secuencias de números
// que coinciden con las del array original. Haremos dos `for`
// por tanto, uno por cada secuencia

// el primer `for` copia los últimos N valores al principio
// del nuevo array
for (i=values.length - N; i<values.length; i++) {
    output.push(values[i]);
}

// el segundo `for` copia los primeros valores
// al nuevo array, y quedarán justo detrás de los
// que hemos puesto antes
for (i=0; i<values.length-N; i++) {
    output.push(values[i]);
}

console.log(output)
