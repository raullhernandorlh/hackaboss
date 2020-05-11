/**
 * Condiciones encadenadas
 * 
 * ¿Y si queremos evaluar dos condiciones al mismo tiempo? ¿Y si son tres o más?
 * Es posible. Imaginad la siguiente condición, escrita en lenguaje natural:
 *  
 *   'si tienes fiebre o tienes tos, vete al médico' 
 * 
 * Observa el código correspondiente. Hay un par de novedades:
 *    - el operador `or (||)`. Se usa para evaluar dos condiciones
 *      al mismo tiempo. La condición global será cierta, si se cumple
 *      al menos una de las dos condiciones a cada lado del `||`
 *    - la variable `tos` tiene el valor `true`. Se trata de un nuevo tipo de dato, 
 *      llamado `booleano`. A diferencia de los tipos vistos hasta ahora, este solo 
 *      puede tomar dos valores `true` o `false`
 */


 temperatura = 36;
 tos = true;

 umbral = 37;


 if (temperatura>=umbral || tos ) {
     console.log('vete al médico')
 }











