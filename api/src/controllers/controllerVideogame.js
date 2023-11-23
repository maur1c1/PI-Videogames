const {getVideogames, getVideogameId, postVideogame, putVideogame, deleteGame} = require("../handlers/videogameHandler");



const getVideogames = async (req, res) =>{

    try {
        const {name} = req.query;

        const videogames = await getVideogames(name);

        res.status(200).json(videogames);

    } catch (error) {
        
        res.status(error?.status || 500).json(error.message);

    }
};


const getVideogameId = async (req, res) => {

    try {
        
        const { id } = req.params;

        const game  = await getVideogameId(id);

        res.status(200).json(game);

    } catch (error) {
        res.status(error?.status || 500).json(error.message);

    }
};

const postVideogame = async (req, res) => {

    try {
        const videogame = req.body;

        const createVideogame = await postVideogame(videogame);

        res.status(200).json(createVideogame);
    } catch (error) {
        
        res.status(error?.status || 500).json(error.message);
    }
};

const putVideogame = async (req, res) => {

    try {
        
        const {id} = req.params;

        const {rating }= req.query;

        const updateVideogame = await putVideogame(id, rating);

        res.status(200).json(updateVideogame);
    } catch (error) {
        res.status(error?.status || 500).json(error.message);
    }
};

const deleteVideogame = async (req, res)=>{

    try {
        
        const {id} = req.params;

        const deletedVideogame = await deleteGame(id);

        res.status(200).json(deletedVideogame);
    } catch (error) {
        res.status(error?.status || 500).json(error.message);
    }
};


module.exports= {

    getVideogames,
    getVideogameId,
    postVideogame,
    putVideogame,
    deleteVideogame,
};


 