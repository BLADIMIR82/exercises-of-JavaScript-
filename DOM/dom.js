console.log(window.document);
console.log(document);
/////////////Eventos de JavaScript//////////////////
///variables/////
const $evento = document.querySelector("#evento"),
  $eventoMultiple = document.querySelector("#multiple"),
  $eventoRemove = document.querySelector("#remove");
////Funciones/////

function holaMundo(e) {
  Swal.fire("hello Word!!!");
  console.log(e);
}

const removerDobleClick = (e) => {
  Swal.fire(`removiendo el tipo de evento ${e.type}`);
  console.log(e);
  $eventoRemove.removeEventListener("dblclick", removerDobleClick);
  $eventoRemove.disabled = true;
};
$eventoRemove.addEventListener("dblclick", removerDobleClick);

const saludar = (saludo = "Desconocid@") => {
  Swal.fire(`Hola ${saludo}`);
};

///Llamadores de Eventos/////
$evento.onclick = holaMundo;

$evento.onclick = (event) => {
  Swal.fire("evento semanticos en JavasScript");
  console.log(event);
};
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.onclick = (event) => {
  Swal.fire("evento multiples en JavasScript");
  console.log(event.type);
};
$eventoMultiple.addEventListener("click", (e) => {
  saludar("bladimir"), saludar("Alejandro"); //// con sweetalert no llama los eventos multiples////
});

/* **********  DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */

// Si no se especifica el parámetro boolean, el valor por defecto es false.
//   Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
//   Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}
console.log($divsEventos);
$divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos,{
    capture: false,
    once: true,
  });
});
console.log(window);
// confirm(`hello word`)
console.log(window.innerWidth); //devuelve el ancho interior de la ventana en píxeles
console.log(window.innerHeight); //devuelve el alto interior de la ventana en píxeles
console.log(window.outerWidth); // obtiene el ancho exterior del navegador. Representa el ancho total de la ventana incluyendo las barras laterales (si es expandida), interfaz grafíca y los de elementos para redimencionado de bordes.
console.log(window.outerHeight); //obtiene el alto exterior del navegador. Representa el ancho total de la ventana incluyendo las barras laterales (si es expandida), interfaz grafíca y los de elementos para redimencionado de bordes.

const $abrirVentana = document.getElementById("abrir-ventana"),
  $cerrarVentana = document.getElementById("cerrar-ventana"),
  $imprimirVentana = document.getElementById("imprimir-ventana");

let ventana;

$abrirVentana.addEventListener("click", (e) => {
  ventana = window.open(
    "https://www.linkedin.com/in/bladimir-rojas-sepulveda-developer/"
  );
});
$cerrarVentana.addEventListener("click", (e) => {
  ventana.close();
});
$imprimirVentana.addEventListener("click", (e) => {
  print();
  // location.reload()
});

//**********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador -
console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();
console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2);
console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
