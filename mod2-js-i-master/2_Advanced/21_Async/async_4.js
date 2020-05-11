/**
 * ¿Y si quisiéramos hacer varias descargas?
 * 
 * En este ejercicio se plantea una segunda manera de realizar
 * las descargas: esperar a iniciar una nueva mientras no acabe 
 * la anterior.
 * 
 * Observa en el código cómo se encadenan.
 * 
 * Esta implementación tiene la siguientes características:
 *    - asegura que la ejecución se realiza en el orden deseado
 *    - tarda más que la anterior (comprobadlo). En el ejercicio
 *      anterior había tres descargas de manera simultáneas, mientras
 *      que aquí esperamos a que una termine para realiza la otra
 *    - el código es `sucio`: estamos anidando mucho código, haciendo
 *      que los niveles de indentación crezcan. Esto complica el
 *      manteniento y favorece la aparición de bugs (es fácil equicarse
 *      e introducir una nueva línea donde no se pretendía hacerlo)
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
    .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv')
    .then( response => {
        const csvData2017 = response.data.split('\n');
        const ayuntamiento = 'boiro';

        const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2017, ayuntamiento);

        console.log(`[2017] ${ayuntamiento}: ${counterOfBeachs}`);

        axios
            .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv')
            .then( response => {
                const csvData2018 = response.data.split('\n');
                const ayuntamiento = 'boiro';

                const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2018, ayuntamiento);

                console.log(`[2018] ${ayuntamiento}: ${counterOfBeachs}`);

                axios
                    .get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv')
                    .then( response => {
                        const csvData2019 = response.data.split('\n');
                        const ayuntamiento = 'boiro';
                
                        const counterOfBeachs = utils.getNumberOfFlagsByCouncil(csvData2019, ayuntamiento);
                

                        // TENEMOS TODOS LOS DATOS
                        console.log(`[2019] ${ayuntamiento}: ${counterOfBeachs}`);
                    });
            });
    } );


// [-] Código no es limpio
// [-] Es lenta
// [?] Se ejecuta en secuencia

console.log('Última línea')

setInterval(() => {
    console.log('Interval...');
}, 500)