# 1.6. HTML - Tablas

Llamamos tabla a un conjunto estructurado en filas y columnas. Solamente sirven para mostrar contenido tabular. Se solían utilizar para maquetar como base de la parrilla, pero hoy en día eso se considera una muy mala práctica. Definimos un elemento tabla con el tag `<table>`.

## &#8226; Table row y table data

Las tablas en HTML están compuestas por filas, marcadas con el tag `<tr>` (table row) que contienen celdas definidas por el tag `<td>` (table data). Por ejemplo, para hacer una tabla de 2x2:

```html
  <table>
    <tr>
      <td>Columna 1</td>
      <td>Columna 2</td>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
```

## &#8226; Table header

Si queremos definir una celda de cabecera podemos cambiar su tag por `<th>`:

```html
  <table>
    <tr>
      <th>Columna 1</th>
      <th>Columna 2</th>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
```

## &#8226; Rowspan y colspan

Si queremos que una fila o celda en concreto ocupe más de lo normal, podemos usar los atributos `rowspan` y `colspan`. Es importante mantener una estructura lógica para que la tabla no se muestre descolocada. Por ejemplo, si queremos crear una tabla con 2 filas pero que la primera fila solo tenga una celda y la segunda dos, haremos lo siguiente:

```html
  <table>
    <tr>
      <th colspan="2">Columna ancha</th>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
```

&nbsp;

<div align="center">[**Lectura anterior**](./html-5.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./html-7.md)</div>
