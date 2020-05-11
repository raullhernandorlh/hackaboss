/**
 * ¿Y si quisiéramos hacer varias descargas?
 * 
 * En este ejercicios y los siguientes analizaremos
 * los pros y contras de distintas aproximaciones. 
 * 
 * La alternativa presentada en este ejercicio propone
 * lanzar las tres peticiones de manera consecutiva, primero
 * la del 2017, luego 2018 y finalmente 2019. Sin embargo, 
 * si ejecutamos el código varias veces observaremos que 
 * que el orden de los `console.log` no coincide con el orden
 * en que el que pedimos las descargas. 
 * 
 * El motivo de este comportamiento es que cuando pedimos 
 * el segundo fichero, la descarga del primero aún está en marcha
 * y no podemos suponer que vaya a terminar antes, ya
 * que la red puede sufrir distintos retardos o incluso ser el primer
 * fichero mucho más grande que el primero.
 * 
 */

// a) ¿Cómo descargar los tres ficheros, uno por cada año?
// b) Pensar si se puede asegurar que haya orden entre ellos, es decir, descargarse el del 2018 cuando
// el de 2017 ya está listo, y el de 2019 cuando el de 2018 ya está listo 

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
    } );

axios
    .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv')
    .then( response => {
        const csvData2018 = response.data.split('\n');
        const ayuntamiento = 'boiro';

        const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2018, ayuntamiento);

        console.log(`[2018] ${ayuntamiento}: ${counterOfBeachs}`);
    });

axios
    .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv')
    .then( response => {
        const csvData2019 = response.data.split('\n');
        const ayuntamiento = 'boiro';

        const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2019, ayuntamiento);

        console.log(`[2019] ${ayuntamiento}: ${counterOfBeachs}`);
    });

// código para comparar cada ayuntamiento con otros años
