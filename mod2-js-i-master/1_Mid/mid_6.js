/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para prácticar con los arrays, se proponen las siguientes actividades:
 *    - Obtén los valores mínimo y máximo de un array de números
 * 
 */

numbers = [1,2,4,5,6,7,8,9,13,14];

min = numbers[0]
max = numbers[0]

for (number of numbers) {
    if (number > max) {
        max = number;
    }

    if (number < min) {
        min = number;
    }
}

console.log(min, max)

