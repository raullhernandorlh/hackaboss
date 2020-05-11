/**
 * El objetivo de este ejercicio es crear una estructura de datos
 * que contenga los datos de:
 *    - pacientes hospitalizados
 *    - pacientes en UCI
 *    - pacientes dados de alta
 *    - casos totales
 * 
 * Como resultados tendrás una estructura de la siguiente forma:
 * {
 *     <nombre comunidad autónoma>: {
 *         'fecha en formato AAAA-MM-DD': {
 *             hospitalizados: xx,
 *             uci: xx,
 *             altas: xx,
 *             casos: xx
 *         }
 *     },
 *    <nombre comunidad autónoma 2> : {...}
 *    ....
 * }
 * 
 * Crea una función para bajar los datos y almacenarlos en la estructura
 * con el formato indicado.
 * 
 * Crea, además, funciones para:
 *    - devolver el estado de la pandemia para un día. Esta función recibirá una fecha
 *      en formato AAAA-MM-DD y devolverá una estructura:
 *        {
 *            <nombre comunidad autónoma>: {
 *                hospitalizados: xx, 
 *                uci: xx, 
 *                altas: xx, 
 *                casos: xx
 *            }
 *        }
 * 
 * 
 * URLS:
 *    - hospitalizados: https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_hospitalizados.csv
 *    - uci: https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_uci.csv
 *    - altas: https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_altas.csv
 *    - casos: https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_casos.csv
 * 
 */