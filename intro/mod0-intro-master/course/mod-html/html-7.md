# 1.7. HTML - Imágenes

HTML soporta imágenes desde mediados de los 90, pero el soporte completo de audio y vídeo llegó con la especificación del HTML5. Los formatos más comunes de imágenes almacenadas en línea son:

- **JPEG o JPG:** el más famoso y apropiado para fotos.

- **PNG:** ideal para fondos planos. Soporta transparencias. 

- **GIF:** idóneo para las animaciones.

- **SVG:** formato vectorial de imágenes.

Para insertar una imagen utilizamos el tag `<img>`. No es necesaria una etiqueta de cierre, se escribe en un solo elemento: `<img src="logo.png" alt="logo" />`. 

Un elemento de imagen recibe su contenido utilizando el atributo source, escrito como **src**. En este caso la imagen se encontraría en la misma carpeta que el documento HTML. Para recibir el contenido de imágenes en otras carpetas utilizamos: `<img src="/images/landscape.jpg" alt="paisaje">`.

Y por último, para imágenes en otras webs: `<img src="http://website.com/logo.png" alt="logo" />`.

```html
  <img src="imagen.jpg" alt="texto descriptivo de la imagen" />
```

Una imagen se muestra en la web con su altura y ancho originales en píxeles. El tamaño de la imagen se puede modificar mediante los atributos **width** y **height**: `<img src = "logo.jpg" width = "150" height = "150" />`.

La altura y el ancho son útiles para cambiar el tamaño de la imagen dentro de la página web, pero no son obligatorios. Los valores de la altura y el ancho siempre están en píxeles, por lo que no se necesita ninguna medida. Sin establecer estos tamaños, la imagen simplemente se mostrará en su tamaño original.

Por lo general, los tamaños de imagen se configuran mediante CSS, ya que es más fácil administrar los tamaños de imagen para sitios web receptivos, etc. La razón principal por la que es importante establecer el tamaño de la imagen es porque esos atributos reservarán espacio en la página para las imágenes. Sin los atributos, el navegador no sabrá cuánto espacio dejará la imagen hasta que comience a cargarla, lo que puede causar un efecto de carga irregular a medida que se descarga la web.

&nbsp;

<div align="center">[**Lectura anterior**](./html-6.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./html-8.md)</div>