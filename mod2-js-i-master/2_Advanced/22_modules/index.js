const libreriaMatematica = require('./math');
const ui = require('./ui');

// nodejs require vs import

const dato1 = 10;
const dato2 = 30;

const text = `La suma de ${dato1} y ${dato2} es ${ libreriaMatematica.suma(dato1, dato2)}`;

ui.prettyPrint(text);
