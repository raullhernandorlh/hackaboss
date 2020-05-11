 // 4) devolver un array con las notas de los estudiantes
 const students = [
    {
        name: 'Jose',
        grades: [1, 2, 3]
    },
    {
        name: 'María',
        grades: [10, 9, 8]
    }
]

// SOLUCIÓN 1: clásica
/*
let averageGrades = [];

for (let student of students) {
    let suma = 0;

    for (let grade of student.grades) {
        suma += grade
    }

    averageGrades.push(suma/student.grades.length);
}
*/

// SOLUCIÓN 2: map
/*
let averageGrades = students.map( function (student) {
    let suma = 0;

    for (let grade of student.grades) {
        suma += grade;
    }

    return suma/student.grades.length;
});

console.log(averageGrades);
*/

// SOLUCIÓN 3
/*
let averageGrades = students.map( student => {
    let suma = 0;

    for (let grade of student.grades) {
        suma += grade;
    }

    return suma/student.grades.length;
});

console.log(averageGrades);
*/

// SOLUCIÓN 4: arrow function que procesa student
/*
const calculaMedia = student => {
    let suma = 0;

    for (let grade of student.grades) {
        suma += grade;
    }

    return suma/student.grades.length;
}

let averageGrades = students.map( calculaMedia );

console.log(averageGrades);
*/
// SOLUCIÓN 5
const average = numbers => {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total/numbers.length;
}

let averageGrades = students.map( (student) => average(student.grades) );

console.log(averageGrades);

