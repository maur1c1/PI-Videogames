const { Router } = require("express");

const genreRouter = Router();

//Implementamos mis endpoints


genreRouter.get("/",function (req, res){
    res.send("Estoy en genre")
});

genreRouter.get("/:name", function (req, res){
    res.send("Estoy en genre by param")
});

genreRouter.put("/", function (req, res){
    res.send("Estoy en genre update")
});

genreRouter.post("/", function (req, res) {
    res.send("Estoy en create genre")
})

genreRouter.delete("/",function (req, res){
    res.send("Estoy en delete genre")
});

module.exports = genreRouter;


