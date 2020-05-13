// Crear, añadir, eliminar un nodo

const link = document.createElement('a') // crea el elmento (en la nada)
link.className = 'enlace' // añade class
link.id = 'nuevo' // añade id
link.setAttribute('href', 'http://google.com')
link.textContent = 'Google' // forma de cambiar el texto
const text = document.createTextNode('Link real')
link.appendChild(text)// forma de añadir texto a mayores
link.textContent = 'Google' // este pisa al anterior

document.getElementById('title').appendChild(link)

console.log(link)


// Modificar y reemplazar nodos

const newHeading = document.createElement('h1')
newHeading.id = 'new-heading'
newHeading.appendChild(document.createTextNode('El nuevo encabezado'))
const oldHeading = document.getElementById('title') // intentamos llegar al elento que queremos substisuir
const parent = oldHeading.parentElement // vamos al padre
parent.replaceChild(newHeading, oldHeading)

console.log(newHeading)


// Eliminar nodos

// para añadir y modificar hay que haceerlo desde el padre 
// para borrarlos hay que hacerlo directamente en el elemento

const links = document.querySelectorAll('nav a')
const newLink = links[0]
newLink.remove()
const otherLink = links[3]
otherLink.parentNode.removeChild(otherLink) // otra forma de eliminar el elemnto


console.log(links)

// setAtribute

const firstLi = document.querySelector('ul li')


firstLi.classList.add('new-class')
firstLi.classList.remove('new-class')
firstLi.setAttribute('data-id', 20)// añadiendo atributos personalizados
firstLi.hasAttribute('data-id') // para ver si tiene cierto atributo
firstLi.removeAttribute('data-id')

console.log(firstLi)