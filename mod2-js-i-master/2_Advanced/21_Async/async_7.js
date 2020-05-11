/**
 * Promises: async/await
 * 
 * En el ejercicio anterior vimos como, gracias
 * a `Promise.all` podemos lanzar varias promesas
 * al mismo tiempo y esperar ejecutar el código
 * que nos interese cuando estén todas resueltas.
 * 
 * En este vamos a ver cómo hacer para ejecutarlas en serie,
 * es decir, una detrás de otra, pudiendo ejecutar código 
 * en medio. En realidad es algo que ya hicimos en `async_6`, 
 * si bien ahora introduciremos una sintaxis más compacta
 * y moderna: `async/await`
 * 
 * En lugar de lanzar la promesa con `then` y pasarle un `callback`
 * a continuación, `await` permite asignar el valor devuelto
 * por una promesa directamente a una variable:
 * 
 *   const datos = await axios.get(... url ...)
 * 
 * Sin embargo, Javascript no permite usar `await` en cualquier
 * parte del código. Debe hacerse únicamente en contextos
 * asíncronos. Un contexto es asíncrono cuando está precedido
 * de la palabra `async`, por ejemplo en una función:
 * 
 *    getYearlyBeachesData = async (council) => { 
 *        ...
 *        const datos = await axios.get ...
 *        ...
 *    }
 * 
 * 
 */
// Ejecutar promesas secuencialmente


const axios = require('axios');
const utils = require('./utils');

async function bajaDatosConcurrente(ayuntamiento) {

    const URL_2017 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv';
    const URL_2018 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv';
    const URL_2019 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv';

    const promesa_2017 = axios.get(URL_2017);
    const promesa_2018 = axios.get(URL_2018);
    const promesa_2019 = axios.get(URL_2019);

    const respuestas = await Promise.all([promesa_2017, promesa_2018, promesa_2019])

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

    const resultados = await bajaDatosConcurrente(ayuntamiento)
    
    console.log(`[2017] ${ayuntamiento}: ${resultados['2017']}`);
    console.log(`[2018] ${ayuntamiento}: ${resultados['2018']}`);
    console.log(`[2019] ${ayuntamiento}: ${resultados['2019']}`);
})();


console.log('Última línea');


/*
intervalId = setInterval(() => {
    console.log('interval...')
}, 500)
*/
