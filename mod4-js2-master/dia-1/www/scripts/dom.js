// DOM 

let element = document // toda la estructura de html

element = document.all // 'HTMLAllCollection' te muestra una colección (algo muy parecido a un array) de todos los nodos;
element = document.all[10] // devuelve el elmento de índice 10
element = document.head
element = document.body
element = document.domain // devuelve el dominio
element = document.URL // devuelve URL
element = document.links // HTMLCollection(5) [a, a, a, a, a] todos los links
element = document.forms
element = document.forms[0]
element = document.forms[0].id // id
element = document.forms[0].className // me devuelve las clases como un string
element = document.forms[0].classList // como un array
element = document.images
element = document.images[2]
element = document.images[1].getAttribute('src')
element = document.images[1].getAttribute('alt')

console.log(element)


let images = document.images //  HTMLCollection
let imagesArr = Array.from(images)

imagesArr.forEach(image => {
    console.log(image)
})

console.log(imagesArr)

