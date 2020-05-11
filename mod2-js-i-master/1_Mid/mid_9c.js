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

    Esta variante de la solución hace uso de una de las últimas
    funcionalidades añadidas a Javascript. Se trata de la función
    `flat`, que se aplica sobre `arrays`. Su funcionamiento es el siguiente:
            - dado un array de arrays, copia todos los elementos de cada 
                array interno, en el array exterior. Se entiendo mejor con un
                ejemplo:
        [[1,2], 3,4].flat()     -> [1,2,3,4]

    Por tanto, haremos uso de la funcionalidad para:
        - extraer, con slice, el primer subarray (el que contiene los N últimos elementos)
        - extraer, con slice, el segundo subarray (el que contiene los primeros elementos)
        - crear un nuevo array con ambos subarrays, y aplicarle la función map 
*/


N=2
values = [1, 2, 3, 4, 5, 6, 7];
output = [];

fistTargetSubarray = values.slice(values.length - N, values.length);
secondTargetSubarray = values.slice(0, values.length - N);

output = [fistTargetSubarray, secondTargetSubarray]

console.log(output);

output = output.flat();

console.log(output);

// notad cómo cambia el formato de `output` entre los dos `console.log`
