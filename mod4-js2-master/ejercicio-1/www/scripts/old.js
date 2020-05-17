// Variables
const form = document.getElementById('form')
const list = document.getElementById('list')


// Funciones
const addElemento = elemento => {
    list.appendChild(elemento)
}

const borrarElemento = e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
}

const crearElemento = mensaje => {
    const li = document.createElement('li')
    li.textContent = mensaje
    const button = document.createElement('button')
    button.classList = 'delete'
    button.textContent = 'x'
    li.appendChild(button)

    addElemento(li)
}

const enviarMensaje = e => {
    e.preventDefault()
    crearElemento(e.target.messageTextarea.value) // message es el valor de el name del textarea
}

// Listeners
form.addEventListener('submit', enviarMensaje)
list.addEventListener('click', borrarElemento)
