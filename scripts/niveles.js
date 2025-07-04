//----------------------------------------------------------------------------------
// Función para crear el Nivel dinámicamente
function crearNivel(numero,unEnunciado, unaAyudita) {      
  // Crear el contenedor principal
  const wrap = document.createElement('div');
  wrap.className = 'wrap';

  // Título
  const h2 = document.createElement('h2');
  h2.textContent = 'NIVEL '+numero;
  wrap.appendChild(h2);

  wrap.appendChild(document.createElement('br'));

  // Primer párrafo
  const p1 = document.createElement('p');
  p1.id = 'parrafo'+numero;                                
  p1.textContent= unEnunciado;                                 
  p1.className = 'parrafo';
  wrap.appendChild(p1);

  wrap.appendChild(document.createElement('br'));

  // Segundo párrafo
  const p2 = document.createElement('p');
  p2.className = 'txt_presionaBoton';
  wrap.appendChild(p2);

  // Span amarillo
  const span = document.createElement('span');
  span.className = 'amarillo';
  span.title = unaAyudita;                                           
  span.style.cursor = 'progress';
  span.textContent = '----AYUDA?----';
  wrap.appendChild(span);

  wrap.appendChild(document.createElement('br'));
  wrap.appendChild(document.createElement('br'));

  // Contenedor de editores
  const contenedor1 = document.createElement('div');
  contenedor1.className = 'contenedor';

  // Editor HTML
  const editorHtml = document.createElement('div');
  editorHtml.className = 'editor';
  const labelHtml = document.createElement('label');
  labelHtml.textContent = 'HTML:';
  editorHtml.appendChild(labelHtml);

  const codeInputHtml = document.createElement('code-input');
  codeInputHtml.id = 'html'+numero;                                                 //---code-input codigo html
  codeInputHtml.setAttribute('class',"campoDato");
  codeInputHtml.setAttribute('placeholder', 'Escribí tu DIV en HTML aquí...');
  codeInputHtml.setAttribute('template', 'syntax-highlighted');
  codeInputHtml.setAttribute('lang', 'html');
  editorHtml.appendChild(codeInputHtml);

  contenedor1.appendChild(editorHtml);

  wrap.appendChild(contenedor1);


  // Editor CSS
  const editorCss = document.createElement('div');
  editorCss.className = 'editor';
  const labelCss = document.createElement('label');
  labelCss.textContent = 'CSS:';
  editorCss.appendChild(labelCss);

  const codeInputCss = document.createElement('code-input');
  codeInputCss.id = 'css'+numero;                                                     //-----code-input codigo css
  codeInputCss.setAttribute('class',"campoDato");
  codeInputCss.setAttribute('placeholder', 'Escribí tu CSS aquí...');
  codeInputCss.setAttribute('template', 'syntax-highlighted');
  codeInputCss.setAttribute('lang', 'css');
  editorCss.appendChild(codeInputCss);

  contenedor1.appendChild(editorCss);


  // Contenedor de resultado
  const contenedor2 = document.createElement('div');                       
  contenedor2.className = 'contenedor';                                     

  const labelResultado = document.createElement('label');
  labelResultado.textContent = 'Resultado:';
  contenedor2.appendChild(labelResultado);

  const iframe = document.createElement('iframe');
  iframe.id = 'resultado' + numero;                                   //numero de nivel-----dato q cambia entre niveles
  contenedor2.appendChild(iframe);

      // Botón Probar
  const boton = document.createElement('button');
  boton.textContent = 'Probar';
  boton.onclick = function() { probar(numero); };                                 //-----boton probar
  contenedor2.appendChild(boton);

  wrap.appendChild(contenedor2);

  // Finalmente, agregar al body (o donde quieras)
  document.body.appendChild(wrap);
}


// al apretar el boton PROBAR junta los contenidos de los dos code-input de html y css y lo muestra el iframe del resultado
  function probar(i) {
      const html = document.getElementById("html"+ i ).value;
      const css = document.getElementById("css"+ i ).value;

      const contenido =
        "<style>" + css + "</style>\n" +
        html;

      document.getElementById('resultado'+i).srcdoc = contenido;

    }

//Carga de los textos ============================================================================================================================================= 


 document.querySelectorAll('.txt_presionaBoton').forEach(function(elemento) {
  elemento.textContent = 'PRESIONA EL BOTON "PROBAR" AL FINALIZAR' ;
});


//crearNivel(2, enunciado(2), ayuditaSpam(2)); 
/* // creacion de niveles
for (let index = 2; index <=2; index++) {   //son 6
    crearNivel(index, enunciado(index), ayuditaSpam(index)); 
} */

