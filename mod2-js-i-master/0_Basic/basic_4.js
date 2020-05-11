
/**
 * Procesando cadenas: eliminando espacios
 * 
 * Las cadenas de texto con las que trabajamos en nuestras aplicaciones
 * van a venir, mayoritariamente, de lo que un usuario haya escrito
 * en un formulario web. Pueden contener errores, como que hayan introducido espacios
 * al final o principio de la misma, como se observa en el código a continuación
 * 
 * En este ejercicio vamos a escribir el código para que el resultado sea el mismo 
 * que en el anterior, pero partiendo de cadenas que contienen algunos errores:
 * 
 *   'Induráin Larraya, Miguel (MIL)'
 *
 * Para simplificar este tipo de trabajos, `Javascript` ofrece mecanismos
 * que nos ahorran mucho esfuerzo. En la documentación:
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String
 * 
 * encontraréis un montón de información interesante, en concreto, la función `trim`:
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/Trim
 * 
 * De manera muy resumida, `trim` crea otra cadena igual en la que se han eliminado los 
 * espacios en blanco al principio y al final.
 * 
 */

name = 'Miguel   ';
surname1 = '   Induráin';
surname2 = 'Larraya    ';

