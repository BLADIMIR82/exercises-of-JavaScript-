//funciones//
const a = "hola mundo";
//funcion que devuelve el numero de caracteres de una string //
function largo() {
  let x = a.length;
  return x;
}
console.log(largo());

function contar(cadena = "") {
  if (!cadena) {
    console.log("no ingreso datos");
  } else {
    console.log(`la cadena ${cadena} ${cadena.length} caracteres`);
  }
}

contar("hola mundo");

const contarn = (cadena = "") =>
  !cadena
    ? console.log("no ingreso datos")
    : console.log(`la cadena ${cadena} ${cadena.length} caracteres`);

contarn("hola mundo");
///funcion para devolver el texto recortado//
// declarada
const recortar = (cadena = "", longitud = undefined) => {
  if (!cadena) {
    console.log("no ingreso datos");
  } else {
    console.log(cadena.slice(0, longitud));
  }
};
recortar("hola mundo", 4);
//expresada con operador ternario y arrow function//
const recortarn = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.log("no ingreso datos")
    : console.log(cadena.slice(0, longitud));
recortar("hola mundo", 4);
// declarada//
const cut = "hola mundo";

function cutn() {
  x = cut.slice(0, 4);
  return x;
}
console.log(cutn());

// separacion por un string por  caracter  definidos//
//declara//
const separar = "hola que tal";
function separarn() {
  x = separar.split(" ");
  return x;
}

console.log(separarn());

const sep = (cadena = "") => {
  if (!cadena) {
    console.log("introduce parametro");
  } else {
    console.log(cadena.split(" "));
  }
};

sep("hola que tal");
//declara con arrow function y ternario//

const sepn = (cadena = "") =>
  !cadena ? console.log("introduce parametro") : console.log(cadena.split(" "));

sepn("hola que tal");

// funcion que repite una cantida de veces un texto///

const duplicar = (texto = "", veces = 0) => {
  for (i = 1; i <= veces; i++) {
    console.log(`${texto} ${i} `);
  }
};
console.log(duplicar("hola mundox", 4));

// funcion que invierta las palabras//
//funcion declarativa//
const invertirCadena = (cadena = "") => {
  if (!cadena) {
    console.log("ingresa datos");
  } else {
    console.log(cadena.split("").reverse().join(""));
  }
};

invertirCadena("hello mundo");
//funcion expresasa//
const invertir = "hello mundo";

function invertira() {
  let x = invertir.split("").reverse().join("");

  return x;
}

console.log(invertira());

//funcion expresada con arrow function y operador ternario//

const invertirb = (texto = "") =>
  !texto
    ? console.log("ingresa datos")
    : console.log(texto.split("").reverse().join(""));

invertirb("bladimir rojas");

/// funcion quevalide la cantidad de veces que se repite una palabra//
////funcion expresada//

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) {
    console.log(" no ingresaste el texto largo ");
  }
  if (!texto) {
    console.log(" no ingresaste la palabra ");
  }

  let i = 0;
  let contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.log(
    `la palabra  ${texto} dentro ${cadena} se repite ${contador} veces `
  );
};

textoEnCadena("hola mundo adios mundo", "mundo");

///cuabtas veces se repite una letra/////

var cadena = "Cuantas 'A' aparecen en esta cadena.";

const textLarge = () => {
  contadorab = 0;
  for (var i = 1; i < cadena.length; i++) {
    if (cadena[i].toLowerCase() === "e") {
      contadorab++;
    }
  }
  return contadorab;
};
console.log(textLarge());

/// metodos para recorrer arrays///

const santos = [
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Mu",
    constellation: "Aries",
  },
  {
    name: "Aldebaran",
    constellation: "Tauro",
    id: 1653524328648,
  },
];

//metodo find//
const encontrar = () => {
  let ab = santos.find((item) => item.name == "Mu");
  return ab;
};
console.log(encontrar());

// retorna todo el objeto que contiene el name == "name"  {id: 5, name: 'Mu', constellation: 'Aries'}

//metodo map//

const mapear = () => {
  let abc = santos.map((item) => item.name);
  return abc;
};
console.log(mapear());
// retorna todas los parametros del array que contega name
// [
//     "Hyoga",
//     "Shun",
//     "Mu",
//     "Aldebaran"
// ]
//metodo some//

const alguno = () => {
  let abcd = santos.some((item) => item.id == 7);
  return abcd;
};

console.log(alguno());

/// este metodo devuelve true o false segun sea el caso///

/// metodo filter//

const filtar = () => {
  let xy = santos.filter((item) => item.name == "Mu");
  return xy;
};
console.log(filtar());
const number = [1, 2, 3, 4, 9, 6];

let num = number.filter((item) => item <= 4);

console.log(num);

//  el metodo filter devuelve todo el objeto que coincida con el parametro {
//   "id": 5,
//   "name": "Mu",
//   "constellation": "Aries"
// }

///metodo forEach///

const paraCada = () => {
  let xyz = number.forEach((item, index, number) => {
    console.log(`${item} ${index} ${number}`);
  });
  return xyz;
};

console.log(paraCada());

//contar elmentos de un array///

const animales = ["perro", "gato", "cerdo", "raton", "perro", "pollo", "gato"];
const contarAnimales = (arrayA = " ", contar = undefined) => {
  contadorA = 0;
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] === contar) {
      contadorA++;
    }
  }
  return contadorA;
};
console.log(contarAnimales(animales, "gato"));

/////PALINDROMO//////////

const palidromo = (palabraspalin = "") => {
  palabraspalin = palabraspalin.toLowerCase();
  let alReves = palabraspalin.split("").reverse().join("").replace();
  if (palabraspalin === alReves) {
    console.log(
      `si es palindromo la palabras original ${palabraspalin} palabra alreves ${alReves}`
    );
  } else
    console.log(
      `no es  palindromo la palabras original ${palabraspalin} palabra alreves ${alReves}`
    );
};
console.log(palidromo("salas"));

///// eliminar caracteres de un string ///
const eliminarCaracteres = (texto = "", patron = "") => {
  ////CON OPERADOR TERNARIO////
  // !texto
  //   ? console.warn("no ingresaste el texto")
  //   : !patron
  //   ? console.warn("no ingesaste texto")
  //   : console.log(texto.replace(new RegExp(patron, "ig"),""));

  if (!texto) {
    console.warn("no ingresaste el texto");
  }
  if (!patron) {
    console.warn("no ingresaste patron");
  } else {
    console.log(texto.replace(new RegExp(patron, "ig"), ""));
  }
  //  return texto, patron
};
eliminarCaracteres("abc1, abc2, abc3, abc4, abc5", "abc");

// De una colección de números dentro de una matriz, devuelve el valor más cercano a cero.
//En este ejercicio, debes analizar registros de temperatura para encontrar el más cercano a cero. Temperaturas de muestra. Aquí, -1,7 es lo más cercano a 0. Implemente la función  closestToZeropara devolver la temperatura más cercana a cero que pertenece a la matriz ts.
//  Si ts está vacío, devuelve 0 (cero).
//  Si dos números están tan cerca de cero, considere el número positivo como el más cercano a cero (por ejemplo, si ts contiene -5 y 5, devuelve 5).
//  Entrada:
//  Las temperaturas siempre se expresan con números de punto flotante que van desde -273 a 5526.
//  ts es siempre una matriz válida y nunca lo es  null.

function closestToZero(numbers) {
  if (!numbers.length) {
    return 0;
  }

  let closest = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (closest === 0) {
      console.log((closest = numbers[i]));
    } else if (numbers[i] > 0 && numbers[i] <= Math.abs(closest)) {
      console.log((closest = numbers[i]));
    } else if (numbers[i] < 0 && -numbers[i] < Math.abs(closest)) {
      console.log((closest = numbers[i]));
    }
    // console.log(- numbers[i]);
  }

  return closest;
}
console.log(
  closestToZero([
    7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7,
  ])
);
///// funcion que  organiza  y separa letras////
function countFrequencies(words) {
  let y = words.split(" ").sort();

  return y;
}
console.log(countFrequencies("the dog got the bone"));

////
function cantidadDeMesesConGanancia(data) {
  let contador = 0;
  for (let i = 0; i < data.length; i++) {
    let mes = data[i];
    if (mes > 0) contador++;
  }
  return contador;
}
console.log(cantidadDeMesesConGanancia([-1, 9, 0, 8, -5, 6, -24]));
////funcion que permite eliminar letar de un texto///

function filterWords(words, letters) {
  let z = words.replace(new RegExp(letters, "ig"), "");

  return z;
}

console.log(filterWords("the, dog, got, a, bone", "ot"));

////9. funcion que obtenga un nu mero aleatorio entre 501 y 600/////
const aleatorio = (numero) => {
  let alea = Math.round(Math.random() * 100 + numero);
  return alea;
};
console.log(aleatorio(500));

////10. funcion que evalua si es capicua(ue es igual leído de izquierda a derecha que de derecha a izquierda ; p. ej., el 1331.) un numero
const capicua = (numeroCapicua = 0) => {
  if (!numeroCapicua) return console.warn("no ingreso numero");
  if (typeof numeroCapicua !== "number")
    return console.error(`el "${numeroCapicua}" ingresado no es un numero`);
  numeroCapicua = numeroCapicua.toString();
  let reves = numeroCapicua.split("").reverse().join("");

  return numeroCapicua === reves
    ? console.log(`SI es capicua "${numeroCapicua}" de ${reves}`)
    : console.log(`NO es capicua "${numeroCapicua}" de ${reves}`);
};

capicua(2002); //retorna SI es capicua 2002 de 2002//
capicua(1532); //retorna NO es capicua 2002 de 2002//

//11. funcion que calcual el factorial de un numero (factorial es un numero entero)

const factorial = (numeroF = undefined) => {
  if (numeroF === undefined) return console.warn("no ingreso numero");
  if (typeof numeroF !== "number")
    return console.error(`el "${numeroF}" ingresado no es un numero`);
  if (numeroF === 0) return console.log("el numero no puede ser 0");
  if (Math.sign(numeroF) === -1)
    return console.log("el numero no puede ser negativo");
  let factorial = 1;

  for (let i = numeroF; i > 1; i--) {
    factorial *= i;
  }
  return console.log(`el factorial de ${numeroF} de ${factorial}`);
};
factorial(5);
factorial(-10);

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numeroPrimo = (numeroP = undefined) => {
  if (numeroP === undefined) return console.warn("no ingreso numero");
  if (typeof numeroP !== "number")
    return console.error(`el "${numeroP}" ingresado no es un numero`);
  if (numeroP === 0) return console.log("el numero no puede ser 0");
  if (Math.sign(numeroP) === -1)
    return console.log("el numero no puede ser negativo");
  let divisible = false;

  for (let i = 2; i < numeroP; i++) {
    if (numeroP % i === 0) divisible = true;
    break;
  }
  return divisible
    ? console.log(`el numero "${numeroP}", No es numero Primo`)
    : console.log(`el numero "${numeroP}", SI es numero Primo`);
};
numeroPrimo(13);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar = (numeroPI = undefined) => {
  if (numeroPI === undefined) return console.warn("no ingreso numero");
  if (numeroPI % 2 == 0) {
    console.log(`${numeroPI} es numero par`);
  } else {
    console.log(`${numeroPI} es numero impar `);
  }
  //Con operador ternario//
  // return(numeroPI %2)===0
  // ? `${numeroPI} es numero par`
  // :`${numeroPI} es numero impar `
};
// console.log(numeroParImpar(7));
numeroParImpar(7);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const temperaturaC = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) return console.warn("no ingreso numero");
  if (typeof grados !== "number")
    return console.error(`el "${grados}" ingresado no es un numero`);
  if (unidad === undefined) return console.warn("no ingreso valor a convertir");
  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn(`${unidad} es invalido como unidad de temperatura`);

  if (unidad === "C") {
    return `${grados}C = ${Math.round(grados * (9 / 15) + 32)}F`;
  } else if (unidad === "F") {
    return `${grados}F = ${Math.round((grados - 32) * (5 / 9))}C`;
  }
};
console.log(temperaturaC(0, "F"));

console.log(temperaturaC(32, "C"));

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convetirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (base === 2) {
    return `${numero} base ${base} = ${parseInt(numero, base)} base 10 `;
  } else if (base === 10) {
    return `${numero} base ${base} = ${numero.toString(base)} base 2 `;
  } else {
    return alert(` el numero ${base} no es permitido como base`);
  }
};

console.log(convetirBinarioDecimal(100, 2)); //100 base 2 = 4 base 10
console.log(convetirBinarioDecimal(1001, 10)); //1001 base 10 = 1111101001 base 2

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const aplicarDescuento = (valor = undefined, descuento = 0) => {
  let desc = valor - (valor * descuento) / 100;

  return `el ${descuento}% de $${valor} es $${desc}`;
};
console.log(aplicarDescuento(1000, 13)); //el 13% de $1000 es $870

// //17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularAnios = (fecha = undefined) => {
  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      )
    : console.info(`estamos en el año actual ${fecha.getFullYear()}`);
};

calcularAnios(new Date(1982, 0, 8)); // han pasado 40 años, desde 1982.

// //18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena = "") => {
  let vocales = 0,
    consonantes = 0;

  for (let letra of cadena) {
    if (/[AEIOUaeiou]/.test(letra)) {
      //expresiones regulares
      vocales++;
    }
    if (/[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz]/.test(letra)) {
      //expresiones regulares
      consonantes++;
    }
  }
  // return `${cadena} ${vocales} vocales ${consonantes} consonantes`
  return {
    cadena,
    vocales,
    consonantes,
  };
};

console.log(contarLetras("hola mundo con JavaScript")); // devuelve un objeto literal
//{vocales: 8, cosonantes: 14, cadena: 'hola mundo con JavaScript '}

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
  if (nombre === "") return " ";

  let expReg = /^[A-Za-z\s]+$/g.test(nombre);

  return expReg
    ? console.info(`${nombre} es un nombre valido`)
    : console.info(`${nombre} no es un nombre valido`);
};
validarNombre("Bladimir Rojas"); //bladimir Rojas es un nombre valido

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
  if (email === "") return " ";

  let expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-ª]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g.test(
      email
    );

  return expReg
    ? console.info(`${email} es un  mail valido`)
    : console.info(`${email} no es un mail valido`);
};

validarEmail("ªkjjdj@gmail.com"); //ªkjjdj@gmail.com es un  mail valido

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const Potencias = (arr = undefined) => {
  for (let num of arr) {
    if (typeof num !== "number")
      return alert(`el valor ${num}  no es un numero`);
  }

  for (let i = 0; i < arr.length; i++) {
    return arr.map((el) => el * el);
  }
};

console.log(Potencias([2, 3, 6])); //[ 4,9,36]

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr = undefined) => {
  for (let num of arr) {
    if (typeof num !== "number")
      return alert(`el valor ${num}  no es un numero`);
  }

  return `arreglo original ${arr}\n Valor mayor ${Math.max(
    ...arr
  )}\n Valor menor ${Math.min(...arr)}`;
};

console.log(arrayMinMax([5, 8, 10, -1]));
// arreglo original 5,8,10,-1
//  Valor mayor 10
//  Valor menor -1

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (arr = undefined) => {
  for (let num of arr) {
    if (typeof num !== "number")
      return alert(`el valor ${num}  no es un numero`);
  }
  //   let numeros ={
  //     pares: arr.filter(num => num % 2 === 0),
  //     impares: arr.filter(num => num % 2 === 1)
  //   }
  // return numeros

  let pares = arr.filter((num) => num % 2 === 0);
  let impares = arr.filter((num) => num % 2 === 1);
  return [pares, impares];
};
console.log(separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (2) [Array(5), Array(5)]
// 0: (5) [2, 4, 6, 8, 0]
// 1: (5) [1, 3, 5, 7, 9]

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarArreglo = (arr = undefined) => {
  for (let num of arr) {
    if (typeof num !== "number")
      return alert(`el valor ${num}  no es un numero`);
  }
  let numeros = {
    arr,
    asc: arr.filter((el) => el).sort(),
    dec: arr
      .map((el) => el)
      .sort()
      .reverse(),
  };

  return numeros;
};
console.log(ordenarArreglo([7, 5, 7, 8, 6]));

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {
  // return console.log({ //con  el metodo filter
  //   original: arr,
  //   sinDuplicados: arr.filter((value, index, self)=> self.indexOf(value) === index)
  // });

  return {
    original: arr,
    sinDuplicados: [...new Set(arr)],
  };
};
console.log(quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true])); // (5) ['x', 10, 2, '10', true]

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr = undefined) => {
  return arr.reduce((total, num, index, arr) => {
    total += num;
    // console.log({
    //   total,
    //   num,
    //   index,
    //   arr
    // });
    if (index === arr.length - 1) {
      return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
    } else {
      return total;
    }
  });
};
console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

// ejercicio POO programacion orientada a objetos.
class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    //atributos///
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;
    //Metodos///
    this.validarIMBD(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }
  /// Static///
  static get listaGeneros() {
    return [
      " Action",
      "Adult",
      "Adventure",
      " Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.log(
      `los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }
  //validaciones//
  validarCadena(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" Esta Vacio`);

    if (typeof valor !== "string")
      return console.log(
        `${propiedad} esta vacio ${valor} NO es una cadena de Texto`
      );
    return true;
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.log(
        `${propiedad} "${valor}" excede el numero de caracteres(${longitud}) `
      );
    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "number")
      return console.log(`${propiedad} "${valor}" ingresado NO es un numero`);

    return true;
  }
  validarArreglo(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array))
      return console.log(`${propiedad} "${valor}" NO es un arreglo`);
    if (valor.length === 0)
      return console.log(`${propiedad} "${valor}" no tiene datos`);
    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.log(
          `el valor${cadena} ingresado NO es una cadena de texto`
        );
    }
    return true;
  }

  ///funciones - Metodos////
  validarIMBD(id) {
    if (this.validarCadena("IMBD id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.warn(
          `IMBD id "${id}" no es valido, debe tener 9 caracteres los 2 primeros letras minusculas los 7 restante numeros`
        );
      }
    }
  }
  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }
  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.warn(
          `Año de estreno "${estreno}" debe se r un numero entero de 4 digitos`
        );
      }
    }
  }
  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        // console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrecto ${generos.join(", ")}`);
          Pelicula.generosAceptados();
        }
      }
    }
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(
            ` "${calificacion}" NO es permitido la calificacion tiene que estar dentro de un rango de 0 a  10`
          )
        : (this.calificacion = calificacion.toFixed(1));
    }
  }
  fichaTecnica(){
    console.log(`Ficha Tecnica:\n Titulo ${this.titulo}\n  Director: ${this.director}\n  Año:${this.estreno}\n  Pais ${this.pais}\n  Genero: ${this.generos}\n  Calificacion: ${this.calificacion} `)
  }
}

//Pelicula.generosAceptados()
//Instancia///
const peli = new Pelicula({
  id: "hg1234567",
  titulo: "Jurasicc Word",
  director: "Steven Spilger",
  estreno: 2021,
  pais: ["colombia", "Argentina"],
  generos: ["Comedy", "Adult"],
  calificacion: 8.32,
});

const misPelis =[
  {
    id: "hg1545445",
  titulo: "Jurasicc Word 1",
  director: "Steven Spilger",
  estreno: 2021,
  pais: ["colombia", "Argentina"],
  generos: ["Comedy", "Adult"],
  calificacion: 8.32,
  },
  {
    id: "hg1256948",
  titulo: "Jurasicc Word 2",
  director: "Steven Spilger",
  estreno: 2021,
  pais: ["colombia", "Argentina"],
  generos: ["Comedy", "Adult"],
  calificacion: 9.32,
  },
  {
    id: "hg1256841",
  titulo: "Jurasicc Word 3",
  director: "Steven Spilger",
  estreno: 2021,
  pais: ["colombia", "Argentina"],
  generos: ["Comedy", "Adult"],
  calificacion: 9.58,
  }
]

console.log(peli);
peli.fichaTecnica()
misPelis.forEach(item => new Pelicula(item).fichaTecnica());

// // const myfunction=(param1, param2)=>{
// //   let contador = 0

// //   let resultado = 1
// //   while (contador < param2) {
// //     resultado *= param1
// //     contador += 1
// //   }
// //   console.log(resultado);
// // }
// // myfunction(3,0)

// // const myfunction1 = (numero)=>{

// //   if (numero == 0) {
// //     return 1

// //   }else{
// //     return  numero * myfunction1(numero -1);
// //   }

// // }
// // console.log(myfunction1(2));

// // Responsables de los cuarteles
// const paddockManagers = [
//   { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
//   { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
//   { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
//   { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
//   { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
//   { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
// ];

// // Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
// const paddockType = [
//   { id: 1, name: 'PALTOS' },
//   { id: 2, name: 'AVELLANOS' },
//   { id: 3, name: 'CEREZAS' },
//   { id: 4, name: 'NOGALES' },
// ]

// // Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
// const paddocks = [
//   { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
//   { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
//   { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
//   { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
//   { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
//   { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
//   { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
//   { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
//   { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
//   { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
//   { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
//   { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
//   { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
//   { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
//   { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
//   { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
//   { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
//   { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
//   { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
//   { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
//   { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
//   { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
//   { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
// ];

// const farms = [
//   { id: 1, name: 'AGRICOLA SANTA ANA' },
//   { id: 2, name: 'VINA SANTA PAULA' },
//   { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
// ];
// // 0 Arreglo con los ids de los responsables de cada cuartel
// function listPaddockManagerIds() {
//   return paddockManagers.map((paddockManager) => paddockManager.id);
// };
//  console.log(listPaddockManagerIds());
//  // 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
// function listPaddockManagersByName() {
//   return paddockManagers.map(paddockManager => paddockManager.name)
// };
// console.log(listPaddockManagersByName());
// // 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
// // let nevArr =  [...paddockType , ...paddocks]
// // console.log(nevArr);
// // let xav = paddocks.sort(a, b =>{})

// // console.log(xav);
// // function sortPaddockTypeByTotalArea(par1, par2) {

// // //   let nameCultivo = paddockType.map(item => item.name).sort();
// // //   let filterArea = par1.filter(item => item.farmId == par2 )
// // //   let fArea = filterArea.map(item=> item.area);
// // //   let sum = 0;

// // //   for (let i = 0; i < fArea.length; i++) {
// // //        sum += fArea[i];
// // //   }

// // // // console.log(sum);
// // // //  return filterArea
// // // return { nameCultivo, sum, filterArea}

// // }
// // console.log(sortPaddockTypeByTotalArea(paddocks, 1 ));
// // 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
// function sortFarmManagerByAdminArea() {

// }
//funcion donde pueda agregar elemenot a un array y que me indique que el elmento existe si o no dentro del array
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    // console.log("La nueva colección de vegetales es: " + veggies);
  } else if (veggies.indexOf(veggie) > -1) {
    // console.log(veggie + " ya existe en la colección de verduras.");
  }
}

var veggies = ["patata", "tomate", "chiles", "pimientoverde"];

updateVegetablesCollection(veggies, "espinaca");
// La nueva colección de verduras es : patata, tomate, chiles, pimientoverde, espinaca
updateVegetablesCollection(veggies, "espinaca");
// La espinaca ya existe en la colección de verduras.
//fizzbuzz

const fizzbuzz = (numero) => {
  for (let i = 0; i <= numero; i++) {
    let result = "";
    if (i % 3 === 0) {
      result += "Fizz";
    }
    if (i % 5 === 0) {
      result += "Buzz";
    }
    console.log(result, i);
  }
};
// console.log(fizzbuzz(50));

// Al momento de utilizar un numero por ejemplo 19 que es impar lo multiplique por 3 y se le sume 1, el resultado de este es (58) que es par , a ese resultado que es par se divide en 2 dando como resultado (29) a si sucesivamente hata llega a 1, no se si seria con un ciclo for y utilizando modulo % ?,(dentro del ciclo segun sea el numero par se divide en 2 si es impar se multiplica por 3 y se le suma 1) la secuencia seria • 58 • 29 • 88 • 44 • 22 • 11 • 34 • 17 • 52 • 26 • 13 • 40 • 20 • 10 • 5 • 16 • 8 • 4 • 2 • 1

const example5 = (numero = undefined) => {
  let arr = [];
  // for (let i = 1; i <= numero; i++) {
  //   let contador = 1
  //   if (i % 2 === 0 ) {
  //     contador *= i / 2
  //     arr.push(contador)
  //   }
  //   if (i % 2 === 1) {
  //     contador *= i* 3 + 1
  //     arr.push(contador)
  //   }

  // }
  let contador = 1;
  if (numero % 2 === 0) {
    contador *= numero / 2;

    arr.push(contador);
  }
  if (numero % 2 === 1) {
    contador *= numero * 3 + 1;
    arr.push(contador);
  }

  arr.forEach((item) => {
    let contador = 1;
    if (item % 2 == 0) {
      contador *= item / 2;
      arr.push(contador);
    }
    if (item % 2 == 1) {
      contador *= item * 3 + 1;
      arr.push(contador);
    }
  });

  // let contador = 1
  //   if (numero % 2 === 1 ) {
  //     contador *= numero * 3 + 1
  //     arr.push(contador)
  //     if (contador % 2 === 0) {
  //       contador = contador / 2
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 1) {
  //       contador = contador * 3 + 1
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 0) {
  //       contador = contador / 2
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 0) {
  //       contador = contador / 2
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 0) {
  //       contador = contador / 2
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 1) {
  //       contador = contador * 3 + 1
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 0) {
  //       contador = contador / 2
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 1) {
  //       contador = contador * 3 + 1
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 0) {
  //       contador = contador / 2
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 0) {
  //       contador = contador / 2
  //     }
  //     arr.push(contador)
  //     if (contador % 2 === 1) {
  //       contador = contador * 3 + 1
  //     }

  //   }

  return arr;
};
// console.log(example5(19));

/// 19 * 2 = 58
var myArray = [[[]]];
