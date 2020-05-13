// Acceso a varios nodo
let sections = document.getElementsByClassName('section')

sections[2].style.background = 'red'

sections = document.getElementById('principal').getElementsByClassName('section')

console.log(sections)

// getElementsByTagName devuelve todos los elmentos con esa etiqueta
let links = document.getElementsByTagName('a')
links[2].style.color = 'red'
// Si queremos aplicarle métodos debemos transformar los HTMLCollection en Array
links = Array.from(links)

links.forEach(link => console.log(link.textContent))

// querySelectorAll esto devuelve un nodeList por lo tanto se puede trabajar directamente con él

links = document.querySelectorAll('nav a')
links[3].style.color = 'orange'

links.forEach(link => console.log(link.textContent))

links = document.querySelectorAll('li:nth-child(odd) a') 

links.forEach(link => {
    link.style.background = 'black'
})

console.log(links)
