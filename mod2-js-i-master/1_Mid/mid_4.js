/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para prácticar con los arrays, se proponen las siguientes actividades:
 *    - calcula la media de los elementos que sean mayores o iguales que 5;
 * 
 */

grades = [7.9, 9.11111, 1, 2];

suma = 0;
contador = 0;

for (grade of grades) {
    if (grade > 5) {
        suma = suma + grade;
        contador++;
    }
}

console.log(`Suma: ${suma}`);
console.log(`Media: ${suma/contador}`)


