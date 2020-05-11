// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
// 

const a = 1;
const numbers = [10, 20, 30, 40];

// const primerElemento = numbers[0];
// const segundoElemento = numbers[1];
// const ultimos = numbers.slice(2, 4);

const [primerElemento, segundoElemento, tercerElemento] = numbers; 

//console.log(primerElemento);
//console.log(segundoElemento);
//console.log(tercerElemento);

// const line = "Manolo, 34, 7";
// const [nombre, edad, nota] = line.split(',')


const line = "Manolo, Estevez, 34, 7";
const [nombre, , edad, nota] = line.split(',')
//console.log(nombre);
//console.log(edad);
//console.log(nota);

const values = [11, 22, 33, 44];
const [first, ...rest] = values;    // spread operator

console.log(values);
console.log(rest);

Math.max(...values);
Math.min(...values);


function calculaStudentInfoOld() {
    let media = 6;
    let notaTexto = 'Bien';
    // ...
    // result = ...

    return {
        media: media,
        notaTexto: notaTexto
    }

}

function calculaStudentInfo() {
    let media = 6;
    let notaTexto = 'Bien';
    // ...
    // result = ...

    /*return {
        media: media,
        notaText: notaTexto
    }*/

    return [media, notaTexto]
}

//const [media, notaTexto] = calculaStudentInfo();
const studentInfo = calculaStudentInfoOld();

//console.log(`${media} (${notaTexto})`);
console.log(`${studentInfo.media} (${studentInfo.notaTexto})`);

// último elemento
const last = values.slice(-1)
console.log(last);

/**
 * Objetos
 * 
 */
const coordenada = {x: 99, y: 45};
const {x,y} = coordenada;

console.log(`x: ${x}`);
console.log(`y: ${y}`);

const {media, notaTexto} = calculaStudentInfoOld();
console.log(`${media} - ${notaTexto}`);



const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith"
      },
      age: 35
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones"
      },
      age: 25
    }
  ];
  
  const [firstPerson, secondPerson] = people;
  const {name, family: {mother, father, brother}, age} = firstPerson;

  console.log(name);
  console.log(mother);

/*  for (let person of people) {
      console.log(`${person.name} - ${person.family.father}`)
  }
*/
/*
  for (let {name: n, family: { father: f } } of people) {
    console.log("Name: " + n + ", Father: " + f);
  }
  */



  