/**
 * El objetivo de este ejercicio es indicar, con letra, la nota media
 * de un estudiante a partir de sus tres notas parciales. Los intervalos
 * serán los siguientes:
 * 
 *    - de 0 a 4.9, SUSPENSO
 *    - de 5 a 5.9, APROBADO
 *    - de 6 a 6.9, BIEN
 *    - de 7 a 8.9, NOTABLE
 *    - de 9 a 10, SOBRESALIENTE
 */

 grade1 = 1;
 grade2 = 7;
 grade3 = 10;
 
 //avg = (grade1 + grade2 + grade3) / 3;

 avg = 7.5;

 console.log(typeof(avg>8), avg<8)

 if (avg >= 9) {
     console.log('sobresaliente')
 } else if (avg >= 7) {
     console.log('notable')
 } else if (avg >= 6) {
     console.log('bien')
 } else if (avg >= 5) {
     console.log('suficiente')
 } else {
     console.log('suspenso')
 }

 /*
 if (avg <5) {
     console.log('SUSPENSO')
 } else if ( avg >= 5 && avg < 7) {
     console.log('BIEN');
 } else if ( avg >= 7 && avg < 9) {
     console.log('notable')
 } else {
     console.log('sobresaliente')
 }

 */