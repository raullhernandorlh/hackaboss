/**
 * Ámbito de las variables
 * 
 * Hasta ahora declarábamos las variables en cualquier parte del código
 * y las usábamos dónde nos hacía falta. Esta forma de trabajar funciona
 * mientras nuestras aplicaciones son muy sencillas, pero es muy propensa
 * a errores cuando crecen.
 * 
 * La manera correcta de hacerlo es declarar las variables en el ámbito
 * más restringido, es decir, dentro de los corchetes donde se van a usar. 
 * Y además se indica si la variable se va a poder modificar o no. Veamos 
 * un ejemplo:
 * 
 * Descomentad cada uno de los bloques indicados a continuación para
 * entender cada una de las distintas casuísticas que se pueden dar 
 * 
 */


 /*
 // DESCOMENTA ESTE BLOQUE PARA EJECUTARLO
 // nota el error que da debido a que `passed`
 // no existe fuera del ámbito del `if`
 const grade = 8;
 const passTreshold = 5;

 if (grade > passTreshold) {
    const passed = true;
 }

 console.log(passed);
*/


/*
 // DESCOMENTA ESTE BLOQUE PARA EJECUTARLO
 // nota el error debido a la declaración de dos
 // variables con el mismo nombre
let miVariable = 0;
let miVariable = 2;
*/

/*
 // DESCOMENTA ESTE BLOQUE PARA EJECUTARLO
 // nota cómo la asinación dentro del if se refiere
 // a la variable declarada fuera
let mensaje = '';
let nota = 8;

if (nota>5) {
   mensaje = 'aprobado';
}

console.log(mensaje);

*/



 // DESCOMENTA ESTE BLOQUE PARA EJECUTARLO
 // el console.log no pinta nada, ya que la variable
 // `mensaje` ha sido redeclarada dentro el `if`
 // y fuera del mismo tiene el valor inicial, esto es,
 // cadena vacía
let mensaje = '';
let nota = 8;

if (nota>5) {
   let mensaje = 'aprobado';
}

console.log(mensaje);

