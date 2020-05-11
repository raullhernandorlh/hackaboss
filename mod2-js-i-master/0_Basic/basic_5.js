/**
 * Procesando cadenas: subcadenas
 * 
 * Otra operación habitual sobre las cadenas es extraer una parte de ellas
 * 
 * Ejercicios:
 *    - Dada una palabra, genera otra que contenga la primera mitad
 *    - Ídem, pero generando la segunda mitad 
 *    - Genera una palabra donde se haya eliminado la primera y última letra
 *
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/slice
 */

name = 'Fernando'

// primera mitad
firstPart = name.slice(0, name.length/2);
console.log(`Primera parte: ${firstPart}`);

// segunda parte
//secondPart = name.slice(name.length/2, name.length);
secondPart = name.slice(name.length/2);
console.log(`Segunda parte: ${secondPart}`)

// la parte del medio
//mid = name.slice(1, name.length - 1);
mid = name.slice(1, -1);
console.log(mid)

// primera y última en mayúsculas
first = name[0].toUpperCase();
last = name[name.length -1 ].toUpperCase();

console.log(`${first}${mid}${last}`)