//COMO SE HARIA ANTES
function Rectangulo(base,altura){
    this.base=base
    this.altura=altura
}

Rectangulo.prototype.calcularArea=function(){
    return this.basethis.altura
}
var rectangulo=new Rectangulo(6,3)
//console.log(rectangulo.calcularArea());
//console.log(rectangulo.base);

//DECLARACION DE CLASES

class Rectangulo2{
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return this.base * this.altura
    }
}
var rectangulos2=new Rectangulo2(2,3)
// console.log(rectangulos2.calcularArea())

// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona


/*
 
deber

*/


class Persona {
    constructor(){
        this._nombre = null;
        this._apellido = null;
        this._edad = null;
    }  
    get nombre(){
        return this._nombre
    }get apellido(){
        return this._apellido
    }get edad(){
        return this._edad
    }
    set nombre(nom) {
        this._nombre = nom
    }
    set apellido(ape){
        this._apellido = ape
    }
    set edad(age){
        this._edad = age;
    }
}


Persona.nombre ="Juan";
Persona.apellido="Ortiz"
Persona.edad="21"
console.log("Hola mi nombre es " + Persona.nombre + " " +  Persona.apellido + " y mi edad es " + Persona.edad + " año(s)");