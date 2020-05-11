/**
 * Hasta ahora, todos los códigos que hemos desarrollado tienen un solo
 * flujo de ejecución, es decir, después de cada línea se ejecuta la que 
 * está inmediatamente a continuación. En la práctica, las aplicaciones 
 * ejecutan unas líneas u otras en función de ciertas condiciones.
 * 
 * Estudiemos el siguiente ejemplo. Se trata de un código que escribe en 
 * pantalla si un alumno está aprobado o no.
 * 
 * Hemos introducido la instrucción `if-then-else`:
 *     - a continuación del `if`, entre paréntesis, se escribe
 *       la condición a evaluar,
 *     - si la condición se cumple, se ejecuta el código que está
 *       entre el primer par de llaves
 *     - si la condición no se cumple, se ejecuta el código que
 *       escribimos entre el segundo par de llaves
 * 
 * Probad a cambiar el valor de la variable `notaMedia` y observad el 
 * comportamiento.
 * 
 */

 notaMedia = 6;

 if (notaMedia >= 5) {
     console.log('APROBADO!');
 } else {
     console.log('SUSPENSO!');
 }


