const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const genreRouter = require("./genres");
const platformRouter = require("./platforms");
const videogamesRouter = require("./videogames");
const videogameRouter = require("./videogame");



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/genres", genreRouter);
router.use("platforms", platformRouter);
router.use("/videogames", videogamesRouter);
router.use("/videogame",videogameRouter);


module.exports = router;
