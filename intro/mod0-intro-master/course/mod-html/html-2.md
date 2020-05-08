# 1.2. HTML - Anatomía de un tag

El lenguaje HTML se compone de varios elementos con los que se pueden construir páginas web. Por ejemplo: textos, imágenes, tablas y elementos de formulario. Las etiquetas, **tags**, se utilizan para definir la extensión, estructura y orden de cada uno de los elementos que componen la página web. Un tag se abre con el signo ‘menor que’ (<) y se cierra con el ‘mayor que’ (>).

&nbsp;
<div align="center"><img src="https://miro.medium.com/max/717/0*ecLjKJnWpyZAe2gA." alt="Tag anatomy"/></div>
&nbsp;

Tradicionalmente se recomienda su escritura en minúsculas, aunque en **HTML5** ya no se diferencia entre minúsculas y mayúsculas. En minúsculas, el código es más legible y hace más fácil para la mayoría de los desarrolladores detectar errores en el código. Los tags suelen funcionar por pares: un tag de inicio y un tag de cierre que indica el fin del elemento o secuencia que contenga. Hay tags como el de imagen y algunos elementos de  formulario no necesitan cierre. El contenido entre la apertura y el cierre puede ser texto u otros tags.

Los tags se van anidando unos dentro de otros y pueden contener atributos. Los atributos son valores adicionales que configuran los elementos o ajustan su comportamiento. Por ejemplo: **lang** para especificar el idioma del documento. Así se crea la estructura que da forma a los documentos HTML.

<div align="center"><img src="http://alolsen.net/blogs/webdesign/wp-content/uploads/2014/08/Screen-Shot-2014-08-12-at-2.08.43-AM.png" alt="Tag anatomy"/></div>


**Ejemplos:**

`<p lang="es">Un texto cualquiera.</p>`

`<img src="foto.jpg" alt="Texto descriptivo de la foto" />`

```html
<section>
    <header>
        <h2>Título más importante de la sección</h2>
    </header>
    <p>Aquí va un texto cualquiera.</p>
</section>
```

&nbsp;

<div align="center">[**Lectura anterior**](./html-1.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./html-3.md)</div>