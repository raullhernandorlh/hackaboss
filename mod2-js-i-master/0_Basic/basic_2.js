
/**
 * Concatenando cadenas
 * 
 * Una aplicación convencional usa un gran número de variables y, en ocasiones,
 * es necesario crear otras nuevas a partir de las existentes. Pensemos, por ejemplo,
 * en una aplicación que gestiona personas y tiene tres variables para almacenar su 
 * nombre y apellidos, ¿cómo podemos hacer para tener el nombre completo en una sola?
 * 
 * `Javascript` ofrece un mecanismo para la creación de cadenas de texto a partir de
 * otras variables. Se llama `string interpolation`:
 * 
 * Notad cómo el orden de ejecución es el mismo que el de las líneas: las que están
 * más arriba se ejecutan primero. De esta manera, cuando se ejecuta la línea en la 
 * que se asigna la variable `fullName`, ya existen las variables `name`, `surname1`
 * y `surname2`
 * 
 * Ejercicio: prueba a alternar el orden de la líneas, de manera que la asignación
 * de fullname se haga antes que la definición de cada una de las variables que lo
 * componen. ¿Qué pone en pantalla?
 * 
 */

name = 'Andrés';
surname1 = 'Estévez';
surname2 = 'Costas';

fullName = `${name} ${surname1} ${surname2}`

console.log(fullName);




