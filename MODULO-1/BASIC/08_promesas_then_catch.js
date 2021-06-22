/* 

Promesas

*/

function promesa(){
    return new Promise((resolve, reject) => {
        if (true) {
             setTimeout(() => {
            resolve("Peticion resulta");
            }, 3000)
        } else {

            reject("La operacion Fallo");
        }
    })
}

// promesa(true)
//     .then((resultado)=>{
//         console.log("Respuesta posi", resultado);
//     })
//     .catch((error) => {
//         console.log("Error", error);
//     })

var segundaPromesa = (bandera) => new Promise (( resolve, reject) => {
    if (true) {
        setTimeout(() => {
       resolve("Peticion resulta");
       }, 3000);
   } else {
    setTimeout(() => {
       reject("La operacion Fallo");
    }, 2000);
   }
})
// segundaPromesa(true)
//     .then((resultado)=>{
//         console.log("Respuesta posi", resultado);
//     })
//     .catch((error) => {
//         console.log("Error", error);
//     })

promesa(true) // peticion de clientes
    .then((respuesta)=>{ // respuesta de lista de clientes
        console.log(respuesta); // compras del cliente 
        return segundaPromesa(true); // respuesta de la segunda promesa
    })
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    })

