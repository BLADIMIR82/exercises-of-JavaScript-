// // console.log("object course");

// class Students {
//   constructor({ name, age = "", course }) {
//     this.name = name;
//     this.age = age;
//     this.course = course;
//   }
//   aprobarCurso(nuevoCurso) {
//     //se puede crear metodos propios en class
//     this.course.push(nuevoCurso); // se puede utilizar metodos de Array
//   }
// }

// const blado = new Students({
//   // no importa si los atributos se llaman en desorden
//   name: "bladimir",
//   course: ["curso practico de javaScript", "curso basico POO"],
// });
// blado.aprobarCurso("curso HTML y CSS");
// console.info(blado);

/////////////////////////////////////////////////////////////////////////////////////////////////
////OBJETOS LITERALES////
// const blado1 = {
//   name: "bladimir",
//   userName: "bladimirRojas",
//   points: 1050,
//   socialMedia: {
//     twitter: "bladimirrojas",
//     instagram: "bladimirR",
//     facebook: undefined,
//   },
//   approvedCourses: ["curso de html y css", "curso practico de JavaScript"],
//   learningPaths: [
//     {
//       name: "escuela de desarrollo Web",
//       courses: ["programacion orientada a objetos"],
//     },
//     {
//       name: "escuela de video Juegos",
//       courses: [
//         "curso de introduccion a la produccion de video juegos",
//         "curso de Unreal Engine",
//         "curos de 3D",
//       ],
//     },
//   ],
// };

// const miguelito1 = {
//   name: "miguel",
//   userName: "miguelito1",
//   points: 100,
//   socialMedia: {
//     twitter: "miguel",
//     instagram: "miguel",
//     facebook: undefined,
//   },
//   approvedCourses: ["curso Databussines", "curso de Dataviz"],
//   learningPaths: [
//     {
//       name: "escuela de desarrollo Web",
//       courses: ["programacion orientada a objetos"],
//     },
//     {
//       name: "escuela de Data Science",
//       courses: ["curso Databussines", "curso de Dataviz", "curos de TableU"],
//     },
//   ],
// };
///// CREACION DE OBJETOS CON CLASSES o Prototypes////
class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
  });
  
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
  });
  
  
  class LearningPath {
    constructor({
      name,
      courses = [],
    })
     {
      this.name = name;
      this.courses = courses;
    }
  }
class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPaths({
  name: "Escuela de desarrollo Web",
  courses: ["programacion orientada a objetos", "JavaScript Basico"],
});

const escuelaData = new LearningPaths({
    name: "Escuela de Data Science",
    courses: ["programacion DataBusines", "curso de DataViz"],
  });

  const escuelaVgs = new LearningPaths({
    name: "Escuela de Video Juegos",
    courses: ["curos de Unity", "curso de Unreal"],
  }); 

class Students {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const blado2 = new Students({
  name: "bladimir",
  username:"bladimir1982",
  email: "bladimir@gmail.com",
  twitter: "bladimirR",
  learningPaths:[
    escuelaWeb,
    escuelaVgs,
  ]
});

const miguelito2 = new Students({
  name: "miguel",
  username: "miguelito45",
  email: "miguel@gmail.com",
  learningPaths:[
    escuelaWeb,
    escuelaData,
  ]
});
console.log(blado2);
console.log(miguelito2);

// Qué es ABSTRACCIÓN : Es la forma de abstraer los datos esenciales de un objeto, para (con el fin de) crear su molde, su Clase, su Prototipo. Abstraer hace referencia a la forma de separar o aislar los datos, rasgos, cualidades, propiedades o características esenciales, para que se puedan crear y formar instancias de dicho molde, o sea, la clase. Crear el prototipo es el objetivo de la abstracción, pues cada elemento u objeto, debe poderse abstraer para que podamos reutilizar el código, o sea crear instancias de esta clase.
// Encapsulación La encapsulación es el empaquetamiento de datos y funciones en un componente (por ejemplo, una clase) y para luego controlar el acceso a ese componente para hacer un efecto de “caja negra” fuera del objeto. Debido a esto, un usuario de esa clase solo necesita conocer su interfaz (es decir, los datos y las funciones expuestas fuera de la clase), no la implementación oculta.
// 27) Programa una clase llamada Pelicula.

//////Ejercicio de POO//////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////
