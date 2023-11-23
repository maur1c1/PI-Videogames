const {getGenre, getGenrexName, putGenre, postGenre, deleteGenre } = require("../data/genreData");


const getGenres = async (req, res) => {

    try {
        
        const genres =  await getGenre();

        res.status(200).json(genres);
 
    } catch (error) {

        res.status(error?.status || 500).json(error.message);

    }
};


const getGenrexName = async (req, res) => {

    try {
        
        const { name } = req.params;

        const genre = await getGenrexName(name);

        res.status(200).json(genre);

    } catch (error) {
        
        res.status(error?.status || 500).json(error.message);

    }
};

const putGenre = async (req, res)=>{

    try {
        
            const { id, name } = req.query;

            const updateGenre = await putGenre(id, name);

            res.status(200).json(updateGenre);

    } catch (error) {
        
        res.status(error?.status || 500).json(error.message);
    }
};

const postGenre = async (req, res) =>{

    try {
        
        const { name } =req.query;

        const createGenre = await postGenre(name);

        res.status(201).json(createGenre);

        
    } catch (error) {
        
        res.status(error?.status || 500).json(error.message);
    }
};


const deleteGenre = async (req, res) => {

    try {
        
        const {id} = req.query;

        const genreDelete = await deleteGenre(id);

        res.status(200).json(genreDelete);

    } catch (error) {
        res.status(error?.status || 500).json(error.message);        
    }
};

module.exports = {
    getGenres,
    getGenrexName,
    putGenre,
    postGenre,
    deleteGenre,
}