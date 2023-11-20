const {getVideogameName, getVideogameId, postVideogame, putVideogame, deleteGame, videoGames}=  require("../data/videogameData");

const getVideogames = async (name)=> {
    try {
        
        if(name){

            const videogames = await getVideogameName(name);

            return videogames;
        }

        const videogames =  await videoGames();

        return videogames;


    } catch (error) {
        throw error;

    }
};

const getVideogameId = async(id)=> {

    try {
        const videogame = await getVideogameId();

        return videogame;

    } catch (error) {
        throw error;
    }

};

const postVideogame = async (videogame)=>{

    try {
        
        const createdVideogame = await postVideogame(videogame);
        return createdVideogame;

    } catch (error) {
        throw error;
    }
};

const putVideogame = async(id, rating) => {

    try {
        
        const updatedVideogame = await putVideogame(id, rating);

        return updatedVideogame;
    } catch (error) {
        throw error;
    }
};

const deleteGame = async (id) => {
    try {
        const deletedVideogame = await deleteGame(id);

        return deletedVideogame;
    } catch (error) {
        throw error;
    }

};

module.exports = {
    getVideogames,
    getVideogameId,
    postVideogame,
    putVideogame,
    deleteGame,
    
};
