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
 * de condiciones. Dicha función recibirá el array de inmuebles,  el 
 * número mínimo de habitaciones, el número mínimo de metros y el
 * precio máximo.
 * 
 * Si no desea filtrar por alguna de las condiciones, el valor del parámetro
 * será -1
 * 
 */

 function filterHouses(products, minRooms, minMetres, maxPrice) {
    console.log(`minRooms: ${minRooms}`);
    console.log(`minMetres: ${minMetres}`);
    console.log(`maxPrice: ${maxPrice}`);

    let filteredHouses = [];

    for (let product of products) {

        //  (product.rooms >= minRooms || minRooms === -1) es equivalente a (product.rooms >= minRooms
        // porque cualquier número de habitaciones siempre será mayor que -1

        if ( product.rooms >= minRooms  && 
             product.metres >= minMetres  && 
             (product.price <= maxPrice || maxPrice === -1)) {

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

 // usuario1
 precioUsuario1 = 170000;
 habitacionesUsuario1 = -1;
 metrosUsuario1 = -1;

 // usuario2
 precioUsuario2 = -1;
 habitacionesUsuario2 = 3;
 metrosUsuario2 = -1;

 resultadoUsuario1 = filterHouses(houses, habitacionesUsuario1, metrosUsuario1, precioUsuario1);   // [{id:1, ...},{id: 2,...}] 
 resultadoUsuario2 = filterHouses(houses, habitacionesUsuario2, metrosUsuario2, precioUsuario2);   // [{id:1, ...},{id: 2,...}] 

 console.log(resultadoUsuario1);
 console.log(resultadoUsuario2);
