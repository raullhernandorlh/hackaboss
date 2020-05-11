averageGrades = [1, 6, 9, 5.4]
// output = [false, true, true, true]
output = [];

for (grade of averageGrades) {

   if (grade >= 5) {
      output.push(true);
   } else {
      output.push(false);
   }
}

output2 = []
for (grade of averageGrades) {
   output2.push(grade >= 5);
}


console.log(output)

salaries = [20000, 9000, 45000, 2000, 60000]
// irpfs = [??, ??, ??, ??, ??, ??]
irpfs = []

for (salary of salaries) {
   inicial = 12450
   medio = 20200
   medioAlto = 35200
   alto = 60000
   irpfInicial = (12450 * 0.19)
   irpfMedio = irpfInicial + ((20200 - 12450) * 0.24)
   irpfMedioAlto = irpfMedio + ((35200 - 20200) * 0.3)
   irpfAlto = irpfMedioAlto + ((60000 - 35200) * 0.37)

   if (salary <= inicial) {
      irpfs.push(salary * 0.19);
   } else if (salary > inicial && salary <= medio) {
      irpfs.push(irpfInicial + ((salary - inicial) * 0.24));
   } else if (salary > medio && salary <= medioAlto) {
      irpfs.push(irpfMedio + ((salary - medio) * 0.3));
   } else if (salary > medioAlto && salary <= alto) {
      irpfs.push(irpfMedioAlto + ((salary - medioAlto) * 0.37));
   } else {
      irpfs.push(irpfAlto + ((salary - alto) * 0.45))
   }

}

console.log(irpfs);



grades = [[1, 2, 3, 4], [6, 7, 10]]
averages = []
for (grade of grades) {
   suma = 0

   for (gradeIndividual of grade) {
      suma = suma + gradeIndividual;

      console.log(suma)
   }

   averages.push(suma/grade.length);
}
console.log(averages)