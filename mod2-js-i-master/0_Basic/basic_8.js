/**
 * En el ejercicio anterior aprendimos que Javascript, a veces,
 * interpreta el contenido de una cadena como un número, pero otras no,
 * lo que puede llevar a errores en el código.
 * 
 * Para evitar este problema haremos uso de dos funciones que nos 
 * proporciona el lenguaje: `parseInt` y `parseFloat`. La primera
 * interpreta una cadena como un número entero, mientras que la
 * segunda lo hace como un número decimal.
 * 
 * Probemos lo siguiente:
 *      1) Repitamos el ejercicio anterior, pero esta vez usando la función
 * `parseInt`, como se muestra en el ejemplo de la suma. ¿Son los
 * resultados ahora los esperados?
 * 
 *      2) ¿Y si en lugar de valer 20 y 10, los valores de a y b fuesen 20.1 y 10.5,
 * respectivamente?
 * 
 *      3) Repite lo anterior con `parseFloat`
 * 
 */
 
 a = '20.5';
 b = '10.2';

 suma = parseInt(a) + parseInt(b);
// resta = 
// division = 
// multiplicacion = 
// resto = 

console.log(`Suma: ${suma}`);
