//Asignacion
//=

// Comparacion

//==

//===
/*
console.log(2 == 2);
console.log(2 === '2');
console.log(2 == '2');


*/


/* 

console.log(2 != 3);

*/

/* 

<
>
<=
>=

*/

// operadores de asginacion compuestos

/*  
    += / x= x+y
    += / x= x-y
    *=
    /=
    %=
    **=
    var numero = 3; 
    numero -= 2;
    console.log(numero);
*/
/*
    +
    -   
    *
    /
    %
    **

*/
// Destructurar objetos

var persona = { nombre: "Juan", 
    apellido: "Ortiz", 
    edad: 21, 
    viajes: { destino1: "Colombia", destino2: "Mexico" } };


var { nombre:nom, apellido, viajes: {destino1 } } = persona;

console.log(persona);
console.log(nom);
console.log(apellido);