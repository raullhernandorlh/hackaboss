// Traversing 
// es poder recorrer todos los nodos del DOM (de una forma que el css no puede)

const main = document.querySelector('#principal')

let nodes = main.childNodes 
// salen todos los nodos en una nodeList, los espacios salen como text
nodes = main.children // asi serian un HTMLCOLLECtion
nodes = Array.from(nodes)

nodes = nodes[3].nodeType // 1
// 1= Elementos HTML
// 2 = atributos
// 3 = textos
// 8 = comentarios
// 9 = documentos
// 10 = Doctype

console.log(nodes)

let nav = document.querySelector('nav')
nav = nav.children[0].children[1].children[0].textContent
nav = document.querySelector('nav').lastChild // accede al último nodo en este caso un text
nav = document.querySelector('nav').children[0].lastElementChild // ultimo hijo como elemnto (no text)
nav = document.querySelector('nav').children[0].firstElementChild // primero
nav = document.querySelector('nav').children[0].childElementCount // Cuenta le número de hijos

console.log(nav)
// Ahora vamos a subir de hijo al padre

const links = document.querySelectorAll('nav a')
let link = links[0].parentNode // para acceder al nodo padre
link = links[0].parentElement // recomendado por utilizar siempre (...ElementChild)

link = links[2].parentElement.parentElement.firstElementChild
link.innerText = 'hola'
console.log(link)