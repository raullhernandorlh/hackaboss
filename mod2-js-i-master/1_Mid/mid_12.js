/**
 * Crear otro array en orden inverso
 * 
 * Ejemplo:
 *   - Array entrada: [1,2,3,4]
 *   - Array salida:  [4,3,2,1]
 * 
 * Dos formas:
 *   - for
 *   - buscar info en MDN sobre las funciones de Arrays
 */

 input = [1, 20, 3, 14];
//        0   1  2   3
 output = []

 for (i=input.length - 1; i>=0; i--) {
   output.push( input[i] );
 }

 console.log(output);


 console.log(input.reverse());
