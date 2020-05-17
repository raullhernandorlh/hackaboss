// es necesario que en el otro script hayamos exportado
import { nombrePersonaje, edad } from './utils.js'
// cuando me traigo una variable o una funcion debemos ponerla entre llaves
console.log(nombrePersonaje, edad)
import {creaPersonaje} from './utils.js'

creaPersonaje(nombrePersonaje)

// si tienes muchas variables puedes utilizar * y le agregas un alias
import * as datosPersonaje from './utils.js' // el alias en este caso sería personaje

console.log(datosPersonaje.edad)
// puedes aplicar destructuring para facilitar el uso
const { nodo } = datosPersonaje
console.log(nodo)


import cubo from './operations.js'

console.log(cubo(5))


import * as callbacks from './callbacks.js'
