/**
 * Uso de promesas considerando que puede haber errores en 
 * las descargas de datos
 * 
 * 
 * 
 */


const axios = require('axios');
const process = require('process');
const utils = require('./utils');

async function bajaDatosConcurrente(ayuntamiento) {
    //const URL_2017 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv';
    const URL_2017 = 'https://abertoasdfsadfs.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-fich.noexiste';
    const URL_2018 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv';
    const URL_2019 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv';

    const promesa_2017 = axios.get(URL_2017);
    const promesa_2018 = axios.get(URL_2018);
    const promesa_2019 = axios.get(URL_2019);

    let respuestas;
    try {
        respuestas = await Promise.all([promesa_2017, promesa_2018, promesa_2019])
    } catch (e) {
        console.log('error en el promise all');
        throw new Error('download-error')
    }

    const respuesta_2017 = respuestas[0].data.split('\n');
    const respuesta_2018 = respuestas[1].data.split('\n');
    const respuesta_2019 = respuestas[2].data.split('\n');

    const counter2017 = utils.getNumberOfFlagsByCouncil(respuesta_2017, ayuntamiento);
    const counter2018 = utils.getNumberOfFlagsByCouncil(respuesta_2018, ayuntamiento);
    const counter2019 = utils.getNumberOfFlagsByCouncil(respuesta_2019, ayuntamiento);

    return {
        2017: counter2017,
        2018: counter2018,
        2019: counter2019
    }
}

async function bajaDatosSecuencial(ayuntamiento) {
    const URL_2017 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv';
    const URL_2018 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv';
    const URL_2019 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv';
    
    const respuesta_2017 = await axios.get(URL_2017);
    const respuesta_2018 = await axios.get(URL_2018);
    const respuesta_2019 = await axios.get(URL_2019);
    
    const counter2017 = utils.getNumberOfFlagsByCouncil(respuesta_2017.data.split('\n'), ayuntamiento);
    const counter2018 = utils.getNumberOfFlagsByCouncil(respuesta_2018.data.split('\n'), ayuntamiento);
    const counter2019 = utils.getNumberOfFlagsByCouncil(respuesta_2019.data.split('\n'), ayuntamiento);

    return {
        2017: counter2017,
        2018: counter2018,
        2019: counter2019
    }
}

( async () => {
    const ayuntamiento = 'boiro';
    let resultado;

    try {
        resultados = await bajaDatosConcurrente(ayuntamiento)
    } catch(e) {
        console.log(e);
        process.exit();
    }

    console.log(`[2017] ${ayuntamiento}: ${resultados['2017']}`);
    console.log(`[2018] ${ayuntamiento}: ${resultados['2018']}`);
    console.log(`[2019] ${ayuntamiento}: ${resultados['2019']}`);
})();
