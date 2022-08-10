import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Apr 22, 2023 02:00:00","Feliz cumpleaños Bladimir 😎")
});

d.addEventListener("keydown", (e) =>{
  shortcuts(e)
  moveBall( e,".ball", ".stage")
});
