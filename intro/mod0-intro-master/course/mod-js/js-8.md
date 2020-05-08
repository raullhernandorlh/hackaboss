# 3.8. JS - Bucles

Los bucles permiten repetir una acción un número de veces determinado. Hay muchas clases diferentes de bucles. En función de la situación emplearemos un tipo de bucle u otros. Por el momento vamos a quedarnos con el bucle más simple, el bucle `for`:

```javascript 
for (expresionInicial; condicion; cambioEnLaExpresion) {
  sentencia;
}
```

El ejemplo más común con este tipo de bucle es un contador, vamos a ver como podríamos realizar un contador que muestre por consola los números del 0 al 10:

```javascript 
// Lo más común sería encontrarse con un 'i++' en lugar de 'i = i + 1'. En JS es exactamente lo mismo.
for (let i = 0; i <= 10; i = i + 1) {
  console.log(i);
}
```

Este `for` se repetirá un total de 11 veces mostrando los números esperados por consola. Tras cada repetición, se irá sumando +1 a la variable `i` y se mostrará el valor de la variable en cada momento. Cuando esta variable deje de ser menor o igual a 10 el bucle llegará a su fin. 

Tenemos que tener cuidado de no equivocarnos en la condición o en el cambio de la expresión. Si en el ejemplo anterior substituímos **i = i + 1** por un **i = i - 1** el resultado será un bucle infinito. Esto es así porque de esta forma `i` siempre será menor o igual a 10 y el programa nunca finalizará. Si al ejecutar un bucle observáis que el navegador no consigue cargar el código y se queda en carga contínua seguramente se trate de un bucle infinito, seguramente hayáis cometido algún error. En este caso hay que cerrar el programa, corregir el error y volver a iniciarlo.

&nbsp;

<div align="center">[**Lectura anterior**](./js-7.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md)