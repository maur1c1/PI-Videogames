const {getGenre, getGenrexName, postGenre, putGenre, deleteGenre} = require("../data/genreData");


const getGenres = async ()=>{

    try {
        
        const allGenres =  await getGenre();

        return allGenres;

    } catch (error) {
        throw error;
    }
};

const getGenreName =  async(name) =>{

    try {
        const genre = await getGenrexName();

        return genre;
    } catch (error) {
        throw error;
    }
};

const postGenre =  async(name) =>{

    try {
            const createGenre = await postGenre();
            
            return createGenre;

    } catch (error) {
        throw error;
    }
};

const putGenre = async (id, name) => {

    try {
        const updateGenre = await putGenre();
        
        return updateGenre;
    } catch (error) {
        throw error;
    }
};

const deleteGenre = async (id) => {
    try {
        
        const genreDeleted = await deleteGenre(id);

        return genreDeleted;

    } catch (error) {
        throw error;
    }
};


module.exports = {
    getGenres,
    getGenreName,
    postGenre,
    putGenre,
    deleteGenre,      

}