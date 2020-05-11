/**
 * Imagina que estás haciendo un sistema de clasificación
 * automática de tweets. Se trata de un sistema que, a partir 
 * del texto de un tweet, asigna automáticamente una serie de etiquetas.
 * 
 * Esta clasificación se realiza de acuerdo a las siguientes reglas:
 *     - si el tweet tiene las palabras: PSOE, PP, Podemos, VOX, CS, entonces
 *       asignará la etiqueta 'POLÍTICA'
 *     - si el tweet tiene algunas de las palabras Javascript, PHP o Python,
 *       la etiqueta será 'PROGRAMACIÓN'
 * 
 * El objetivo de este ejercicio es analizar cada tweet y escribir la etiqueta
 * generada por pantalla.
 * 
 * Nota: al avanzar en el curso podremos elaborar una versión más
 * sofisticada de este ejercicio
 */

tweet1 = 'aprendiendo #javascript en Vigo';
tweet2 = 'empezando el segundo módulo del bootcamp!';
tweet3 = 'en un giro de los acontecimientos VOX y Podemos llegan a un acuerdo';
tweet4 = 'no hay quien entienda php, me paso a Java';
tweet5 = 'deja su militancia en el PSOE para dedicarse a su pasión por la programación en Javascript';

tweet = tweet5.toUpperCase()

positionPhp = tweet.indexOf('PHP');
positionJavascript = tweet.indexOf('JAVASCRIPT');
positionPython = tweet.indexOf('PYTHON');

positionPodemos = tweet.indexOf('PODEMOS');
positionPSOE = tweet.indexOf('PSOE');
positionVOX = tweet.indexOf('VOX');
positionCS = tweet.indexOf('CS');
positionPP = tweet.indexOf('PP');

politica = false
programacion = false

if (positionPhp != -1 || positionJavascript != -1 || positionPython != -1) {
    programacion = true;
}

if (positionPodemos != -1 || positionCS != -1 || positionPP != -1 || positionVOX != -1 || positionPSOE != -1) {
    politica = true;
}

if (politica && programacion) {
    console.log('Es de ambos');
}
if (!politica  && programacion) {
    console.log('Es de programación')
}
if (politica && !programacion) {
    console.log('Es de política')
}
if (!politica && !programacion) {
    console.log('No es de ninguno')
}