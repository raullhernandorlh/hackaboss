/**
 * En los próximos ejercicios veremos cómo hacer peticiones de red,
 * es decir, pedirle a `NodeJS` que descargue de Internet el contenido
 * de una `URL`. Esta descarga no será inmediata, así que estudiaremos
 * un mecanismo para indicarle cuál es el código que tiene que ejecutar una 
 * vez finalizada.
 * 
 * Antes de eso, implementemos una serie de funciones auxiliares que, de paso,
 * nos sirven de repaso de cómo iterar `arrays`, bien con `for` tradicional
 * o con `map/filter`
 * 
 * El ejercicio consiste en implementar dos funciones que realizan estadísticas
 * sobre datos reales: las banderas azules en ayuntamientos gallegos. En esta
 * primera aproximación leeremos los datos de disco. En ejercicios posteriores
 * lo reimplementaremos para descargarlo directamente de la red.
 * 
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
    .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv')
    .then( response => {
        const csvData2019 = response.data.split('\n');
        console.log(`Número de líneas:  ${csvData2019.length}`)
        const ayuntamiento = 'boiro';

        const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2019, ayuntamiento);

        console.log(`${ayuntamiento}: ${counterOfBeachs}`);
    });


console.log('Los datos ya han sido pedidos');

/*
const counterOfBeachs = utils.getNumberOfFlagsByCouncil(bandeiras, ayuntamiento);

const totalNumberOfBeaches = utils.getTotalNumberOfBeaches(bandeiras);
const councilsWithMoreFlags = utils.getCouncilsWithMoreFlags(bandeiras, 2);
const closestBeach = utils.getCloseBeachTo(bandeiras, longitud, latitud);

console.log(`${ayuntamiento}: ${counterOfBeachs}`);
console.log(`Número total de playas con bandera azul: ${totalNumberOfBeaches}`);
console.log(`La playa más cercana es: ${closestBeach}`);

console.log(councilsWithMoreFlags);
*/
// NOTA: para poder ejecutar este código, es necesario que ejecutéis
// al principio, en la consola, la siguiente instrucción:
//   npm install @turf/turf
//   npm install axios