/**
 * Promise.all
 * 
 * En este ejercicio veremos cómo nos permite Javascript 
 * ejecutar varias promesas en paralelo y ejecutar nuestro 
 * código cuando terminen todas.
 * 
 * Para ello usaremos la sentencia `Promise.all` como se indica en el ejemplo
 */

const axios = require('axios');
const utils = require('./utils');

const URL_2017 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv';
const URL_2018 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv';
const URL_2019 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv';

const promesa_2017 = axios.get(URL_2017);
const promesa_2018 = axios.get(URL_2018);
const promesa_2019 = axios.get(URL_2019);

Promise.all([promesa_2017, promesa_2018, promesa_2019])
.then( data => {
    const respuesta_2017 = data[0].data.split('\n');
    const respuesta_2018 = data[1].data.split('\n');
    const respuesta_2019 = data[2].data.split('\n');

    const ayuntamiento = 'boiro';

    const counter2017 = utils.getNumberOfFlagsByCouncil(respuesta_2017, ayuntamiento);
    const counter2018 = utils.getNumberOfFlagsByCouncil(respuesta_2018, ayuntamiento);
    const counter2019 = utils.getNumberOfFlagsByCouncil(respuesta_2019, ayuntamiento);

    console.log(`[2017] ${ayuntamiento}: ${counter2017}`);
    console.log(`[2018] ${ayuntamiento}: ${counter2018}`);
    console.log(`[2019] ${ayuntamiento}: ${counter2019}`);
});

console.log('línea al final')

// [+] más limpio
// [+] más rápido
// [?] se ejecuta en paralelo