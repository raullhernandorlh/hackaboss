// Variables
const result = document.getElementById('result')
const txt = document.getElementById('txt')
const json = document.querySelector('#json')
const api = document.getElementById('api')

//Funciones

const loadTxt = () => {
    fetch('/data/datos.txt')
        .then(res => {
            return res.text()
        })
        .then(data => {
            console.log(data)
            result.textContent = data
        })
        .catch(error => {
            console.log(error)
        })
}

const loadJson = () => {
    fetch('/data/empleados.json')
        .then(res => {
            return res.json()
        })
        .then(data => {
            let listaEmpleados = ''
            data.forEach(empleado => {
                listaEmpleados += `<li>${empleado.name} : ${empleado.position}</li>`
            });
            result.innerHTML = listaEmpleados
        })
        .catch(error => {
            console.log(error)
        })
}

const loadApi = () => {
    fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(photos => {
            let listaFotos = ''
            photos.forEach(photo => {
                listaFotos+= `
                    <li>
                        <a href="${photo.post_url}" >Vermás</a>
                        ${photo.author}
                    </li>
                `
            })
            result.innerHTML = listaFotos
        })
        .catch(error => {
            console.log(error)
        })
}


//EventListeners

txt.addEventListener('click', loadTxt)
json.addEventListener('click', loadJson)
api.addEventListener('click', loadApi)
