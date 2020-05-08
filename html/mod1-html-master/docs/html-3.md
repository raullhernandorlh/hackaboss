# Curso de HTML : Día 3

## Tablas 2

(Continúa de el día 2)

- También tenemos tags estructurales que definen semánticamente partes de una tabla:

  - `<thead>`: define las filas y celdas de encabezado.
  - `<tbody>`: define as filas y celdas principales de la tabla.
  - `<tfoot>`: define as filas y celdas de pie de tabla.

- Ejemplo completo:

  ```html
  <table border="1">
    <thead>
      <tr>
        <th>Temporada</th>
        <th>Goles</th>
        <th>Asistencias</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>2018-2019</th>
        <td>25</td>
        <td>43</td>
      </tr>
      <tr>
        <th>2019-2020</th>
        <td>40</td>
        <td>20</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Datos ofrecidos por la LFP</td>
      </tr>
    </tfoot>
  </table>
  ```

## Multimedia


### Imágenes

- HTML soporta imágenes desde mediados de los 90, pero el soporte completo de audio y vídeo llegó con la especificación del HTML5.
- Los formatos más comunes de imágenes almacenadas en línea son:

  - JPEG o JPG: el más famoso y apropiado para fotos.
  - PNG: el más apropiado para fondos planos. Soporta transparencias. Es más actual que el anterior.
  - GIF: el preferido para las animaciones
  - SVG: formato vectorial de imágenes.

- Para insertar una imagen utilizamos el tag `<img>`. No es necesaria una etiqueta de cierre, se escriben en un solo elemento:
`<img src="logo.png" alt="logo" />`
- Un elemento de imagen recibe su contenido utilizando el atributo source, escrito como src. en este caso, la imagen se encontraría en la misma carpeta que el documento HTML.
- Para recibir el contenido de imágenes en otras carpetas utilizamos:

`<img src="/images/landscape.jpg" alt="paisaje">`

- Y por último, para imágenes en otras webs:

`<img src="http://wbsite.com/logo.png" alt="logo" />`

- `<img>` es una etiqueta inline, así que no crea una nueva línea al insertarla.

  ```html
  <img src="imaxe.jpg" alt="texto descriptivo de la imagen" />
  ```
- Una imagen se muestra en la web con su altura y ancho originales en píxeles.  El tamaño de la imagen se puede anular mediante el uso de estos atributos:

`<img src = "logo.jpg" width = "150" height = "150" />`

- La altura y el ancho son útiles para cambiar el tamaño de la imagen dentro de la página web, pero no son obligatorios. Los valores de la altura y el ancho siempre están en píxeles, por lo que no se necesita ninguna medida.
- Sin establecer estos tamaños, la imagen simplemente se mostrará en su tamaño original.
- Por lo general, los tamaños de imagen se configuran mediante CSS, ya que es más fácil administrar los tamaños de imagen para sitios web receptivos, etc.
- La razón principal por la que es importante establecer el tamaño de la imagen es porque esos atributos reservarán espacio en la página para las imágenes. Sin los atributos, el navegador no sabrá cuánto espacio dejará la imagen hasta que comience a cargarla, lo que puede causar un efecto de carga irregular a medida que se descarga la web.

### Audio y vídeo

- Hace tiempo que el audio está soportado en HTML con el elemento `<bgsound>`, pero solo por Internet Explorer y solo en formato MIDI (mid).

- Gracias a la etiqueta `<audio>` de HTML5, hoy en día está soportado por todos los navegadores.

- El formato audio más habitual es el MP3. Aún así, existen otros formatos:

- Para insertar audio en una web:

  ```html
  <audio src="audio.mp3" controls></audio>
  ```

- Aparte del atributo `_controls_`,  que muestra los controles de play/pause/volume,  hay otros atributos importantes:

  - _autoplay_: hace que el sonido comience a reproducirse automáticamente.
  - loop: cuando termina el audio, vuelve a comenzar.
  - Podéis ver más atributos aquí: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Attributes

- Para insertar vídeo en una web:

  ```html
  <video src="video.mp4" controls></video>
  ```
- El uso de MP4 es válido para todos los navegadores.
- Os formatos de vídeo soportados están aquí: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats

- En este caso tenemos también el  atributo `_controls_`, con el mismo valor que en los audios. Además podemos encontrar otros atributos comunes:

  - autoplay: igual que audio
  - loop: igual que audio
  - muted: inicia el vídeo sin sonido
  - poster: permite establecer una imagen (en cualquier formato soportado por los navegadores) que aparecerá mientras el usuario no inicia la reproducción (siempre que el autoplay no esté programado).
  - Más atributos aquí: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes

- Tanto audio como vídeo son tags del tipo inline.
