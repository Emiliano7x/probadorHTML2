# ProbadorHTML 2.0

Esta es una pequeña aplicacion web para practicar con HTML y CSS
Esta escrito en HTNL con CSS y JavaScript por lo cual deberia poder ejecutarse en cualquier navegador web sin problemas.

Al entrar en la aplicacion ya esta cargado el primer nivel para resolver. 
Se debe leer la consigna y escribir el marcado HTML y CSS en las areas de texto correspondientes (html arriba y css abajo),
luego al presionar el boton Probar se vera el "resultado" en el area de texto mas grande de la derecha.

Al terminar un nivel se puede agregar el siguiente presionando el boton de "Agregar Nuevo Nivel",
por ahora hay un limite de 6 pero se puede configurar para sumarle todos los que se deseen.

Incluye un panel desplegable a la izquierda con algunas notas de sintaxis y 
otra ayuda mas puntu para cada nivel que aparece al pasar el cursor sobre la palabra "ayuda?"

Cuenta con la opcion de juntar todos los codigos escritos en un archivo JSON, se puede descargar con el boton "Guardar Como JSON"
este mismo JSON puede enviarse por mail, al apretar el boton correspondiente pide el nombre y el email para ser 
enviados junto con los codigos.

El servicio de correo se gestiona con www.emailjs.com el cual los reenvia al correo personal que se le asigne en la configuracion
tiene un limite de 50,000 characters por cada mail y 200 mails por mes. 
usar este servicio de emailjs es util para proteger el mail de contacto personal de ser robado por bots 
que los recolectan para espamear publicidad


# Estructura del proyecto

- `index.html`: Contiene el código HTML base y el primer nivel.
- `niveles.js`: Genera los niveles adicionales al presionar "Agregar Nivel".
- `enunciados.js`: Proporciona los textos de las consignas y ayudas.
- `plugins/`: Incluye dependencias externas como code-input y PrismJS.
- `ayudaLateral.js`: Controla el panel de ayuda lateral.
- `barraNav.js`: Gestiona la barra superior y los botones de acciones.
- `ventanaModal.js`: Muestra la ventana modal para enviar el correo electrónico.
- `LICENSE`: Licencia del proyecto.

En el index deje el codigo en html del primer nivel, luego los siguientes son creados desde "niveles.js" apretando el boton "Agregar Nivel", 
trae los textos de las consignas y ayudas desde "enunciados.js"
los textarea usan code-input junto con prismjs para el resaltado del codigo (https://codeinput.com/  https://prismjs.com/), hubicado en la carpeta plugins/
"ayudaLateral.js" contiene la ventana corrediza de la izquierda con la ayuda de sintaxis, que se habre con el boton flotante "ayuda sintaxis"
"barraNav.js" controla la barra superior donde esta el enlace al repositorio y los botones para mandar mail y guardar como json 
"ventanaModal es invocada al enviar un email, pide el nombre y el correo para ser enviados junto con el  json del codigo


# Créditos

Este proyecto fue creado como parte de la materia de diseño web de Fabián, quien también inspiró la idea original del ProbadorHTML.  
Versión original: [ProbadorHTML 1.0](https://fabiangeloni.github.io/probador.html)

# Licencia

Este proyecto está licenciado bajo los términos de la Licencia Pública General GNU v3.0.  
Para más información, consulta el archivo `LICENSE` o visita [https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html).
