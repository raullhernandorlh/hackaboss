/**
 * Repaso
 * 
 * En este ejercicio hará falta usar todo lo aprendido hasta ahora
 * El objetivo es escribir en pantalla una ficha de estudiante
 * con el siguiente aspecto:
 * 
 *     **********************
 *     * Manolo Pérez Gómez *
 *     *                    *
 *     *        8.3         *
 *     *     (APROBADO)     *
 *     **********************
 * 
 * Notas:
 *    - notad que tanto la nota numérica como textual están centradas
 *    - vuestro código debe funcionar para cualquier nombre y apellidos,
 *      independientemente de su longitud
 *    - podéis hacer uso de la función `repeat`: 
 *      https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/repeat
 */   

name = 'Manolos';
surname1 = 'Pérez';
surname2 = 'Gómez';

grade1 = 10;
grade2 = 5;

fullName = `${name} ${surname1} ${surname2}`
average = (grade1 + grade2) / 2;

averageFixed = average.toFixed(2);


if (average < 5) {
    averageText = 'SUSPENSO';
} else if (average >= 5 && average <6) {
    averageText = 'SUFIENTE';
} else if (average >=6 && average <7) {
    averageText = 'BIEN';
} else if (average >= 7 && average <9) {
    averageText = 'NOTABLE';
} else {
    averageText = 'SOBRESALIENTE';
}


gradeLeftMargin = ' '.repeat((fullName.length + 2)/2 - averageFixed.length/2);
gradeRightMargin = ' '.repeat( fullName.length + 2 - gradeLeftMargin.length - averageFixed.length);

gradeTextLeftMargin = ' '.repeat((fullName.length + 2)/2 - averageText.length/2);
gradeTextRightMargin = ' '.repeat( fullName.length + 2 - gradeTextLeftMargin.length - averageText.length);

console.log(`fullname length: ${fullName.length}`)
console.log(`izquierdo: ${gradeLeftMargin.length}`);
console.log(`derecho: ${gradeRightMargin.length}`)

console.log('*'.repeat(fullName.length + 4));
console.log(`* ${fullName} *`);
console.log(`*${' '.repeat(fullName.length + 2)}*`)
console.log(`*${gradeLeftMargin}${averageFixed}${gradeRightMargin}*`);
console.log(`*${gradeTextLeftMargin}${averageText}${gradeTextRightMargin}*`);
console.log('*'.repeat(fullName.length + 4));
