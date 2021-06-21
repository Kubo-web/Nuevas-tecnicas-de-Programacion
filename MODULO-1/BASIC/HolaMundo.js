// console.log("Hola mundo");
//Cusultar las funciones de console
/*

     Table
     
*/
var datos = [
    {nombre: "Juan", apellido: "Alonso", edad: 21, pais: "ES", admitido: true},
    {nombre: "Pepe", apellido: "Alonso", edad: 23, pais: "ES", admitido: false},
    {nombre: "Raúl", apellido: "Alonso", edad: 34, pais: "MX", admitido: true},
    {nombre: "Luis", apellido: "Alonso", edad: 19, pais: "IT", admitido: false}
    ]
    // Mostrar la tabla de datos
     console.table(datos)

     /* 
     
          group

     */
  
     console.log("Este es otro Nivel");
     console.group();
     console.log("Nivel 2");
     console.group();
     console.log("Nivel 3");
     console.warn("Otro Nivel 3");
     console.groupEnd();
     console.log("Volvemos al Nivel 2");
     console.groupEnd();

     /*

    time

     */

     console.time("El tiempo de respuesta fue");
     console.timeEnd("El tiempo de respuesta fue");
     

   /*


    info


   */

   console.info("Informacion")

   /*

       clear

   */


   console.clear()