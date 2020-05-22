// variables para acceder a diferentes nodos
const map = document.getElementById('iframe-map')
const geoButton = document.querySelector('.geo-button')
const data = document.getElementById('data')

// funcion que nos devuelve el objeto de geolocation
const success = pos =>  {
    console.log(pos)
    const {latitude, longitude, accuracy} = pos.coords
    console.log('Latitud : ' + latitude)
    console.log('Longitud: ' + longitude)
    console.log('Radio de precisión ' + accuracy + ' m')
    map.src = `http://maps.stamen.com/toner/embed#15/${latitude}/${longitude}`
    data.innerHTML = `
        <div>Latitud : <strong>${latitude}</strong></div>
        <div>Longitud: <strong>${longitude}</strong></div>
        <div>Radio de precisión: <strong>${accuracy} m</strong></div>
        `
}
const error = err => {
    console.warn('ERROR(' + err.code + '): ' + err.message)
}
// ubicación actual del dispositivo
// navigator.geolocation.getCurrentPosition(success, error)
// lo metemos en una función para usarlo en un listener
const geo = () => navigator.geolocation.getCurrentPosition(success, error)

// añadimos un listener al botón para que se geocalice en ese momento
geoButton.addEventListener('click', geo)
