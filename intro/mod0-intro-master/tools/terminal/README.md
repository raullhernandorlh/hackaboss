# 4. Terminal

Un **terminal** es una forma de acceder al sistema sin utilizar la interfaz gráfica, es decir, realizar todo tipo de tareas en formato texto. El terminal muestra en pantalla un indicador de línea de órdenes (en inglés se utiliza la palabra prompt que literalmente traduciría "prontuario" pero se puede definir como ayuda visual o palabra que ayuda) esperando que el usuario introduzca una orden. Este indicador finaliza generalmente por un caracter `$`, cuando eres un usuario normal, o `#` cuando eres un súper usuario (administrador).

- **Windows:** necesitarás instalar **Git Bash**. Puedes hacerlo desde [**este enlace**](https://gitforwindows.org/). Una vez instalado puedes hacer uso de este terminal iniciándolo normalmente como cualquier otra aplicación.

- **Mac:** para abrir el termina en Mac sólo tienes que ir a la carpeta "Aplicaciones", después tienes que abrir el directorio "Utilidades" y hacer doble click en la aplicación "Terminal".

- **Ubuntu:** puedes iniciar el terminal accediendo a la lista de aplicaciones del sistema operativo o empleado el atajo: `ctrl + alt + t`.

## 4.1. Rutas relativas y absolutas

A la hora de emplear el terminal estaremos moviéndonos continuamente de una ruta a otra, por ello, es muy importante conocer las diferencias que existen entre una ruta **relativa** y una **absoluta**. Basta con tener en cuenta que en una ruta absoluta se representa la ruta completa del recurso. Dicho de otra forma, se parte desde el directorio raíz hasta llegar al recurso.

<div align="center"><img src="https://fsl.fmrib.ox.ac.uk/fslcourse/unix_intro/tree.gif" alt="Protocolo HTTP" width="400"></div>

Imaginemos que nos encontramos ubicados en la carpeta **admin** y que queremos acceder a un documento llamado **document.txt** que se encuentra en directorio **jon**. Si queremos acceder al documento por medio de una ruta absoluta sería tal que así:

`/users/admin/jon/document.txt`

En cambio, en las rutas relativas se representa sólo una parte de la ruta. Esto es posible porque en las rutas relativas se parte del directorio actual de trabajo. Si nos encontrásemos ubicados en el directorio **admin**, la ruta relativa hasta **document.txt** sería:

`./jon/document.txt`

En este tipo de rutas los dos puntos `..` hacen referencia a un directorio superior mientras que el punto `.` hace referencia al directorio en el que nos encontramos. Por ejemplo, si quisiéramos acceder a la carpeta **staff** desde nuestra ubicación actual **admin** quedaría tal que así:

`../staff`

## 4.2. Comandos básicos para el terminal

- `pwd` → mostrar directorio (carpeta) actual.

```sh
$ pwd
```

- `ls` → mostrar directorios y archivos dentro de la ubicación actual.

```sh
$ ls 
```

- `cd` → cambiar de directorio.

```sh
$ cd nombreDelDirectorio
```

- `mkdir` → crea un nuevo directorio en la ubicación actual.

```sh
$ mkdir nombreDelDirectorio
```

- `touch` → crea un nuevo archivo en el directorio actual.

```sh
$ touch nombreDelArchivo.txt
```

- `rm` → elimina un directorio o un archivo.

```sh
$ rm nombreDelArchivo.txt (eliminar un archivo) 
$ rm -r nombreDelDirectorio (eliminar una carpeta)
```

- `mv` → mover un directorio o un archivo.

```sh
$ mv nombreDelArchivo.txt /ruta/de/destino (mover un archivo) 
$ mv /nombreDelDirectorio /ruta/de/destino (mover un directorio) 
```

- `cp` → copiar un directorio o un archivo.

```sh
$ cp nombreDelArchivo.txt /ruta/de/destino (copiar un archivo) 
$ cp /nombreDelDirectorio /ruta/de/destino (copiar un directorio) 
```

**¡Importante!** Si a la hora de ejecutar alguno de estos comandos tenemos algún problema es posible que necesitemos permisos de administrador. Para ello escribiremos el comando `sudo` al principio de la línea. Al hacer esto se nos solicitará una contraseña, generalmente esta contraseña será la que hayamos asignado a nuestro usuario, la que utilicemos para iniciar sesión. Puede parecer que a la hora de introducir la contraseña no estemos escribiendo nada, pero realmente sí estamos escribiendo algo.

Si quieres saber más puedes consultar esta [**guía para principiantes**](https://tutorials.ubuntu.com/tutorial/command-line-for-beginners#6).

&nbsp;

<div align="center">[**Volver al índice de HTML, CSS y JS**](../../course/lecture02.md)</div>
