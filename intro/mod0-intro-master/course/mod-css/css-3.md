# 2.3. CSS - Síntaxis 

El  CSS se construye mediante declaraciones agrupadas en bloques, y esos bloques están asociados a  selectores que definen a que elementos HTML se aplican. El conjunto de  selector y bloque de declaraciones es una  regla de  CSS.

Las declaraciones de  CSS están compuestas por [**propiedades y valores**](https://www.eniun.com/resumen-tabla-propiedades-css-valores/) separadas internamente por dos puntos (:) y con la siguiente declaración con ";":

  ```css
  background: blue;
  ```

  - Las **propiedades** indican el aspecto estilístico que queremos modificar: fuente, color, fondo, posición...
  
  - Los **valores** indican como queremos cambiar el aspecto estilístico anterior.

Los **bloques** son grupos de declaraciones agrupadas entre llaves `{ }`:

  ```css
  nombreDelSelector {
    background: blue;
    color: yellow;
  }
  ```

Es obligatorio que todas las declaraciones estén agrupadas en bloques, no deben aparecer fuera de los bloques. Los bloques tienen que estar precedidos por selectores. Los  **selectores** definen la que elementos se aplican las declaraciones agrupadas en el bloque. Estas declaraciones pueden hacer referencia directa a **tags**, **clases** o **ids**:

  ```css
  h1 {
    background: blue;
    color: yellow;
  }
  ```

Al igual que en HTML el espacio en blanco en los ficheros CSS es ignorado. 

&nbsp;

<div align="center">[**Lectura anterior**](./css-2.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./css-4.md)</div>