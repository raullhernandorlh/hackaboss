# 2.2. CSS - Aplicación

Hay tres formas de cargar CSS en nuestro HTML:

  - Aplicar directamente las declaraciones a las etiquetas (no recomendado):

    ```html
    <h1 style="color:yellow;background:blue">Esto no mola!</h1>
    ```

  - Usando la etiqueta *style* en el *head* (ver ejemplo en la lectura anterior). Tampoco es la forma más adecuada.

  - Usar un archivo CSS externo (esto es lo ideal). Para eso tenemos que indicar en el *head* la referencia a ese archivo, así sería el HTML:

    ```html
    <!DOCTYPE html>
    <html lang="gl">
      <head>
        <meta charset="utf-8" />
        <title>CSS!</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Ola amigas!</h1>
      </body>
    </html>
    ```

    Y este es el archivo CSS referenciado en el **head** en el ejemplo anterior. En este caso, el nombre de este archivo se llamará **style.css** y su contenido será:

    ```css
    h1 {
        color: yellow;
        background: pink;
    }
    ```
    
&nbsp;
    
<div align="center">[**Lectura anterior**](./css-1.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./css-3.md)</div>