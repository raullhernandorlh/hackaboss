# 1.8. HTML - Audio y vídeo


## &#8226; Audio

Hace tiempo que el audio está soportado en HTML con el elemento `<bgsound>`, pero solo por Internet Explorer y en formato MIDI. Gracias a la etiqueta `<audio>` de HTML5, hoy en día está soportado por todos los navegadores. El formato audio más habitual es el MP3. Aún así, existen otros formatos. Para insertar audio en una web:

```html
  <audio src="audio.mp3" controls></audio>
```

Aparte del atributo `controls`,  que muestra los controles de play/pause/volume, hay otros atributos importantes:

- **autoplay:** hace que el sonido comience a reproducirse automáticamente.

- **loop:** cuando termina el audio, vuelve a comenzar.

- **Más atributos:** [página web de MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/audio).

## &#8226; Vídeo

Para insertar vídeo en una web:

```html
  <video src="video.mp4" controls></video>
```

El uso del MP4 es válido para todos los navegadores. En este caso también disponemos del atributo `controls` y otros atributos comunes:

- **autoplay:** igual que audio.

- **loop:** igual que audio.

- **muted:** inicia el vídeo sin sonido.

- **poster:** permite establecer una imagen (en cualquier formato soportado por los navegadores) que aparecerá mientras el usuario no inicia la reproducción (siempre que el autoplay no esté programado).

- **Más atributos:** [página web de MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/video).

&nbsp;

<div align="center">[**Lectura anterior**](./html-7.md) &nbsp;&nbsp; | &nbsp;&nbsp; [**Volver al índice**](./README.md)</div>