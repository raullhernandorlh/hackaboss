// Acceso a un nodo
// getElementById  devuelve el elemento que coincida el id
let element = document.getElementById('formulario') //
element = document.getElementById('formulario').className 
element = document.getElementById('title').textContent // Devuelve el texto interno
element = document.getElementById('title').innerText 
element = document.getElementById('title')

element.style.background = '#ccc'
element.style.color= '#fff'

// cambiar el texto
element.textContent = 'No se que día'
element.innerText = 'Otro texto'

// querySelector  Devuelve el primer elemento que tenga cualquier selector de css

element = document.querySelector('#title')
element = document.querySelector('li a') // se puede utilizar tags, class, id o combinación

element = document.querySelector('li:last-child a') 

console.log(element)
