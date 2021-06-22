/*
 async - await

*/
function promesa(){
    return new Promise((resolve, reject) => {
        if (true) {
             setTimeout(() => {
            resolve("Peticion resulta");
            }, 3000)
        } else {
            setTimeout(() => {
            reject("La operacion Fallo");
            }, 2000)
        }
    })
}

(async () => {
    try {
    var respuesta = await promesa(true)
    console.log(respuesta);
    } catch (error){
        console.log(error);
    }
})()