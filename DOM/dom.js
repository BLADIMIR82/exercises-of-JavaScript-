console.log(window.document);
console.log(document);
/////////////Eventos de JavaScript//////////////////
///variables/////
const $evento = document.querySelector("#evento"),
  $eventoMultiple = document.querySelector("#multiple"),
  $eventoRemove = document.querySelector("#remove")
////Funciones/////

function holaMundo(e) {
  Swal.fire("hello Word!!!");
  console.log(e);
}

const removerDobleClick =(e)=>{
  Swal.fire(`removiendo el tipo de evento ${e.type}`)
    console.log(e);
    $eventoRemove.removeEventListener("dblclick", removerDobleClick);
    $eventoRemove.disabled = true;
};
$eventoRemove.addEventListener("dblclick", removerDobleClick)

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
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  });
});

