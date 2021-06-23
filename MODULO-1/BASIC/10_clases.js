// como se hacia antes 

var rectangulo = new Rectangulo(6, 3)

console.log(rectangulo.CalcularArea())
console.log(rectangulo.base)

//  Declaracion de clases
class Rectangulo2{
    constructor(base, altura) {
        this.base = base 
        this.altura = altura
    }

    CalcularArea(){
        return this.base * this.altura
    }
}

var Rectangulo2 = new Rectangulo2 (6, 3)

console.log(Rectangulo2.CalcularArea())

// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona


/*
 
deber

*/