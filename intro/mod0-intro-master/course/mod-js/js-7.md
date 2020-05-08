# 3.7. JS - If else

Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada. La sentencia siempre va acompañada de llaves de apertura y cierre `{}`. ¿Recuerdas las variables de tipo booleano? Estas llaves son obligatorias y son causa de muchos errores cuando estamos comenzando en el mundo de la programación, fíjate muy bien que las hayas puesto correctamente. 

Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada. Si solo tenemos dos sentencias, es decir, verdadero o falso, o es A o es B, este sería el esquema a seguir:
Si solo tenemos dos sentencias, es decir, o es A o es B, este sería el esquema a seguir:

```javascript
// Si la condición es cierta, haz esto:
if (condicion === true) {
   sentencia1
// Si la condición es falsa haz esto:
} else {
   sentencia2
   sentencia2;
}
```

Cuando tenemos más de dos sentencias debemos hacer uso de `else if`:

```javascript
// Si la condición1 es cierta, haz esto:
if (condicion1) {
   sentencia1;
// Si condicion1 no se cumple, pero se cumple condicion2, haz esto:
} else if (condicion2) {
   sentencia2;
// Si condicion2 no se cumple, pero se cumple la condicion3, haz esto:
} else if (condicion3) {
   sentencia3;
// Si ninguna de las condiciones anteriores se cumplen haz esto:
} else {
   sentenciaFinal;
}
```

Ahora veamos un ejemplo práctico:

```javascript
let mayorDeEdad = false;

if (mayorDeEdad === false) {
   console.log('La persona es menor de edad.')
} else {
   console.log('La persona es mayor de edad.')
}
```

En el caso anterior la condición (mayorDeEdad) va a tener un valor booleano, o **true** o **false**. En este caso podemos omitir el `=== false` porque es redundante. Esto solo ocurre cuando la variable que insertamos en la condición tiene un valor booleano. Por tanto, sería lo mismo decir que:

```javascript
let mayorDeEdad = false;

if (mayorDeEdad) {
   console.log('La persona es mayor de edad.')
} else {
   console.log('La persona es menor de edad.')
}
```

&nbsp;

<div align="center">[**Lectura anterior**](./js-6.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./js-8.md)</div>