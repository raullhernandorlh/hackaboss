# 1.3. HTML - Estructura básica

Para definir un documento HTML debemos utilizar el tag `<html>...</html>`. Esto indica que para estructurar todo lo contenido entre esas etiquetas se utiliza el lenguaje html, lo que refiere a una **estructura semántico del contenido.** En cada página web HTML, la primera línea de código siempre debe ser la declaración `<! DOCTYPE html>` . La etiqueta Doctype **no es un elemento HTML en sí**, sino una etiqueta específica para los navegadores para identificar el tipo de código en el documento. 

Un documento HTML está formado por dos partes principales: `head` y `body`:

- El *head* es la parte de código html que no se muestra en la página web en sí misma. Está la metainformación que ayuda al navegador a decidir cómo mostrar el contenido. Contiene información como: el **título de la página web* (que se muestra en la pestaña del navegador) o **enlaces a recursos externos** (como a el documento CSS que puede contener los estilos utilizados en la página).

- El `body` es todo lo que sí se muestra en la pantalla del usuario. La **parte visible de la web**.

El documento HTML solo representa contenido, la presentación (parte visual de la página) corre a cargo del CSS.


Como hemos mencionado, todos los documentos HTML deben comenzar por el doctype, que determina el tipo de documento: `<!DOCTYPE html>`. Puede ser que aparezca un doctype más complejo, fruto de las anteriores versiones de HTML:

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  ```

&nbsp;
<div align="center"><img src="http://estmary.2020.madeateps.org/wp-content/uploads/sites/32/2016/01/Basic-HTML.png" alt="HTML Structure" width="400"></div>
&nbsp;

Dentro del `<html>` que se distinguirán dos tags principales: `<head>`, con la metainformación de la web y `<body>`, donde se estructura la parte visible. Ese primer tag HTML suele ir acompañado del atributo _lang_, que define el idioma de la web. Por ejemplo:

  ```html
  <html lang="es"></html>
  ```

Toda la metainformación del documento html está incluida dentro de `<head>`: el título de la web, la descripción, la carga del código externo (por ejemplo, CSS) y diferentes tags `<meta>` que se utilizan para definir varios valores de metainformación. Por ejemplo, el `<meta charset="utf-8" />` permite visualizar los caracteres de cualquier idioma. 

El `<body>` es la parte que dice al navegador cómo mostrar los contenidos, la jerarquía de los contenidos de la página (ojo, no el estilo). HTML5 aporta estructura semántica al documento de forma sencilla. o lo que es lo mismo: cada tag aporta un significado estructural a los elementos de la página (con excepción de `<div>`y `<span>`, como veremos más abajo).

  ```html
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="utf-8" />
      <title>Chiquito for president</title>
      <meta
       name="description"
        content="Recaudación para resucitar a Chiquito y hacerlo presidente"
      />
    </head>
    <body>
      Contenido de la página
    </body>
  </html>
  ```

Para Google es mucho más fácil procesar los datos de nuestra página si se estructura con etiquetas semánticas. Así, aparecerá mejor posicionada a la hora de que el buscador indexe los resultados de búsqueda.

&nbsp;

<div align="center">[**Lectura anterior**](./html-2.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./html-4.md)</div>