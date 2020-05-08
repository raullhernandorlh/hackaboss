# 3.6. JS - Operadores lógicos y relacionales

En JavaScript podemos distinguir distintos tipos de operadores lógicos. Cabe destacar que hay que prestar atención e intentar no confundir `===` con `=` porque implican distintas cosas. El primero es un operador de comparación mientras que el segundo hace referencia a una asignación. La sintaxis es tal y como sigue:

| <div align="center">**Operador**</div> | <div align="center">**Descripción**</div> |
| ------ | ------ |
| <div align="center">**a === b**</div> | <div align="center">Igual que</div> |
| <div align="center">**a !== b**</div> | <div align="center">Distinto de</div> | 
| <div align="center">**a > b**</div> | <div align="center">Mayor que</div> | 
| <div align="center">**a < b**</div> | <div align="center">Menor que</div> | 
| <div align="center">**a >= b**</div> | <div align="center">Mayor o igual que</div> | 
| <div align="center">**a <= b**</div> | <div align="center">Menor o igual que</div> | 
| <div align="center">**a && b**</div> | <div align="center">Devuelve `true` si ambas condiciones se cumplen</div> | 
| <div align="center">**a &#124;&#124; b**</div> | <div align="center">Devuelve `true` si al menos una de las condiciones se cumple</div> | 
| <div align="center">**!a**</div> | <div align="center">Niega la condición, si es `true` pasa a ser `false`y viceversa</div> |

**¡Ojo!** Es muy probable que encontréis ejemplos con el operador de igualdad con dos símbolos de igualdad: `==`. Esta forma no es recomendable a día de hoy porque no es un método estricto y no siempre obtendremos el resultado esperado. Lo mismo ocurre con el operador de distinción, el cuál puede ser encontrado en la web con un único símbolo de igualdad: `!=`. ¡No utilicéis estos dos operadores bajo ningún concepto!

&nbsp;

<div align="center">[**Lectura anterior**](./js-5.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./js-7.md)</div>