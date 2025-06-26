// Crear el toggle (checkbox y label)
const toggleInput = document.createElement('input');
toggleInput.type = "checkbox";
toggleInput.id = "toggle-menu";
toggleInput.style.display = "none"; // Ocultamos el checkbox real

const toggleLabel = document.createElement('label');
toggleLabel.htmlFor = "toggle-menu";
toggleLabel.className = "toggle-label";
toggleLabel.innerText = "AYUDA SINTAXIS";

// Crear el panel lateral
const sidePanel = document.createElement('div');
sidePanel.className = "side-panel";

// --- Contenido del panel como DOM puro ---
function appendBr(parent) {
  parent.appendChild(document.createElement("br"));
}

// SINTAXIS DIV
let h3 = document.createElement("h3");
h3.textContent = "SINTAXIS DIV";
sidePanel.appendChild(h3);

let p = document.createElement("p");
let code = document.createElement("code");
code.textContent = "<div>Contenido del div</div>";
p.appendChild(code);
sidePanel.appendChild(p);
appendBr(sidePanel);

// AGREGAR CLASE
h3 = document.createElement("h3");
h3.textContent = "AGREGAR CLASE";
sidePanel.appendChild(h3);

p = document.createElement("p");
code = document.createElement("code");
code.textContent = '<div class="nombreclase">Contenido del div</div>';
p.appendChild(code);
sidePanel.appendChild(p);
appendBr(sidePanel);

// AGREGAR IMAGEN
h3 = document.createElement("h3");
h3.textContent = "AGREGAR IMAGEN";
sidePanel.appendChild(h3);

p = document.createElement("p");
code = document.createElement("code");
code.textContent = '<img src="www.ejemplo.com/imagen.jpg">';
p.appendChild(code);
sidePanel.appendChild(p);
appendBr(sidePanel);

// EJEMPLO IMAGEN DENTRO DE DIV
h3 = document.createElement("h3");
h3.textContent = "EJEMPLO IMAGEN DENTRO DE DIV";
sidePanel.appendChild(h3);

let p1 = document.createElement("p");
let code1 = document.createElement("code");
code1.textContent = "<div>";
p1.appendChild(code1);
sidePanel.appendChild(p1);

let p2 = document.createElement("p");
let code2 = document.createElement("code");
code2.textContent = ' <img src="www.ejemplo.com/imagen.jpg">';
p2.appendChild(code2);
sidePanel.appendChild(p2);

let p3 = document.createElement("p");
let code3 = document.createElement("code");
code3.textContent = "</div>";
p3.appendChild(code3);
sidePanel.appendChild(p3);

appendBr(sidePanel);

// SINTAXIS CSS
h3 = document.createElement("h3");
h3.textContent = "SINTAXIS CSS";
sidePanel.appendChild(h3);

p = document.createElement("p");
p.textContent = ".nombreclase{atributo:valor; atributo2:valor2;}";
sidePanel.appendChild(p);
appendBr(sidePanel);

// CSS DE LA CLASE
h3 = document.createElement("h3");
h3.textContent = "CSS DE LA CLASE";
sidePanel.appendChild(h3);

p = document.createElement("p");
p.textContent = "Debe llamarse igual y comienza con un punto .";
sidePanel.appendChild(p);
appendBr(sidePanel);

p = document.createElement("p");
p.textContent = ".nombreclase{atributo:valor;atributo2:valor;}";
sidePanel.appendChild(p);
appendBr(sidePanel);

// ATRIBUTOS CSS MAS COMUNES
h3 = document.createElement("h3");
h3.textContent = "ATRIBUTOS CSS MAS COMUNES";
sidePanel.appendChild(h3);

const atributos = [
    "ANCHO: width   (px o %)",
    "ALTO: height   (px o %)",
    "COLOR DE FONDO: background-color",
    "COLOR DE TEXTO: color",
    "TAMAÑO TEXTO: font-size  (px)",
    "ALINEAR TEXTO: text-align   (left, right, center)",
    "MARGEN EXTERNO: margin  (px)",
    "MARGEN INTERNO: padding  (px)",
    "BORDES REDONDEADOS: border-radius  (px)",
    "TIPO DE FUENTE: font-family",
    "FLOTAR A LA IZQUIERDA: float:left;",
    "CURSOR MANITO: cursor:pointer;",
    "BORDE: border:2px solid (color);"
];
atributos.forEach(txt => {
  let p = document.createElement("p");
  p.textContent = txt;
  sidePanel.appendChild(p);
});

appendBr(sidePanel);

p = document.createElement("p");
p.textContent = "los colores se pueden agregar con codigo de color";
sidePanel.appendChild(p);

p = document.createElement("p");
p.textContent = "Ejemplo: NEGRO= #000000;";
sidePanel.appendChild(p);

p = document.createElement("p");
p.textContent = 'buscar en google "selector de color"';
sidePanel.appendChild(p);

appendBr(sidePanel);

// Inserta los elementos al inicio del body para asegurar el orden correcto
document.body.insertBefore(toggleInput, document.body.firstChild);
document.body.insertBefore(toggleLabel, document.body.firstChild.nextSibling);
document.body.insertBefore(sidePanel, document.body.firstChild.nextSibling.nextSibling);