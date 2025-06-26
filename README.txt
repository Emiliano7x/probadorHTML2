a la version original le agregue 
resaltado de sintaxis, cambiando los textarea por code-input.js que usa prism para el resaltado

achique la cadena del resultado que se muestra al juntar los dos editores, me daban problemas las comillas invertidas.
ademas para mostrar el contenido dentro de un iframe no se necesita ingresar toda la estructura de la pagina, de la forma siguiente alcanza: 

    const contenido =
    "<style>" + css + "</style>\n" +
    html;


junte todas las funciones probarN() en una que recibe como parametro en que nivel se hace la llamada,
 <button onclick="probar(1)>

   function probar(i) 
      const html = document.getElementById("html"+ i ).value;
      const css = document.getElementById("css"+ i ).value;
      ...
      document.getElementById('resultado'+i).srcdoc = contenido;




con el texto que se repite 'PRESIONA EL BOTON "PROBAR" AL FINALIZAR Y TOMA FOTO O CAPTURA DEL RESULTADO' 
los cambie por un parrafo <p> todos con la misma clase txt_presionaBoton, 
luego con querySelectorAll se les agrega a todos ese mismo texto

hice lo mismo con las ayudas de los spam 
<span title="" style="cursor: progress;">----AYUDA?----</span>
se llama a la correspondiente ayuditaSpam-N() al final del document

separe a otro fichero los enunciados, se los recupera a cada uno de la forma
                                 document.getElementById('parrafo1').textContent = enunciado1();
la idea es tenerlos a todos nucleados en un mismo sitio para revisarlos y/o modificarlos de forma sencilla y entendible


a partir del enunciado 2 estan creados todos los niveles con DOM


>>>>> Para crear un nivel <<<<<<, 

hay que agregar primero los textos en enunciados.js agregar un case con el texto para el enunciado y si tiene ayuda tambien de la misma forma
   
    enunciado()
        case N:
            str="...";
    ayuditaSpam(n)
        case N:
            str= "...";

 y en script.js
    en las ultimas lineas se crean tantos niveles como se especifique en el for, 

el nivel 1 es el unico que se creo de la forma tradicional con html, tranquilamente se puede eliminar y comensar con el for en el 1

si no se agrega ningun anunciado o ayudita, aparecera un texto por defecto

for (let index = 2; index <=10; index++) {
    crearNivel(index, enunciado(index), ayuditaSpam(index)); 
}
ç