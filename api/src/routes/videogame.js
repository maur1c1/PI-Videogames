const { Router } = require("express");

const routerVideogame = Router();


routerVideogame.get("/:id", (req, res)=> {
   res.send("Estoy en videogame by id ")
});

routerVideogame.post("/", (req, res)=> {
    res.send("Estoy en create un videogame")
});

routerVideogame.put("/:id", (req, res)=> {
    res.send("estoy en update videogame")
});

routerVideogame.delete("/:id", (req, res) =>{
    res.send("estoy en delete videogame")
});

module.exports =routerVideogame;
