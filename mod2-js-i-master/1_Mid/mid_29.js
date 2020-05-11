/**
 *  Agrupando variables: objetos
 * 
 *    - Aplicación: contar cuántas letras hay en una cadena de texto
 *    - ¿Afecta la implementación realizada al tiempo de ejecución?
 * 
 * Notad cómo, gracias a que los objetos nos permiten añadir
 * claves dinámicamente, no es necesario crear variables para 
 * cada una de las posibles letras que pueda tener la cadena. 
 * De esta manera, la implementación es totalmente independiente
 * de la cadena de entrada.
 * 
 */

const mensaje = 'Estamos confinados por el coronavirus';

letras = {};

for (let letra of mensaje) {
    const letraMayus = letra.toUpperCase();

    if (letras[letraMayus] === undefined) {
        letras[letraMayus] = 1;
    } else {
        letras[letraMayus]++;
    }

}

console.log(letras)
