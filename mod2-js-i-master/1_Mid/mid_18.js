/**
 * Funciones
 * 
 * Crea una función que reciba un array y un número y 
 * devuelva cuántos números del array son mayores que 
 * el indicado por parámetro
 * 
 * 
 */


 function getHigherThan(numbers, threshold) {
    let count = 0;

    for (let number of numbers) {
        if (number > threshold) {
            count++;
        }
    }

    return count;
 }

 const threshold = 5;
 const values = [1,2,3,4,5,6,7,8];
 const counter = getHigherThan(values, threshold);

 console.log(`El número de valores mayores que ${threshold} es ${counter}`);

