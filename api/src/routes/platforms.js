const { Router } =  require("express");
const { router } = require("../app");

const platformsRouter = Router();

platformsRouter.get("/", function (req, res) {
    res.send("Estoy en platform  ")
});

platformsRouter.get("/:name", function (req, res) {
    res.send("Estoy en platform por param")
});

platformsRouter.put("/", function (req, res) {
    res.send("Estoy en platform update")
});

platformsRouter.post("/", function (req, res) {
    res.send("Estoy en create platform")
});

platformsRouter.delete("/", function (req, res) {
    res.send("Estoy en delete platform")
});


module.exports = platformsRouter;

