// console.log("uploadfile");
// variables globales
const formularioUI = document.getElementById("formulario");
const listaProductosUI = document.getElementById("listadeproductos");
let arrayProductos = [];

// funciones
const crearProductos = (productos) => {
  let item = {
    productos: productos,
  };
  arrayProductos.push(item);
  return item;
};

// let produtcone = crearProductos("arroz");
// let productwo = crearProductos("azucar");
// console.log(produtcone);
// console.log(productwo);
// console.log(arrayProductos);
const guardar = () => {
  localStorage.setItem("mercado", JSON.stringify(arrayProductos));
};
const renderizar = () => {
  listaProductosUI.innerHTML = "";
  arrayProductos = JSON.parse(localStorage.getItem("mercado"));
  if (arrayProductos === null) {
    arrayProductos = [];
  } else {
    arrayProductos.forEach((elemento) => {});
  }
  // console.log(arrayProductos);
};

// llamado de eventos
formularioUI.addEventListener("submit", (e) => {
  e.preventDefault();
  let productosUI = document.querySelector("#producto").value;

  // console.log(productosUI);
  crearProductos(productosUI);
  guardar();
  formularioUI.reset();
});
document.addEventListener("DOMContentLoaded", renderizar);

///EJERCICIOS DE JAVASCRIPT///
// /join() ///
console.group("metodo join")
let letras = ["a", "ac", "b", "ba", "bac", "c", "d", "db", "dba", "dbac"];

console.log(letras.join("")[2]);

function indice() {
  let i = letras.join("")[2];  //join() es un metodo para Array
  return i;
}
indice();
console.log(indice());

function array(letras) {
  letras = letras.join("");
  return letras;
}
const x = array(letras)[2];
console.log(x);
//con arrow funtion//
const br = () => letras.join("")[2]
console.log(br())
console.groupEnd()

//PROMEDIO///
let numeros = [5, 6, 7, 8];

let sum = 0;

function suma() {
  
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }

  let prom = sum / numeros.length;
  return prom;
}
console.log(suma());

//SEPARAR NUMERO Y SUMAR LOS DIGITOS//

var b = "561";
function sumaString() {
    let res = 0;
    b.split('').forEach(c => res += parseInt(c));
    return res;



    
  }
  console.log(sumaString());

  function factorial(n){
    var res = 0;
    for(let i = 0; i< n; i++){
      res ++
    }
    return res;
  }
  console.log(factorial(125));






  
  