//traemos el paquete

const { Router } = require('express');
const data = require('../data.json')
const {datavalidator} = require('../middleware/DataValidator')
const { User } = require("../lib/Schema/User");


//inicializamos el router

const router = Router()

// creacion de los endpoint
router
    .get("/", datavalidator, (req, res) => {
    res.send("Hola mundo con express");
    })
    .get("/users", (req, res)=>{
        var modifiedData = data.map((person)=>{
            person.first_name = person.first_name.toUpperCase();
            person.last_name = person.last_name.toUpperCase();
            return person
        })
        res.json({
            msg:"Lista de usuarios",
            body: data,
            
        });
    })
    .get("/users-query", (req, res)=>{

    })
    .get("/saludo", datavalidator("query", User),(req, res) =>{

        const { query: {nombre, apellido} } = req;
        res.json({
            saludo: `Hola soy ${nombre} ${apellido}`,
        });
    })
    .get('/saludo/:nombre', (req, res) =>{
        const { params: { nombre } } = req
        console.log(req.params);
        res.json({
            nombre: nombre,
        })
    })



// router
    
//     .get("/users", (req, res)=>{
//         var modifiedData = data.map((person)=>{
//             person.first_name = person.first_name.toUpperCase();
//             person.last_name = person.last_name.toUpperCase();
//             return person
//         })
//         res.json({
//             msg:"Lista de usuarios",
//             body: data,
            
//         });
//     })
    
//     .get("/users-query/", (req, res) => {
//         const { query: {id} } = req;
//         var usersid = data.find(user => user.id === parseInt(id))
//         if (usersid) {
//             res.json({
//                 msg: "Usuario filtrado por id",
//                  body: usersid,
//             });
            
//         } else {
//             res.json({
//                 msg: "Ese usuario no existe",
//                 body: data,
                
//             });
//         }
//     })
    
//     .get("/users-params/:last_name", (req, res) => {
//         const { params: { last_name } } = req;
//         var apellido = data.find(ape => ape.last_name === last_name)
//         if (apellido) {
//              res.json({
//                 msg: "Usuario filtrado por apellido",
//                 body: [`email: ${apellido.email}`],
//             });
//         } else {
//              res.json({
//                 msg: "El apellido no existe",
//                 body: [null],
                
//             });
//         }
//     })

    
//exportamos la rutas
module.exports.RouterIndex = router

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }
