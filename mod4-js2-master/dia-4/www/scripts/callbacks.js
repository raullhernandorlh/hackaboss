// sin darnos cuenta ya hemos usado callbacks por ejemplo en el forEach
const ciudades = ['Lugo', 'Ourense', 'Vigo']

// foEach es un metodo es decir una funcion que llama a otra
// ciudades.forEach(ciudad => console.log(ciudad))
const callback = ciudad => console.log(ciudad)
ciudades.forEach(callback)

// son utiles para consumir un API
// Supongamos que estas consumiendo una API de países y en el momento que
// han cargado entra uno nuevo ya no vas a tener ese registro por que llegó despues
// habría que usar un callback para traerlo
let paises = ['Francia', 'España', 'Portugal']

// vamos a simular que nos traemos esos países despues de 3s

const mostrarPaises = () => {
    setTimeout(() => {
        let html = ''
        paises.forEach(pais => {
            html+= `<li>${pais}</li>`
        })
        document.getElementById('list').innerHTML = html
    }, 3000) // lo usamos para simular el tiempo que tarda el servidor en responder
}
mostrarPaises()

// Si alguien agrega un nuevo país no se va a ver
// ya se han cargado los anteriores para eso son útiles los callbacks
// para que cada vez que se añade un nuevo país mostraPaises se vuelva a ejecutar

// Se agrega un nuevo páis despues de 5s
const nuevoPais = (pais, callback) => {
    setTimeout(()=>{
       paises = [...paises, pais]
       callback()
    }, 5000)
}

// Añadir pais
nuevoPais('Alemania', mostrarPaises)