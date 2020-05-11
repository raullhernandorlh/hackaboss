/**
 * Filter/map (II)
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
 */

 // 3) devolver un array con los cuadrados de los números pares
 // que sean mayores que dos
 //
 // A continuación se muestran distintas soluciones, mejorándolas
 // paso a paso 


 const numbers = [1,2,3,4];  // [16]

 // SOLUCIÓN 1: sin map/filter
 /*
 let result = [];

 for (let number of numbers) {
    if (number % 2 == 0 && number > 2) {
        result.push(number * number);
    }
 }
*/

 // SOLUCIÓN 2: con map y filter independientes
 /*
 const squares = numbers.filter(function(number) { return number % 2 == 0 && number > 2}); 
 const result = squares.map(function(number) { return number*number });
*/

 // SOLUCIÓN 3: encadenando map y filter
 /*
 const result = numbers
   .filter(function(number) { return number % 2 == 0 && number > 2} )
   .map(function(value) { return value*value});
*/

 // SOLUCIÓN 4: un filter por cada condición
 /*const result = numbers
    .filter(function(number) { return number > 2} )      // [3, 4]
    .filter(function(number) { return number % 2 == 0 }) // [4]
    .map(function(value) { return value*value});         // [16]
*/

 // SOLUCIÓN 5: usar arrow functions
 function sumar(numero1, numero2) {
   const resultado = numero1 + numero2;

   return resultado;
 }

 const sumarArrowFunction = (numero1, numero2) => {
   const resultado = numero1 + numero2;

   return resultado;
 }

/* const result = numbers
   .filter( (number) => { return number > 2} )      // [3, 4]
   .filter( (number) => { return number % 2 == 0 }) // [4]
   .map( (value) => { return value*value});         // [16]
*/


 // SOLUCIÓN 6: usar arrow functions (II)
 //  - en las arrow functions, si hay un solo parámetro, 
 // se puede omitir los paréntesis
 //  - PENDING 
/*
 const THRESHOLD = 2

 const result = numbers
   .filter( number => number > THRESHOLD ) // [3, 4]
   .filter( number => number % 2 == 0 )    // [4]
   .map( number => number*number);         // [16]
*/

 // SOLUCIÓN 7: arrow functions con nombre
 const THRESHOLD = 2

 const isHigherThanTwo = number => number > THRESHOLD;
 const isEven = number => number % 2 == 0;
 const square = number => number*number;

 const result = numbers
   .filter( isHigherThanTwo ) // [3, 4]
   .filter( isEven )   // [4]
   .map( square );     // [16]


// SOLUTION 8: using external variables
const THRESHOLD = 2

const isHigher = (number, threshold) => number > threshold;
const isEven = number => number % 2 == 0;
const square = number => number*number;

const result = numbers
  .filter( (number) => isHigher(number, THRESHOLD) ) // [3, 4]
  .filter( isEven )   // [4]
  .map( square );     // [16]

 console.log(numbers)
 console.log(result);
 