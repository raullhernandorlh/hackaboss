# 5. Guía para la instalación del entorno de desarrollo

## 5.1. Software necesario 

**¡Atención!** Antes de nada asegúrate de tener instalado el siguiente sofware:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [**&#8226; Visual Studio Code**](../tools/vscode/README.md)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [**&#8226; Node.js**](../tools/node-js/README.md)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [**&#8226; Chrome y Chrome Dev Tools**](../tools/chrome/README.md)

## 5.2. Creación de entornos de desarrollo

Aunque es viable escribir HTML, CSS y JS directamente en cualquier editor de texto, vamos a usar un módulo de **Node.js** que nos ayudará a **crear un servidor web local** y **autoactualizar el navegador cuando cambiemos los archivos**. Si quieres saber más acerca de los servidores web puedes echar un ojo a [**este artículo**](https://blog.infranetworking.com/servidor-web/) (no es necesario que realices la parte práctica del artículo que enseña a cómo instalar un servidor, céntrate solo en la teoría).

Es importante que antes de continuar te asegures de tener instalado el software mínimo requerido para la realización del bootcamp (Visual Studio Code y Node.js). El módulo de **Node.js** que vamos a usar es  [**BrowserSync**](https://www.browsersync.io/). 

1. Abrimos un terminal y nos dirigimos al directorio en el que vamos a trabajar (podemos crear una carpeta nueva para tal fin). Si tienes dudas sobre cómo crear un nuevo directorio puedes echar un ojo al apartado **Terminal** en el punto 4.1. 

- `npm init -y`
    
- `npm install browser-sync --save-dev`

2. A continuación abrimos la carpeta con el Visual Studio Code y editamos el **package.json** añadiendo a la sección de scripts, debajo de `"test": "echo \"Error: no test specified\" && exit 1"` esta línea:

    - **En Ubunto o Mac:** `"start": "browser-sync start --server 'www' --files 'www'"`
    
    - **En Windows:** `"start": "browser-sync start --server --files 'index/*.html'"`

    - Debes agregar una coma al final de la línea `"test": "echo \"Error: no test specified\" && exit 1",` de no hacerlo, no funcionará.
    
3. Crea una **nueva carpeta** llamada **www**. Si estás trabajando desde un sistema operativo **Windows** sáltate este paso y ve directamente al 5.

4. Dentro de dicha carpeta, **crea un archivo** llamado **index.html**.

5. Dentro del documento **index.html** escribe la siguiente línea de código: `<p>Hello world!</p>`. **Es muy importante ir guardando los cambios** que vayamos haciendo en los documentos. Si no hemos guardado los cambios en un documento Visual Studio nos indicará mediante un círculo blanco que dichos cambios no han sido guardados. Es probable que muchos de los problemas que tengas al principio es porque olvides guardar los cambios. Puedes hacerlo mediante el atajo de teclado `CTRL + S`.

6. A continuación **abre el terminal** y dirígete al directorio del proyecto. Puedes abrir un terminal directamente desde el Visual Studio haciendo clic en la pestaña `Terminal` arriba a la izquierda. Una vez hayas desplegado la lista de opciones haz clic en `New Terminal`. Inicia el servidor mediante el comando `npm start`.

&nbsp;

<div align="center"><img src="https://i.ibb.co/qmLG9WK/pasos-servidor.png" alt="Pasos a seguir" /></div>

&nbsp;

A partir de ese momento el navegador va a servir en la URL `http://localhost:3000/`. El contenido que creemos dentro del subdirectorio `www` creado anteriormente se actualizará automáticamente siempre que guardemos nuevos cambios. Si lo prefieres puedes seguir los pasos a través de **[esta videoguía](https://mega.nz/#!2Ik0TaIb!WTw0vhKB-XvANEG9WzB6S5OhXZPnnlNLFzp9m-wtAIc)**. A mayores aquí tienes un pequeño extra para que te hagas una idea de cómo vamos a trabajar a lo largo del bootcamp con HTML, CSS y JavaScript (JS). **Es necesario haber leído con anterioridad el temario** correspondiente para comprender mejor lo que está pasando.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [**&#8226; Trabajando con HTML**](https://mega.nz/#!TRMjnS7a!7D7b8U8N5XMJWSJNYBsgoFfqbeb8E02x3BGNdLoVWhk)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [**&#8226; Trabajando con CSS**](https://mega.nz/#!jQUyxSAb!RLLWBplXNof0H7JarGjeFbKitq05OkekWknbbMimMwI)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [**&#8226; Trabajando con JS**](https://mega.nz/#!HIMUXArZ!fxjjjBRBrVfn9CotLgueqY4BTueh_npBx9e6caaPkVI)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [**&#8226; Calculadora JS**](https://mega.nz/#!SZVCHIgQ!Z7G9xqwu2vUtfgJnci2wGfTudz-3FRZGaMjkYXcYy-M)

&nbsp;

<div align="center">[**Volver al índice de HTML, CSS y JS**](./lecture02.md)</div>
