# 3.5. JS - Use Strict, console.log(), punto y coma

## &#8226; Use Strict

El modo estricto tiene varios cambios en la semántica normal de JavaScript:

- Elimina algunos errores silenciosos de JavaScript cambiándolos a que lancen errores.

- Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.

- Prohibe cierta sintaxis que probablemente sean definidas en futuras versiones de ECMAScript.

Para activar el modo esticto basta con escribir al inicio del archivo `.js` la línea `'use strict'`. Recuerda que no importa si usas comillas simples o comillas dobles. Durante el transcurso del bootcamp será una tarea que realizaréis día tras día.

## &#8226; console.log()

Muestra un mensaje en la consola web o en el intérprete JavaScript. Es muy común emplear este método para mostrar por consola el contenido de una variable y de este modo ver si tenemos lo que queremos a la salida.

```javascript
const nombre = 'Pablo';

console.log(nombre); // Se espera que la salida sea 'Pablo'
```

## &#8226; Punto y coma

El uso del punto y coma al final de una línea no es obligatorio. El intérprete de JavaScript lee el código de izquierda a derecha e inserta el punto y coma (sino está presente) cuando se cumplen ciertas condiciones. De todos modos desde **Hack a Boss** consideramos que es una buena práctica el uso de semicolons, es preferible colocar explícitamente donde queremos que termine la expresión y no  dejar a JavaScript que lo haga por ti.

&nbsp;

<div align="center">[**Lectura anterior**](./js-4.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./js-6.md)</div>