# 2.1. CSS - Introducción

Las siglas **CSS (Cascading Style Sheets)** significan «Hojas de estilo en cascada» y parten de un concepto simple: aplicar estilos (colores, formas, márgenes, etc...) a uno o varios documentos (generalmente documentos HTML, páginas webs) de forma masiva. Se le denomina estilos en cascada porque se aplican de arriba a abajo.

La idea de CSS es la de utilizar el concepto de separación de presentación y contenido, intentando que los documentos HTML incluyan sólo información y datos, y todos los aspectos relacionados con el estilo (diseño, colores, formas, etc.) se encuentren en un documento CSS independiente.

Breve repaso de la evolución de CSS:

- CSS fue propuesto en el año 1994 como un lenguaje para especificar como los documentos HTML son presentados a los usuarios.

- La W3C escogió entre múltiples propuestas de hojas de estilo, CSS fue la ganadora.

- En el año 1996 aparece la primera especificación de la W3C: CSS1.

- En el año 1997 se especificó el CSS2 y en el 1998 el CSS3. Esta versión es una especificación aún no acabada y es la que usamos en la actualidad.


El CSS se aplica al HTML mediante una serie de reglas que definen como determinados tags se muestran. Por ejemplo, si quiero que todos mis encabezados de primer nivel **h1** tengan el texto color amarillo y fondo azul podemos definirlo de esta manera:

```html
  <!DOCTYPE html>
  <html lang="gl">
    <head>
      <meta charset="utf-8" />
      <title>CSS!</title>
      <!-- Introducimos el código CSS dentro de la etiqueta "style",
           aunque lo normal es que el código CSS vaya en un documento
           aparte. -->
      <style>
        h1 {
          color: yellow;
          background: blue;
        }
      </style>
    </head>
    <body>
      <h1>¡Hola amigas!</h1>
    </body>
  </html>
```

Lo primero que hace el navegador es cargar el HTML. En este, hay referencias a  reglas  CSS. Cuando todo está cargado el navegador convierte el HTML a lo que se llama  DOM, una representación en memoria de la  estructura del HTML. El navegador procesa el  CSS y comprueba si hay alguna regla aplicable al DOM. Si es así, la aplica. Finalmente el navegador renderiza el DOM y nos muestra la página web.

&nbsp;

<div align="center">[**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./css-2.md)</div>

