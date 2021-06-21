/*  
    concat
*/

var numeros = [1 , 2 , 3 , 4 , 5 ];
var nuevonumeros = numeros.concat([6, 7, 8, 9, 0])
// console.log(numeros);
// console.log(nuevonumeros)

/* 

    join

*/
var nombre= ["J","u", "a", "a", "n", "n"]
// console.log(nombre.join("-"));

/*

 Slice

*/

// console.log(nombre.slice(2));

/*

    index of

*/

// console.log(nombre.indexOf("a"));


/*

    Last index of

*/

// console.log(nombre.lastIndexOf("a"));

/*

    Reverse

*/
// console.log(nombre.reverse());

/* 

    sort

*/

var numerosDesordenados = [ 3, 9, 8, 7, 6, 2, 3, 6, 9]
// console.log(numerosDesordenados.sort())


/*
    shift

*/

// console.log(numerosDesordenados.shift());
/*
    pop

*/

// console.log(numerosDesordenados.pop());
/*
    push

*/
numerosDesordenados.push(1012);
// console.log(numerosDesordenados);


var pares = [2, 4, 6, 8, 10 ]
console.log(pares.map((elemento)=> elemento+1));

// consultar funciones arrlegos