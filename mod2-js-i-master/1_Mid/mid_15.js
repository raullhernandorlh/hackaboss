/**
 * En un array tenemos las velocidades medias realizadas
 * por un vehículo durante un intervalo de tiempo. Cada entrada
 * en el array representa un tramo de carretera.
 * 
 * Otro array almacena las velocidades máximas permitidas para cada tramo.
 * 
 * La aplicación debe devolver:
 *     a) un array donde cada posición indica, con un booleano,
 *        si el vehículo respetó la velocidad media máxima de ese
 *        tramo o no;
 * 
 *     b) si por cada 10 km/h de más se penaliza al conductor con 2 puntos,
 *        ¿cuánto ha penalizado en total a lo largo del tramo?
 * 
 * 
 * Ejemplo:
 *    speeds =    [100, 105, 90, 130]
 *    maxSpeeds = [120, 120, 80, 120]
 * 
 *    El array resultante será
 *              [true, true, false, false] 
 * 
 *    La penalización será: ((90-80) + (130-120))*2/10 = 4
 * 
 */

const speeds = [100, 105, 90, 130];
const maxSpeeds = [120, 120, 80, 120];

let result = [];
let kmhOverMax = 0;
let penalization = 0;

function calculatePenalization(speed, maxSpeed) {
    if (speed > maxSpeed) {
        return (speed - maxSpeed) * 2/10;
    } else {
        return 0;
    }
}

for (let i=0; i<speeds.length; i++) {
    result.push(speeds[i] < maxSpeeds[i]);
    kmhOverMax += calculatePenalization(speeds[i], maxSpeeds[i]);
}


/*
// OTRA FORMA
for (let i=0; i<speeds.length; i++) {
    result.push(speeds[i] < maxSpeeds[i]);
}

for (let i=0; i<speeds.length; i++) {
    if (speeds[i] > maxSpeeds[i]) {
        kmhOverMax = kmhOverMax + (speeds[i] - maxSpeeds[i]);
    }
}
*/

penalization = kmhOverMax * 2/10;

console.log(`Penalization: ${penalization}`);

console.log(result);