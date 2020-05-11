/**
 * Dado un array de números devuelve un nuevo 
 * array donde cada elemento se haya desplazado 
 * una posición hacia la derecha.
 * 
 * Ejemplo:
 * 
 * Array original: [1,2,3,4]
 * Array resultante: [4,1,2,3]
 * 
 * Nota cómo se trata de un desplazamiento circular,
 * donde el último elemento pasa a ser el primero
 */
values = [1, 2, 3, 4];
output = [];


// el valor 4 (que está en la posición 3), pasa
// a ser el primero del array, así que lo metemos
output.push(values[values.length - 1]);


// recorremos los valores que aparecen en secuencia, es decir,
// del 1 a 3, e introducimos cada uno de estos valores en 
// secuencia en el nuevo array
for (i=0; i<values.length-1; i++) {
    output.push(values[i]);
}

console.log(output);

