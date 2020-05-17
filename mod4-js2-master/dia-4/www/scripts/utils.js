// para poder exportar es necesario usar la pabalbra export
// y que el html el script tenga el type module
// <script src="/scripts/main.js" type="module"></script>


// export const nombrePersonaje = 'Bart'
// export let edad = 10
// export const nodo = 'hijo'

// export const creaPersonaje = nombre => {
//     console.log(`el personaje se llama ${nombre}`)
// }

const nombrePersonaje = 'Bart'
let edad = 10
const nodo = 'hijo'

const creaPersonaje = nombre => {
    console.log(`el personaje se llama ${nombre}`)
}
// otra forma de no tener que usar la palabra export en cada una de las variables
export {nombrePersonaje, edad, nodo,  creaPersonaje}
