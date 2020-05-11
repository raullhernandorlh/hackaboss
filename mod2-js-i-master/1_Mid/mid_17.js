/**
 * Funciones
 * 
 * Cuando queremos aplicar el mismo código varias veces, podemos crear `funciones`.
 * En el caso de obtener la nota textual, vamos a querer calcularla no una, sino muchas
 * veces. Para ello, encapsularemos el código desarrollado en una función. 
 * 
 * El ejemplo a continuación muestra la estructura típica de una función:
 *     - parámetros de entrada, que pueden ser 0 o varios. En este caso tenemos
 *       solamente uno: `grade`
 *     - cuerpo de la función. Es el código que realiza las operaciones necesarias
 *       usando, si lo necesita, los parámetros de entrada.
 *     - salida: el valor obtenido debe devolverse, para que pueda ser usado donde
 *       corresponda. Para ello se usará la cláusula `return`
 * 
 * Para profundizar:
 *     - Investiga que pasaría si hubiera declarada una variable llamada `grade` fuera de la función
 * 
 */
const grade1 = 9.1;
const grade2 = 5;
const grade3 = 6;

function getTextualGrade(grade) {
    if ((grade >= 5) && (grade < 7) ) {
        return 'APROBADO';
    } else if ((grade>=7) && (grade < 9)) {
        return 'NOTABLE';
    } else if ( (grade>=9) && (grade <= 10)) {
        return 'SOBRESALIENTE';
    } else {
        return 'SUSPENSO';
    }
}

console.log('Grade1: ', getTextualGrade(grade1));
console.log('Grade2: ', getTextualGrade(grade2));
console.log('Grade3: ', getTextualGrade(grade3));