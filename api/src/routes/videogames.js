const { Router } = require("express");

const routerVideogames = Router();

routerVideogames.get("/", (req, res) =>{
    res.send("Estoy en videogames")
});


module.exports = routerVideogames;


