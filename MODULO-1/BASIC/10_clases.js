//COMO SE HARIA ANTES
function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
}

Rectangulo.prototype.calcularArea = function () {
  return this.base + this.altura;
};
var rectangulo = new Rectangulo(6, 3);
//console.log(rectangulo.calcularArea());
//console.log(rectangulo.base);

//DECLARACION DE CLASES

class Rectangulo2 {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  calcularArea() {
    return this.base * this.altura;
  }
}
var rectangulos2 = new Rectangulo2(2, 3);
// console.log(rectangulos2.calcularArea())

// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona

/*
 
deber

*/

class Persona {
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }
  get edad() {
    return this._edad;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  set edad(edad) {
    this._edad = edad;
  }
}

Persona.nombre = "Juan";
Persona.apellido = "Ortiz";
Persona.edad = "21";

console.log(
  "Hola mi nombre es " +
    Persona.nombre +
    " " +
    Persona.apellido +
    " y mi edad es " +
    Persona.edad +
    " año(s)"
);


class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }

    static distancia (a , b) {
      var dx = a.x - b.x;
      var dy = a.y - b.y;
    //La  función Math.sqrt() retorna la raíz cuadrada de un número, que es
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }

  var p1 = new Punto(6, 2);
  var p2 = new Punto(4, 8);

  console.log(Punto.distancia(p1, p2));

  class estudiante extends Persona {
    getnom(){
        console.log(" Mi nuevo nombre es " + this._nombre);
    }
  }
  var estudiante1 = new estudiante("Julian");
  estudiante1.getnom();