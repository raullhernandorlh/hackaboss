/**
 * Filter/map
 * 
 * Javascript proporciona dos mecanismos muy útiles para trabajar con arrays
 *    - filter, que genera un nuevo array con un subconjunto de los elementos
 * del array original
 *    - map, que genera un nuevo array con el mismo número de elementos que 
 * el array original, pero transformados
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
 * 
 *  
 * En este ejercicio vamos a rehacer algunos ejercicios que ya hicimos, pero usando esta técnica
 * 
 */

 // 1) devolver un array con los números pares del array original
 //const numbers = [10, 20, 30, 40];
 const numbers = [1,2,3,4,5];
 //const numbers = [1,3,5];

 /*
 for (let number of numbers) {
     if (number % 2 == 0) {
         pares.push(number);
     }
 }

 console.log(pares);
*/

 let pares = numbers.filter(function(number) {
    // true  -> se queda con este elemento
    // false -> descarta este elemento
    return (number % 2 == 0);
 });

 //console.log(pares);

 // 2) devolver un array con los cuadrados del array original
 const values = [1,2,3,4];

 const squares = values.map(function(value) {
    return value*value;
 });

 // 3) devolver un array con los cuadrados de los números pares que sean mayores que dos
 const values2 = [1,2,3,4];  // [4, 16]

 const cuadrados = values2
    .filter(function(number) { return number % 2 == 0 && number > 2} )
    .map(function(value) { return value*value});

 console.log(cuadrados)

 // 4) devolver un array con las notas de los estudiantes
 const students = [
     {
         name: 'Jose',
         grades: [1, 2, 3]
     },
     {
         name: 'María',
         grades: [10, 9, 8]
     }
 ]

 // 5) Devolver un array con los nombres de los estudiantes aprobados



