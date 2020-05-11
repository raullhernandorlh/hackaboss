/**
 * ¿Cuáles son los `hastags` del tweet? 
 * 
 * Escribe el código necesario para extraer de las variables indicadas
 * los `hashtags` automáticamente.
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
tweet4 = 'tweet con un solo hashtag al #final';


// esta solución no presupone ninguna longitud a los hashtags,
// así que es necesario averiguar donde acaba cada uno de ellos.
// Existen dos posibilidades:
//     - el hashtag está al final de la frase
//     - el hashtag está en medio de la frase
//
// En el segundo caso el el hashtag se encontrará entre una
// almohadilla y un espacio en blanco

tweet = tweet3;

positionFirstHashtag = tweet.indexOf('#');
positionSecondHashtag = tweet.indexOf('#', positionFirstHashtag + 1); // busco la segunda almohadilla a partir de la primera

if (positionFirstHashtag != -1) {
    // buscamos si hay un espacio en blanco después de la almohadilla
    positionFirstHashtagEnd = tweet.indexOf(' ', positionFirstHashtag)
    if (positionFirstHashtagEnd == -1) {
        // en este caso el hashtag está en mitad del tweet
        firstHashTag = tweet.slice(positionFirstHashtag);
    } else {
        // en este caso el hashtag está al final del tweet, por lo que 
        // no hay un espacio al final y el indexOf nos dio -1 como resultado
        firstHashTag = tweet.slice(positionFirstHashtag, positionFirstHashtagEnd);

    }

    console.log(firstHashTag)
}

if (positionSecondHashtag != -1) {
    // buscamos si hay un espacio en blanco después de la almohadilla
    positionSecondHashtagEnd = tweet.indexOf(' ', positionSecondHashtag)
    if (positionSecondHashtagEnd == -1) {
        // en este caso el hashtag está en mitad del tweet
        secondHashTag = tweet.slice(positionSecondHashtag);
    } else {
        // en este caso el hashtag está al final del tweet, por lo que 
        // no hay un espacio al final y el indexOf nos dio -1 como resultado
        secondHashTag = tweet.slice(positionSecondHashtag, positionSecondHashtagEnd);

    }

    console.log(secondHashTag)
}

