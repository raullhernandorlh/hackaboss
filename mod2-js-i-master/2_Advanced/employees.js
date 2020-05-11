/**
 * 
 * El objetivo de este ejercicio es practicar con las llamadas
 * asíncronas. 
 * 
 * Usaremos una API de pruebas que contiene información sobre
 * trabajadores de una empresa.
 * 
 * Haremos uso de dos URLs:
 *    - URL para obtener la lista de trabajadores:
 *          http://dummy.restapiexample.com/api/v1/employees
 * 
 *    - URL para obtener la información detallada de un trabajador:
 *          http://dummy.restapiexample.com/api/v1/employee/<id del trabajador>
 * 
 * 
 * El objetivo es que hagáis una aplicación para averiguar:
 *    - ¿Cuál es el trabajador que más gana? Indica nombre y salario
 *    - ¿Cuál el que menos gana?
 *    - ¿Cuál es la media de los salarios?
 * 
 */

 const axios = require('axios');

 const URL_EMPLOYEE = 'http://dummy.restapiexample.com/api/v1/employee/';

 async function retrieveData() {
    const responseEmployees = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
    const employees = responseEmployees.data.data;
    
    /*let employeePromises = [];

    for (let employee of employees) {
        console.log(employee);
        console.log(`${URL_EMPLOYEE}${employee.id}`)
        employeePromises.push(axios.get(`${URL_EMPLOYEE}${employee.id}`));
    }
    */

    let employeePromises = employees.map( employee => axios.get(`${URL_EMPLOYEE}${employee.id}`));

    const listOfDetailedEmployees = await Promise.all(employeePromises);

 }

/*
 axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response => {
    const employees = response.data.data;
    let employeePromises = [];

    for (let employee of employees) {
        employeePromises.push(axios.get(`${URL_EMPLOYEE}${employee.id}`));
    }

    Promise.all(employeePromises).then(resultado => {

    })

 })
 .catch(error => {
     console.log(error)
 })

*/

retrieveData()
.then(resultados => {

})
.catch(error => {
    console.log(' Imposible realizar la operación ')
})