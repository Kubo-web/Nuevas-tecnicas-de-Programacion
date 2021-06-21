/* 
    Funciones declarativas

*/
//  retorno de valores
function saludar(){
    return "Hola soy Juan";
}
function saludar2(){
    console.log("Hola soy Juan Pablo")
}
// funciones con parametros 
function saludarConParametros(nombre, apellido){
    return `Hola soy ${nombre} ${apellido}`
}
// funciones con parametrospor defecto
function saludoConProfesion(nombre="Persona", profesion = "Analista de sistemas"){
    return `Hola ${nombre} mi profesion es ${profesion}`
}
//console.log(saludoConProfesion("Juan", "Desarolllador de software"))
//console.log(saludarConParametros("Juan", "Ortiz"));
// saludar()
// var resultado = saludar()
// console.log(resultado);
// console.log(saludar());
// saludar2()

/*

    funciones expresivas

*/

var saludoEdad = function(nombre, edad){
    return `Hola soy ${nombre} y tengo ${edad} años(s)`
}
//console.log(saludoEdad("Juan", 21));

/*
 arrow funtions funciones flecha
*/

var saludoconApellido=(nombre, apellido)=>
`Hola soy ${nombre} ${apellido}`
//console.log(saludoconApellido("German", "Garmendia"))
var suma =(num1, num2) => num1+ num2

// console.log(suma(2, 3));

//ejemplo
var saludoconApellido=(nombre, apellido)=>{
    console.log(`Hola soy ${nombre} ${apellido}`)
}

// funciones con parametros

function saludoconFunciones(nombre, cb){
    return cb(nombre)
}

var miSaludo = saludoconFunciones("Juan", function(nombre){
    return `Hola soy ${nombre}`
})
var miSaludo2 = saludoconFunciones("Juan", (nombre) => `Hola soy ${nombre}`
)
console.log(miSaludo2);

// setTimeout(() => {
//     console.log("Hola mundo")
// }, 3000);

// setInterval(() => {
//     console.log("Hola mundo")
// }, 2000);
