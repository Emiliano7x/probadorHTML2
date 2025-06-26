// label e input: mail
const labelMail = document.createElement('label');
labelMail.textContent = 'E-mail: ';
labelMail.style.marginRight = '4px';
labelMail.htmlFor = 'inputMail';

const unInputMail = document.createElement('input');  // input de e-mail
unInputMail.type = 'text';
unInputMail.id = 'inputMail';
unInputMail.placeholder = 'Escribe tu e-Mail...';
unInputMail.style.height = "22px";                   // más bajo
unInputMail.style.fontSize = "0.95rem";
unInputMail.style.padding = "2px 6px";

labelMail.appendChild(unInputMail);
fieldsContainer.appendChild(labelMail);

// label e input: nombre
const labelNombre = document.createElement('label');
labelNombre.textContent = 'Nombre: ';
labelNombre.htmlFor = 'inputNombre';
labelNombre.style.marginLeft = '8px';                // menos margen
labelNombre.style.marginRight = '4px';

const unInputNombre = document.createElement('input'); // input del nombre
unInputNombre.type = 'text';
unInputNombre.id = 'inputNombre';
unInputNombre.placeholder = 'Escribe tu nombre...';
unInputNombre.style.height = "22px";
unInputNombre.style.fontSize = "0.95rem";
unInputNombre.style.padding = "2px 6px";

labelNombre.appendChild(unInputNombre);
fieldsContainer.appendChild(labelNombre);