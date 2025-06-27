# ProbadorHTML 2.0

ProbadorHTML 2.0 es una aplicación web interactiva para practicar HTML y CSS. Está desarrollada en HTML, CSS y JavaScript, por lo que puede ejecutarse en cualquier navegador web moderno.

## Características principales

- **Niveles interactivos:** Al ingresar, se carga automáticamente el primer nivel. El usuario debe leer la consigna y escribir el código HTML y CSS en las áreas de texto correspondientes. Al presionar el botón **Probar**, se muestra el resultado en el área de vista previa.
- **Gestión de niveles:** Se pueden agregar nuevos niveles con el botón **Agregar Nuevo Nivel** (por defecto hasta 6, configurable).
- **Panel de ayuda:** Incluye un panel desplegable a la izquierda con notas de sintaxis y ayudas específicas para cada nivel, accesibles al pasar el cursor sobre "ayuda?".
- **Exportación y envío:** Permite descargar todos los códigos escritos en un archivo JSON o enviarlos por correo electrónico usando [EmailJS](https://www.emailjs.com/), protegiendo así el correo personal del usuario.
- **Resaltado de código:** Utiliza [code-input](https://codeinput.com/) y [PrismJS](https://prismjs.com/) para resaltar la sintaxis en los editores de código.

## Instalación y uso

1. **Requisitos:**  
   Solo necesitas un navegador web moderno (Chrome, Firefox, Edge, etc.).

2. **Ejecución:**  
   Descarga o clona este repositorio y abre el archivo `index.html` en tu navegador.

## Estructura del proyecto

- `index.html`: Contiene el código HTML base y el primer nivel.
- `niveles.js`: Genera los niveles adicionales al presionar "Agregar Nivel".
- `enunciados.js`: Proporciona los textos de las consignas y ayudas.
- `plugins/`: Incluye dependencias externas como code-input y PrismJS.
- `ayudaLateral.js`: Controla el panel de ayuda lateral.
- `barraNav.js`: Gestiona la barra superior y los botones de acciones.
- `ventanaModal.js`: Muestra la ventana modal para enviar el correo electrónico.
- `LICENSE`: Licencia del proyecto.

## Créditos

Este proyecto fue creado como parte de la materia de diseño web de Fabián, quien también inspiró la idea original del ProbadorHTML.  
Versión original: [ProbadorHTML 1.0](https://fabiangeloni.github.io/probador.html)

## Licencia

Este proyecto está licenciado bajo los términos de la Licencia Pública General GNU v3.0.  
Para más información, consulta el archivo `LICENSE` o visita [https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html).

