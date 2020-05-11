/**
 * ¿Y si quisiéramos hacer varias descargas?
 * 
 * Esta implementación soluciona los problemas de la anterior.
 * 
 * Nota cómo se encadenan las promesas: `axios.get` devuelve
 * una `Promesa` y a su vez, el código que ejecutamos en el 
 * `then` devuelve otra `Promesa`. De esta forma se pueden
 * encadenar. Observa cómo el nivel de indentación del código
 * es el mismo en todos los casos.
 * 
 * ¿Qué pasa si alguna de las descarga no funciona? Las `Promesas`
 * incluyen un mecanismo para tratar los errores: la clásula `catch`.
 * Si hay algún error en alguna `Promesa` se para la cadena de 
 * ejecución y se salta a ejecutar el código del `catch`
 * 
 * Prueba a introducir algún error en las URL (por ejemplo sustituír 
 * el .gal por .noexiste). Hazlo primero en la de 2017 y luego en las demás.
 * Observa cómo para las promesas ya ejecutadas, se devuelve el 
 * resultado correctamente, mientras que las posteriores no se ejecutan.
 */


const axios = require('axios');
const utils = require('./utils');

// const latitud = 42.1459800;
// const longitud = -8.8210400;

// const latitud = 42.2328200;
// const longitud = -8.7226400;

const latitud = 42.1166700;
const longitud = -8.8500000;

// const bandeiras = fs.readFileSync(`${__dirname}/../../resources/bandeiras_azuis_2019.csv`, 'latin1').toString().split('\n');
axios
    .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv')
    .then( response => {
        const csvData2017 = response.data.split('\n');
        const ayuntamiento = 'boiro';

        const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2017, ayuntamiento);

        console.log(`[2017] ${ayuntamiento}: ${counterOfBeachs}`);

        return axios
            .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv')
    })
    .then( response => {
        const csvData2018 = response.data.split('\n');
        const ayuntamiento = 'boiro';

        const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2018, ayuntamiento);

        console.log(`[2018] ${ayuntamiento}: ${counterOfBeachs}`);

        return  axios
            .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv')
    })
    .then( response => {
        const csvData2019 = response.data.split('\n');
        const ayuntamiento = 'boiro';

        const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2019, ayuntamiento);
        // TENEMOS TODOS LOS DATOS

        console.log(`[2019] ${ayuntamiento}: ${counterOfBeachs}`);
    });

// [+] Código  es limpio
// [-] Es lenta
// [?] Se ejecuta en secuencia

console.log('Última línea')
