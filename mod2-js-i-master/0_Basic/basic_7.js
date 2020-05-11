/**
 * ¿Cambia el resultado si los números los ponemos entre comillas,
 * como si fueran cadenas?
 * 
 * Repite el ejercicio, observa el resultado y razona sobre él.
 * 
 */

a = '10';
b = '3';

console.log(typeof(a));

a = parseFloat(a)
b = parseFloat(b)
console.log(typeof(a));

console.log(`a vale: ${a}`);


suma = a + b;
resta = a - b;
division = a / b;
multiplicacion = a * b;
resto = a % b;

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`División: ${division.toFixed(2)}`);
console.log(`Mult.: ${multiplicacion}`);
console.log(`Resto: ${resto}`)

