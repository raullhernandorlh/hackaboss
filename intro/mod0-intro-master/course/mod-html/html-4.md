# 1.4. HTML - Enlaces

Un sitio web es un conjunto de documentos HTML tanto estáticos (existen físicamente en un disco), como dinámicos (los crea un programa con contenido de una base de datos). Los documentos HTML se relacionan entre sí mediante enlaces (links). Estos están definidos por la etiqueta `<a>`.

El atributo más importante es el **href** que determina qué página tiene que mostrar el navegador al hacer clic sobre él. En este ejemplo, el "contact.html" estaría en la misma carpeta que la página web existente.

`<a href="contact.html">contacto</a>`

Los links pueden ser internos o externos: 

- **Links internos:** enlazan a otras partes del documento actual mediante el atributo _id_.

- **Links externos:** cargan otro documento nuevo.

En el href se determina la ruta que tiene que cargar. Existen dos tipos de rutas, [**rutas absolutas y rutas relativas**](http://purolinux.com/2018/06/19/diferencia-ruta-relativa-absoluta/):

- **Ruta absoluta:** si una ruta empieza por `/` es una ruta absoluta y por lo tanto empieza desde la raíz del sitio web.

- **Ruta relativa:** una ruta relativa hace referencia a una ubicación que es relativa a un directorio actual. Las rutas relativas utilizan dos símbolos especiales, un punto (.) y dos puntos seguidos (..), lo que significa el directorio actual y el directorio padre. Los dos puntos seguidos se utilizan para subir en la jerarquía. Un único punto representa el directorio actual.

&nbsp;
<div align="center"><img src="https://blog.hostalia.com/wp-content/themes/hostalia/images/ruta-absoluta-relativa-blog-hostalia-hosting.jpg" alt="Ruta relativa y absoluta" /></div>
&nbsp;

Hay enlaces que navegan a páginas web en otros servidores. Es necesario usar el protocolo `http://`, luego el nombre de dominio, cualquier estructura de carpetas y luego el archivo.
`<a href="https://developer.mozilla.org/es/docs/Glossary/Tag">link a MDN</a>`

Otro atributo importante relacionado con la accesibilidad es el **title**, que describe a dónde va a ir ese link.

&nbsp;

<div align="center">[**Lectura anterior**](./html-3.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Siguiente lectura**](./html-5.md)</div>
