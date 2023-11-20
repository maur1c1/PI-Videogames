const {getVideogameName, getVideogameId, postVideogame, putVideogame, deleteGame, videoGames}=  require("../data/videogameData");

const getVideogame = async (name)=> {
    try {
        
        if(name){

            const videogames = await getVideogameName(name);

            return videogames;
        }

        const videogames =  await videoGames


    } catch (error) {
        
    }
}