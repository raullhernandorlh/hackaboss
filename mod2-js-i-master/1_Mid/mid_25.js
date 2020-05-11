/**
 * Estamos programando una página de una inmobiliaria. 
 * 
 * Los inmuebles disponibles se representan como un array de objetos
 * con la siguiente estructura:
 * 
 * {
 *    id: 1
 *    name: 'Piso en el centro',
 *    rooms: 2,
 *    metres: 100,
 *    price: 400
 * }
 *  
 * Escribe una función para filtrar los inmuebles que cumplan una serie
 * de condiciones. Dicha función recibirá el array de inmuebles, y un objeto
 * representando los filtros a aplicar. Esto objeto tendrá la siguiente estructura:
 * 
 * {
 *    rooms: <mínimo número de habitaciones>
 *    price: <precio máximo>
 *    metres: <metros cuadrados mínimos de la vivienda>
 * }
 * 
 * En caso de no existir alguno de los campos se considera que no se
 * desear filtrar por él.
 * 
 */

 function filterHouses(products, filters) {
    let filteredHouses = [];

    // precedencia de operadores

    for (let product of products) {
        if ( (product.rooms >= filters.rooms || filters.rooms == undefined) &&
             (product.metres >= filters.metres || filters.metres == undefined) && 
             (product.price <= filters.price || filters.price == undefined)) {

            filteredHouses.push(product);
        }
    }

    return filteredHouses;
 }


 let houses = [
    {
        id: 1,
        name: 'Piso en el centro',
        rooms: 2,
        metres: 80,
        price: 100000
    },
    {
        id: 2,
        name: 'Piso calle X',
        rooms: 3,
        metres: 90,
        price: 150000
    },   
    {
        id: 3,
        name: 'Casa en la playa',
        rooms: 4,
        metres: 120,
        price: 200000
    },
 ]

let filter1 = filterHouses(houses, {price: 170000});   // [{id:1, ...},{id: 2,...}]
let filter2 = filterHouses(houses, {rooms:3 });   // [{id:2, ...},{id: 3,...}]
let filter3 = filterHouses(houses, {rooms:3, metres:600 });   // [{id:2, ...},{id: 3,...}]

 console.log(filter3)

// Ejercicio: ¿se podría hacer sin saber a priori qué campos tiene filters? 