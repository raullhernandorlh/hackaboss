/**
 * ¿Cuáles son los `hastags` del tweet? 
 * 
 * Escribe el código necesario para extraer de las variables indicadas
 * los `hashtags` automáticamente.
 *   - asume que el texto del `hashtag` tiene 10 caracteres
 *   - asume que hay, como mucho, dos tweets 
 * 
 * Para ello se propone el uso de las funciones de Javascript `indexOf` y `slice`:
 *   - `indexOf` devuelve la posición en la que se encuentra la cadena buscada
 *   - `slice` extrae un fragmento de una cadena
 * 
 * Ejemplos:
 * 
 *    name = 'Manolo Abreu'
 *    name.indexOf('Abreu')    // devuelve 7
 *    name.indexOf('Martínez')  // devuelve -1
 * 
 * Consultar:
 *    - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf
 */


tweet1 = 'aprendiendo #javascript en  Vigo';
tweet2 = 'empezando el segundo módulo del bootcamp!'
tweet3 = 'hack a boss bootcamp vigo #javascript #codinglive';

DEFAULT_HASHTAG_LENGTH = 10;

tweet = tweet3;

positionFirstHashtag = tweet.indexOf('#');
positionSecondHashTag = tweet.indexOf('#', positionFirstHashtag + 1); // busco la segunda almohadilla a partir de la primera

if (positionFirstHashtag != -1) {
    // extraigo el hashtag a partir de la posición de la almohadilla y le sumo 10, longitud 
    // del hashtag según el enunciado, más 1, que es la longitud de la almohadilla
    firstHashTag = tweet.slice(positionFirstHashtag, positionFirstHashtag + DEFAULT_HASHTAG_LENGTH + 1);
    console.log(firstHashTag)
}

if (positionSecondHashTag != -1) {
    secondHashTag = tweet.slice(positionSecondHashTag, positionSecondHashTag + DEFAULT_HASHTAG_LENGTH + 1);
    console.log(secondHashTag)

}
