/**
 * Elimina los duplicados
 * 
 * Ejemplo:
 *   - Array entrada: [1,2, 2, 3, 4 ,4, 1]
 *   - Array salida:  [1,2,3,4]
 * 
 */

 input = [1,2, 2, 3, 4 ,4, 1];
 output = []

/*
 for (i=0; i<input.length ; i++) {
    if (output.indexOf(input[i]) == -1) {
      output.push(input[i]);
    }
 }
 */

 for (i=0; i<input.length; i++) {
   found = false;

   for (j=i+1; j<input.length; j++) {
       if (input[i] == input[j]) {
          found = true
       }
    }

    if (found == false) {
       output.push(input[i]);
    }
 }

 console.log(output)