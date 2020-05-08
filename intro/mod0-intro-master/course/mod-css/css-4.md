# 2.4. CSS - Selectores simples

Los selectores de CSS permiten asociar bloques de declaraciones con elementos de nuestras páginas. Los selectores simples permiten seleccionar por tipo de elemento (nombre del tag), clase o id.

## &#8226; Selectores por tipo de elemento

Para seleccionar un elemento por su nombre de tag simplemente indicamos el nombre del tag en el selector:

  ```html
  <p>Soy un texto cualquiera.</p>
  ```

  ```css
  p {
    color: red;
  }
  ```

Los selectores por nombre de tag son muy genéricos y afectan a todos los tags, hay que usarlos con cuidado y normalmente combinados con otros selectores. Hay un selector especial que es el asterisco `*`. Este selecciona todos los elementos del HTML por lo que debemos tener cuidado al usarlo:

  ```css
  * {
    background-color: blue;
  }
  ```

## &#8226; Selectores por clase

El atributo `class` puede emplearse en cualquier etiqueta del HTML. Se puede especificar una o varias clases para cada elemento, y puede haber múltiples elementos con la misma clase. En el caso de querer incluír dos o más clases en una etiqueta, estas deben estar separadas por espacios.

  ```html
  <p class="nombre-clase-1 nombre-clase-2">Soy otro texto cualquiera.</p>
  ```

Para seleccionar por clase simplemente indicamos el nombre de la clase con un punto `.` antes:

  ```css
  .nombre-clase-1 {
    background: gray;
  }
  ```

## &#8226; Selectores por id

El id es un atributo que puede tener cualquier elemento HTML. Los ids tienen que ser únicos dentro del mismo documento HTML pero pueden repetirse en otros documentos del sitio web.

  ```html
  <h1 id="principal">Otro texto más.</h1>
  ```

Para seleccionar por id en CSS simplemente indicamos el nombre del id con un (#) antes:

  ```css
  #principal {
    text-decoration: underline;
  }
  ```
  
&nbsp;

<div align="center">[**Lectura anterior**](./css-3.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md)</div>
