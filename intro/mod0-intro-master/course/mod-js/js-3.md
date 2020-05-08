# 3.3. JS - Declaración de variables

Una variable puede ser declarada de tres maneras:

- Con la palabra clave **var**. Esta sintaxis está obsoleta, por tanto, no debemos utilizarla bajo ningún concepto. Eso no quiere decir que a día de hoy no siga funcionando, de hecho, muchos ejemplos de código JavaScript que encontrarás en internet emplearán esta sintaxis. Esto es debido a que **let** y **const** fueron incorporadas en la versión ECMAScript 6 del 2015. 

```javascript
// Antes de ECMAScript 6 todas las variables eran declaradas de esta manera.
var totalDeAlumnos = 24;
```

- Con la palabra clave **let**. Esta palabra reservada puede ser usada para declarar una variable que puede sufrir cambios en un futuro. La edad de una persona es un buen ejemplo de esto, dado que cada año irá cambiando. 

```javascript
let edad = 13;
```

- Con la palabra clave **const**. Sirve para declarar variables que no sufrirán alteración ninguna en ningún momento posterior. Por ejemplo, el nombre de una persona se supone que no va a cambiar nunca. Si intentamos cambiar el valor de una variable declarada con **const** en un futuro, nos saltaría un error advirtiendo que no podemos hacerlo. No es del todo cierto que el valor de una variable declarada con const no puede ser cambiado, pero ese tema lo trataremos durante el transcurso del bootcamp.

```javascript
// Debemos usar const siempre que nos sea posible. Solo emplearemos let en caso de que no nos quede otro remedio.
const name = 'Pablo';
```

&nbsp;

<div align="center">[**Lectura anterior**](./js-2.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./js-4.md)</div>