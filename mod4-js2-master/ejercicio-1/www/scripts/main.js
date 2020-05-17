import {form, enviarMensaje, list, borrarElemento} from './utils.js'

// Listeners
form.addEventListener('submit', enviarMensaje)
list.addEventListener('click', borrarElemento)