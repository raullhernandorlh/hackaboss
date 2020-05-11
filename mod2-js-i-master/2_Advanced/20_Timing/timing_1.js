/**
 * Fechas
 * 
 * Escribe una función que devuelva cuántos días
 * quedan hasta la fecha pasada como parámetro. Esta
 * última se pasa en milisegundos.
 * 
 */

function remainingDays(fechaObjetivo) {
    const fechaActual = new Date();

    return parseInt((fechaObjetivo - fechaActual) / 1000 / 3600 / 24);
}

const birthday = new Date(2020, 11, 5); // el 11 es Diciembre

const days = remainingDays(birthday);

if  (days > 0) {
    console.log(`Quedan ${days} días para tu cumpleaños`);
} else if (days === 0) {
    console.log(`Hoy es tu cumpleaños!`);
} else {
    // Math.abs convierte el valor negativo en positivo
    console.log(`Tu cumpleaños fue hace ${Math.abs(days)} días`);
}
