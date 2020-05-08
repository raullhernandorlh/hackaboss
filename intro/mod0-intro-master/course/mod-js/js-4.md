# 3.4. JS - Tipos de datos primitivos

JavaScript es un lenguaje de tipado débil o dinámico. Esto significa que no es necesario declarar el tipo de variable antes de usarla. El tipo será determinado automáticamente cuando el programa comience a ser procesado. ¡Ojo! **const** y **let** no son un tipo de variable, son las palabras reservadas con las cuáles declaramos una variable. Una cosa es declarar la variable y otra definir el tipo de variable. Como hemos mencionado anteriormente, esto último se hará de forma automática. A continuación vamos a hablar de los principales tipos de variables en JavaScript.

## &#8226; String
Un valor de cadena es un conjunto de caracteres unicode (letras, dígitos, signos de puntuación, etc.). Este tipo de dato es el encargado de **representar texto** en JavaScript.

```javascript
// Para definir una variable tipo string es obligatorio rodear el texto entre comillas.
const nombre = 'Pablo';

// En JS no importa si usas comillas dobles o simples.
const saludo = "¡Hola! ¿Cómo estás?";
```

## &#8226; Number
En JavaScript no se distingue entre los **valores enteros** y de **punto flotante** (decimales); un número de JavaScript puede ser cualquiera de ellos (internamente, JavaScript representa todos los números como valores de punto flotante).

```javascript
// En el caso de las variables tipo number no debemos rodear el número entre comillas. 
let edad1 = 39;

// Esta variable sería tipo string y no tipo number, ¿entiendes el por qué?
let edad2 = '39';
```

## &#8226; Boolean
Este tipo de dato almacena 1 bit. Este bit puede ser **true** (1) o **false** (0), y es utilizado para registrar un estado (VERDADERO O FALSO).

```javascript
// En este caso tenemos una variable tipo booleano que es verdadera.
const mayorDeEdad = true;
```

## &#8226; Undefined
Este tipo de dato se utiliza cuando no sabemos el contenido de una variable o todavía no fue definido.

```javascript
// No he asignado ningún valor a esta variable, por tanto, JavaScript le asignará
// automáticamente el valor de undefined. 
const numeroDeDiasHastaElSiguienteCumpleanos;
```

## &#8226; Null
El tipo de dato null tiene solamente el valor null. La palabra clave reservada null no puede ser utilizada como nombre de una funcion o una variable. Este tipo de dato no es 0 como en otros lenguajes como C o C++.

```javascript
// A diferencia de undefined, null es un valor que el programador debe definir, no 
// es asignado de forma automática.
const fechaDeRecepcion = null;
```

&nbsp;

<div align="center">[**Lectura anterior**](./js-3.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./js-5.md)</div>