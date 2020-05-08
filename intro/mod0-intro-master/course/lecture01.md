# ¿Cómo funciona internet?

Internet es, en resumen, una red de ordenadores a nivel mundial que pueden intercambiar información entre ellos a través de un protocolo común (TCP/IP).

Hemos comprado un ordenador y queremos conectarnos a internet.

## &#8226; Pasos

1. Un ISP (proveedor de acceso a internet: Vodafone, Orange, Telefónica...) nos conecta a internet.

2. Para ello, nos asigna un número único a nuestro ordenador (IP) con el que se nos identifica dentro de la red. No hay otro ordenador dentro de la misma red que tenga la misma IP que el nuestro. Una IP luce tal que así: `150.214.90.20` y viene a ser algo equivalente a nuestro nombre, apellidos y dirección.

3. Años atrás, los datos que enviábamos por la red se codificaban y se enviaban a través de un `modem`, pero hoy en día utilizamos los conocidos `routers`.

> ¡STOP! No se si te has fijado pero no hemos explicado la diferencia entre módem y router. Quizás es un buen momento para, como hemos visto en la lección 1, sacar nuestra curiosidad a pasear y buscarlo por ti mismo. ;)

4. Los routers codifican y decodifican los datos que entran y salen de nuestro ordenador, unen las redes y deciden las rutas de tráfico. Todo esto se realiza siguiendo el protocolo TCP/IP.

## &#8226; TCP/IP: capas y protocolos

Como hemos dicho, los datos se envían a través del protocolo TCP/IP, pero, [**¿qué es?**](https://www.youtube.com/watch?v=JQDCL17sARA) 

En resumen, **la arquitectura de protocolos TCP/IP está basada** en un modelo conceptual de **cuatro capas** conocido como el modelo DARPA, nombre de la agencia gubernamental de EE.UU. que desarrolló inicialmente el protocolo TCP/IP.

Las cuatro capas del modelo DARPA son:

- Aplicación
- Transporte
- Internet
- Interfaz de red

En este caso lo que más nos interesa es la capa aplicación.

Esta capa proporciona a las aplicaciones la capacidad de acceder a los servicios de las demás capas y define los protocolos utilizados para intercambiar datos. Existen diversidad de protocolos.

Los más utilizados son:

- **Hypertext Transfer Protocol (HTTP):** se utiliza para transferir los archivos que componen las páginas web de la World Wide Web.

- **File Transfer Protocol (FTP):** se utiliza para la transferencia interactiva de archivos.

- **Simple Mail Transfer Protocol (SMTP):** se utiliza para la transferencia de mensajes de correo electrónico y archivos adjuntos.

- **Telnet:** es un protocolo de emulación de terminal. Se utiliza para iniciar sesión de forma remota en máquinas de la red.

Además, los siguientes protocolos ayudan a facilitar el uso y la gestión de redes TCP/IP:

- **Domain Name System (DNS):** se utiliza para traducir un nombre de host en una dirección IP.

- **Routing Information Protocol (RIP):** es un protocolo de enrutamiento que los enrutadores utilizan para intercambiar información en una red IP.

- **Simple Network Management Protocol (SNMP):** se utiliza entre una consola de gestión de red y dispositivos de red (routers, bridges, hubs inteligentes) para recoger e intercambiar información de gestión de la red.

> HTTP, FTP, DNS... Buen momento para poner tus dotes de búsqueda en práctica, ¿no? ;)

## &#8226; Los navegadores

Los navegadores son esos programas que usamos para navegar por internet pero, [**¿cómo funcionan?**](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/C%C3%B3mo_funciona_la_Web)

El navegador actúa como un cliente que contacta con el servidor y pide información. Envía una petición al servidor a través del protocolo HTTP y este responde a través del código HTML, CSS y el resto de archivos al navegador.

&nbsp;

<div align="center">[**Volver a la página principal**](../README.md)</div>

