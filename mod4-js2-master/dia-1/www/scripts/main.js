// WINDOW

// Algunos métodos del objeto Window
// window.alert('hola')
// alert('hola')
// confirm('si sí o si no')
// prompt('¿una pregunta?')

// algunas propiedades

// Ancho y alto

let altura,
    anchura
altura = window.innerHeight
anchura = innerWidth

console.log(altura, anchura)

//location
let ubicacion = window.location
//-
// esto devuelve un objeto con datos como el protocolo
//que puede servir para verificar https: (ej: pagos en linea)

// si a la url le agrego una búsqueda con una query '?s=busqueda'
ubicacion = ubicacion.search
console.log(ubicacion) 
// puedes redireccionar con 
// window.location.href = 'http://twitter.com'

// history
// window.history.go(-2)

// navigator

let navigator = window.navigator
navigator = navigator.appName // devuelve Netscape acaso que sea explorer
navigator = window.navigator.appVersion // la version
navigator = window.navigator.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.3
navigator = window.navigator.language // es-ES

console.log(navigator)