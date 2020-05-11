/**
 * Dado un array de valores numéricos
 * crea un nuevo array cuyos valores sean 
 * valores booleanos. Cada uno representa si
 * el valor en la posición actual del array original
 * es menor que el valor en la siguiente posición
 * 
 * Ejemplo:
 *    - [1,2,3,4] -> [true, true, true]
 *    - [4,5,1,6] -> [true, false, true]
 * 
 * Notas a la solución: 
 *      Ojo con la longitud del array resultante.
 *      Notad que debe ser una unidad menos que el array original. Si os
 *      da la misma longitud probablemente estéis poniendo `values.length`
 *      en lugar de `values.length - 1` en el bucle
 * 
 */

const values = [4,5,1,6]
let result = []

for (i=0; i<values.length - 1; i++) {
    result.push(values[i] < values[i+1]);
}

console.log(result);