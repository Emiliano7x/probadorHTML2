function crearBarraNavegacion(){
  
  // Crear el barraNav
    var barraNav = document.createElement('div');
    barraNav.style.position = 'fixed';
    barraNav.style.left = 0;
    barraNav.style.right = 0;
    //barraNav.style.bottom = 0;   //con esta linea y borrando .top se posiciona en la base como barraNav
    barraNav.style.top = 0;       //con esta y borrando .bottom queda como header arriba
    barraNav.style.background = '#222';
    barraNav.style.color = '#fff';
    barraNav.style.padding = '6px 8px';           // más fino
    barraNav.style.display = 'flex';
    barraNav.style.alignItems = 'center';
    barraNav.style.justifyContent = 'space-between';
    barraNav.style.zIndex = 1000;
    barraNav.style.fontSize = "0.95rem";         // más compacto

    // Crear el título
   /*  const tituloBarra = document.createElement('span');
    tituloBarra.textContent = 'CREADOR DE DIVS';
    tituloBarra.style.fontWeight = 'bold';
    tituloBarra.style.fontSize = '1.1rem';
    tituloBarra.style.marginRight = '20px';
 */
    const imagenLogo = document.createElement('img');
    imagenLogo.src = 'imagenes/titulo_creador_de_divs.png';
    imagenLogo.alt = 'Creador de Divs Logo';
    imagenLogo.style.width = '50px';              // tamaño del logo  
    imagenLogo.style.height = '50px';             // tamaño del logo
    imagenLogo.style.marginRight = '10px';        // margen derecho para separar del título 
    imagenLogo.style.marginLeft = '30px';        
    imagenLogo.style.verticalAlign = 'middle';    // alinear verticalmente con el texto
   // tituloBarra.insertBefore(imagenLogo, tituloBarra.firstChild); // insertar imagen


    barraNav.insertBefore(imagenLogo, barraNav.firstChild);

    // crear un enlace al repositorio de GitHub
    const enlaceGitHub = document.createElement('a');
    enlaceGitHub.href = 'https://github.com/Emiliano7x/probadorHTML2.git';
    enlaceGitHub.textContent = 'Visita mi => Repositorio en GitHub';   
    enlaceGitHub.style.color = '#fff';
    enlaceGitHub.style.textDecoration = 'none';   
    enlaceGitHub.style.marginLeft = '20px';       // margen izquierdo para separar del título
    enlaceGitHub.target = '_blank';                // abrir en nueva pestaña    
    enlaceGitHub.rel = 'noopener noreferrer';     // seguridad al abrir en nueva pestaña 
    barraNav.appendChild(enlaceGitHub);
    

    // Crear contenedor para los campos y labels
    const fieldsContainer = document.createElement('div');
    fieldsContainer.style.display = 'flex';
    fieldsContainer.style.gap = '12px';        // un poco menos de separación

    // Crear contenedor para los botones
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.gap = '8px';                  // menos separación

    const buttonNuevoNivel = document.createElement('button');
    buttonNuevoNivel.onclick = agregaNivel;                         //-------------agregaNivel
    buttonNuevoNivel.textContent = 'Agregar Nuevo Nivel';
    buttonNuevoNivel.style.padding = "3px 12px";         // más bajo
    buttonNuevoNivel.style.fontSize = "0.95rem";

    const buttonMail = document.createElement('button');  // botón para mandar resultado por mail id = "abrirModal"
    buttonMail.textContent = 'Enviar Por Mail';
    buttonMail.onclick = mandarPorMail;
    buttonMail.id = "abrirModal";
    buttonMail.style.padding = "3px 12px";
    buttonMail.style.fontSize = "0.95rem";

    const buttonJSON = document.createElement('button');   // botón para guardar resultado como JSON
    buttonJSON.textContent = 'Guardar  Como JSON';
    buttonJSON.onclick = guardarComoJSON;
    buttonJSON.id = "descargarJSON";
    buttonJSON.style.padding = "3px 12px";
    buttonJSON.style.fontSize = "0.95rem";

    buttonsContainer.appendChild(buttonNuevoNivel);
    buttonsContainer.appendChild(buttonMail);
    buttonsContainer.appendChild(buttonJSON);

    // Agregar todo al barraNav
    barraNav.appendChild(fieldsContainer);
    barraNav.appendChild(buttonsContainer);

    // Agregar el barraNav al body
    document.body.appendChild(barraNav);

//    return barraNav;
}

// Crear una instancia
const switchTemas = new SwitchTemas({
  defaultTheme: 'dark',
  id: 'theme-switch', // ID del input checkbox
  checked: false, // true para dark, false para light
  position: 'top-right', // top-right o 'bottom-left' 
  onToggle: (nuevoTema) => console.log(`Tema cambiado a: ${nuevoTema}`)
});

// Iniciarlo en el DOM 
document.addEventListener('DOMContentLoaded', () => switchTemas.init());





// Función para escapar caracteres especiales en HTML 
/* Por qué escapar el HTML? Si no lo haces, el correo interpretará las etiquetas y no mostrará el código, sino el resultado visual de ese HTML. */
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

//------------------------

//recorre todos los campos con la clase campoDato y los almacena en un JSON
//como todos los niveles estan de a pares, el impar es el html y el par el css
function datosEnJson(){
    let niveles = {};
    let nivel = 1;
    let cont = 1;
    let htmlTemp = "";
    let cssTemp = "";

    document.querySelectorAll('.campoDato').forEach(function(elemento) {  
      if (cont % 2 !== 0) {
        // Impar: HTML
        htmlTemp = elemento.value;
      } else {
        // Par: CSS
        cssTemp = elemento.value;
        // Guardar el par HTML+CSS en el objeto
        niveles["nivel:" + nivel] = {
          html: htmlTemp,
          css: cssTemp
        };
        nivel++;
      }
      cont++;
    });

    // Si quieres el resultado en JSON:
    const nivelesJSON = JSON.stringify(niveles, null, 2);
    console.log(nivelesJSON);
    return nivelesJSON;
}


function guardarComoJSON() {

    document.getElementById('descargarJSON').onclick = function() {
    /*   const jsonString = JSON.stringify(niveles, null, 2); */
      const blob = new Blob([ datosEnJson() ], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "niveles.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    };
//----------------------------


async function pedirDatosYProcesarVentanaModal() {

  const datos = await mostrarVentanaModal();  

  console.log("Nombre:", datos.nombre);
  console.log("Correo:", datos.email);

  const templateParams = {
    nombre: datos.nombre,
    codigo: datosEnJson(),
    email: datos.email
  };

 return templateParams;
}

async function solicitarDatosVentanaDesplegable() {
  const data = await VentanaDesplegable.pedirDatos();
  if (data) {
    //alert(`Nombre: ${datos.nombre}\nEmail: ${datos.email}`);
    return data
  } else {
    alert('Cancelado');
  }
}



async function mandarPorMail() {

//solicitarDatosVentanaDesplegable ();

  const datos = await pedirDatosYProcesarVentanaModal();

  if (datos) {
    alert(`Datos recibidos: ${datos.nombre}`);  // prestarle atencion a las comillas, 
                                                 //tienen que ser las invertidas, la que se usa para los acentos en bocales
  } else {
    console.log("El usuario canceló.");
  }


/*     metodo para mandar mail, 
           id del servicio de mail, se obtiene de emailjs-Acounts
        id del template del correo que se manda, se configura en emailjs-Email Templates
       templateParams recive un objeto, los nombres de las propiedades deben coincidir con los usados en el template del mail {{codigo}}  */
/* 
    emailjs.send('service_cf2cihg', 'template_4mh8b9t', datos).then(
      (response) => {
        console.log(datos.nombre + ' - '+ datos.email, response.status, response.text);
        alert('Correo Enviado!  a '+ datos.nombre + '  ,'+ response.status +" , "+ response.text);
       },
      (error) => {
        console.log('FAILED...', error);
        alert('FALLA AL ENVIAR...', error);
        },  
      );
 */
}

/* inicializacion del servicio de mail */
emailjs.init({
        publicKey: "vieyZ1f8iAvIqu7fP",
      });


var index = 2
function agregaNivel(){
   crearNivel(index, enunciado(index), ayuditaSpam(index)); 
   index++;
}



crearBarraNavegacion();

// acciones al hacer clic
/* naviBar.buttonNuevoNivel.onclick =agregaNivel;
naviBar.buttonMail.onclick = mandarPorMail;
naviBar.buttonJSON.onclick = guardarComoJSON;
 
 */




