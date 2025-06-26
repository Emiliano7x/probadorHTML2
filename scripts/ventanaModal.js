function crearElementosDelModal() {
  const modal = document.createElement('div');
  modal.id = 'miModal';
  modal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const titulo = document.createElement('h3');
  titulo.innerText = 'Ingresá tus datos';

  const inputNombre = document.createElement('input');
  inputNombre.type = 'text';
  inputNombre.id = 'nombre';
  inputNombre.placeholder = 'Nombre';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.id = 'correo';
  inputEmail.placeholder = 'Correo electrónico';

  const botonAceptar = document.createElement('button');
  botonAceptar.innerText = 'Aceptar';
  botonAceptar.id = 'enviarDatos';

  const botonCancelar = document.createElement('button');
  botonCancelar.innerText = 'Cancelar';
  botonCancelar.onclick = function () {
    modal.style.display = 'none';
  };

  modalContent.appendChild(titulo);
  modalContent.appendChild(inputNombre);
  modalContent.appendChild(inputEmail);
  modalContent.appendChild(document.createElement('br'));
  modalContent.appendChild(botonAceptar);
  modalContent.appendChild(botonCancelar);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  return {
    modal,
    botonAceptar,
    mostrar: () => modal.style.display = 'block',
    ocultar: () => modal.style.display = 'none',
    getDatos: () => ({
      nombre: inputNombre.value,
      email: inputEmail.value
    })
  };
}


 function mostrarVentanaModal() {
  const miModal = crearElementosDelModal();
  miModal.mostrar();

  return new Promise((resolve, reject) => {
    miModal.botonAceptar.onclick = function () {
      const datos = miModal.getDatos();

      if (datos.nombre && datos.email) {
        miModal.ocultar();
        resolve(datos); // ✅ Devolvemos los datos correctamente
      } else {
        alert("Completá ambos campos.");
      }
    };
  });
}
