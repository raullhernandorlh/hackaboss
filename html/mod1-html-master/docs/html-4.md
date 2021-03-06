# Curso de HTML : Día 4

## Formularios

- Los formularios sirven para recoger contenido del usuario y enviarlo al servidor.

- Para crear un formulario utilizamos la etiqueta  `<form>`:

  ```html
  <form>
    ...elementos del formulario
  </form>
  ```

- El elemento principal de los formularios es el `_input_`. Mediante este elemento versátil podremos incluir diferentes tipos de campos que nos permitirán añadir textos pequeños, fechas, checkboxes, radio buttons, passwords, etc...

- Otros elementos importantes dos formularios son:

  - _textarea_: permite introducir textos largos.
  - _select_: permite crear selectores con opciones, incluso de selección múltiple.
  - _button_: permite crear botones que realizan acciones, como enviar el formulario, resetear los valores a los iniciales, o... nada.

- También tenemos elementos que nos permiten estructurar el formulario:

  - _label_: permite asignar etiquetas a los elementos del formulario
  - _fieldset_: permite agrupar elementos del formulario
  - _legend_: permite asignar etiquetas a los _fieldsets_

### El elemento `form`

- El tag `<form>`se usa para crear un nuevo formulario
- Sus atributos principales son:
  - action: establece la url a la que se quiere enviar los datos.
  - method: define el método para enviar los datos:
    - GET: los datos se van a ver en la url. Es el método menos usado.
    - POST: los datos van incluídos en el cuerpo de la petición y non se ven en la url. Es el habitual, pero no es más seguro que el anterior.

### Atributos comunes a los elementos:

- _autofocus_: el primer elemento que tenga este atributo recibirá el foco al cargar la página.
- _disabled_: los elementos con este atributo no se podrán editar ni  se enviarán al servidor.
- _readonly_: los elementos con este atributo non se podrán editar, pero sí enviar al servidor.
- _required_: no permite enviar el formulario hasta que ese campo esté correcto.
- _name_: establece el nombre interno del elemento de formulario, el nombre con que el que se enviará el valor introducido por el usuario o usuaria al servidor.
- _value_: establece el valor por defecto del elemento.
- _placeholder_: muestra visualmente un texto de ayuda dentro del elemento que desaparece al hacer foco.

### Elementos que permiten introducir texto

-  `<input>` es el elemento de formulario más común y permite introducir diferentes tipos de textos.

- El atributo _type_ establece el tipo de input, y estos pueden ser:

  - **text**: es el type más habitual y permite introducir un texto corto.
  - **email**: permite introducir un email y no dejará enviar el formulario si no es válido.
  - **password**: permite introducir una contraseña, por lo que cuando se escriba aparecerán asteriscos o puntos en lugar de las letras.
  - **url**: permite introducir una URL y no dejará enviar el formulario si la URL no es válida.

- El tag `textarea` permite introducir textos más largos, mostrando una caja de texto con múltiples líneas.

- El _textarea_ permite dos atributos que son `_cols_` e `_rows_`,  que establecen el tamaño de la caja (aunque normalmente ese tamaño se edita mediante CSS).

- Exemplo:

  ```html
  <form method="GET" action=".">
    Usuario:
    <input type="text" name="usuario" placeholder="tu nombre" autofocus /><br />
    Correo: <input type="email" name="correo" /><br />
    Contraseña: <input type="password" name="contrasena" />
  </form>
  ```

### Estructurando el formulario

- El elemento `<label>` permite establecer etiquetas asociadas a los elementos de formulario. Se relaciona con el elemento mediante el atributo _for_ que debe coincidir con el atributo _id_ del elemento. Esto es:

  ```html
  <label for="name">Nombre</label> <input type="text" name="name" id="name" />
  ```
  o tambien

  ```html
  <label>Nombre<input type="text" name="name" /></label>
  ```

- El elemento `<fieldset>` permite agrupar elementos de formulario y el `<legend>` establece un título al fieldset:

  ```html
  <fieldset>
    <legend>Datos personales</legend>
    <ul>
      <li>
        <label>
          Nombre
          <input type="text" autofocus name="nombre" placeholder="Escribe Aquí..." />
        </label>
      </li>
      <li>
        <label>
          Correo
          <input type="email" name="correo" required placeholder="Escribe Aquí..." />
        </label>
      </li>
      <li>
        <label>
          Contraseña
          <input type="password" name="contraseña" placeholder="Escribe Aquí..." />
        </label>
      </li>
      <li>
        <label>
          Fecha de Nacimiento
          <input type="date" name="fecha" placeholder="Escribe Aquí..." />
        </label>
      </li>
      <li>
        <label>
          Foto
          <input type="file" name="foto" />
        </label>
      </li>
      <li>
        <label>
          Comentario
          <textarea name="comentario" rows="5" cols="50" placeholder="Escribe tu comentario" ></textarea>
        </label>
      </li>
    </ul>
  </fieldset>
  ```

### Seleccionar entre varias opciones

- El elemento `<select>` permite crear un menú desplegable e seleccionar una o varias opciones. Por ejemplo:

  ```html
  <select name="simpsons">
    <option>Homer</option>
    <option>Lisa</option>
    <option>Marge</option>
    <option>Maggie</option>
    <option>Bart</option>
  </select>
  ```

- Permite también crear grupos de opciones con su etiqueta correspondiente:

  ```html
  <select name="provincia">
    <optgroup label="Provincias de el norte">
      <option>Lugo</option>
      <option>A Coruña</option>
    </optgroup>
    <optgroup label="Provincias de el sur">
      <option>Ourense</option>
      <option>Pontevedra</option>
    </optgroup>
  </select>
  ```

- O crear una selección múltiple usando el atributo _multiple_:

  ```html
  <select name="coches_favoritos" multiple>
    <option>De Lorean</option>
    <option>Kit</option>
    <option>Batmóvil</option>
    <option>Cazafantasmas</option>
  </select>
  ```

### Opciones

- Además de texto, con la etiqueta `<input>`también podemos crear otros elementos:

  - _checkbox_: campos de selección que solo permiten dos estados: seleccionado o no. Podemos controlar el valor inicial usando el atributo _checked_ en lugar de _value_.

    ```html
    <ul>
      <li>
        <label>
          Cine
          <input type="checkbox" name="cine"/>
        </label>
      </li>
      <li>
        <label>
          Deportes
          <input type="checkbox" name="deportes"/>
        </label>
      </li>
      <li>
        <label>
          Música
          <input type="checkbox" name="musica"/>
        </label>
      </li>
    </ul>
    ```

  - _radio_: campos de selección entre varias opciones excluyentes, similar al _select_ anterior. Permite escoger entre los input de tipo radio que tengan el mismo atributo _name_.

    ```html
    <fieldset>
      <ul>
        <li>
          <label>
            E.S.O
            <input type="radio" name="estudios" value="eso" checked="checked"/>
          </label>
        </li>
        <li>
          <label>
            F.P
            <input type="radio" name="estudios" value="fp" />
          </label>
        </li>
        <li>
          <label>
            Universitarios
            <input type="radio" name="estudios" value="uni" />
          </label>
        </li>
      </ul>
    </fieldset>
    ```

### Botones

- La etiqueta `<button>` permite crear botones.
- Hay tres tipos que se determinan mediante el atributo _type_:

  - submit: envía el formulario.

    ```html
    <button type="submit">Enviar</button>
    ```

  - reset: resetea el formulario a los valores iniciales.

    ```html
    <button type="reset">Borrar formulario</button>
    ```

### Elementos de formulario avanzados

- Con HTML5 aparecieron nuevos elementos de formulario más específicos.
- Una de las principales razones fue la adaptación a dispositivos móviles, en los que cubrir formularios resulta más complejo que en el escritorio.
- Estos elementos permiten crear campos de formulario como de tipo fecha, rangos, colores, ficheros, etc...
- Más elementos avanzados aquí: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets#Advanced_form_widgets

## Etiquetas avanzadas

- Aparte de las etiquetas que vimos en los días anteriores, el HTML define muchas más: https://developer.mozilla.org/en-US/docs/Web/HTML/Element.
- Además de las vistas durante el curso, hay otras de relativa importancia que conviene mencionar:
  - _address_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
  - _blockquote_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
  - _figure_ & _figcaption_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
  - _pre_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
  - _abbr_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
  - _br_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
  - _strong_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
  - _em_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em

## Accesibilidad

- La accesibilidad en el HTML viene marcada por un conjunto de prácticas que siempre tenemos que tener en cuenta para hacer las webs más usables para gente con discapacidades.
- La idea principal es hacer un HTML que sea igual para todo el mundo, sin importar sus circunstancias.
- Aparte de esto,  crear un HTML accesible mejora la optimización de la web para buscadores.
- Hay lugares del mundo en los que la accesibilidad a determinados tipos de web viene determinada por la ley.
