const {Videogame, Genre, Platform } = require('../db');
const { API_KEY} = process.env;
const axios = require("axios");

const getVideogameDb = async() => {

    try {
        
        let gamesxDb = await Videogame.findAll({
            include:[{ model: Genre}, {model: Platform}],
        });

        if(gamesxDb.length){

            gamesxDb = JSON.stringify(gamesxDb);
            gamesxDb = JSON.parse(gamesxDb);

            gamesxDb = gamesxDb.map((game)=> {
                return {...game, genres: game.genres.map((genre) => genre.name),
                    platforms: game.platforms.map((platform) => platform.name),
                };
            });
        }
        return gamesxDb;
    } catch (error) {

        throw { status: error?.status || 500, message: error?.message || error};
    };
}   


const getVideogameApi = async() =>{


    try{

    const pagesNumber = 5;

    let games = [];

    let response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);

    for(let i=0; i< pagesNumber; i++){

        const data = await response.json();

        const saveGames = data.results.map((game) =>{
            return {
                id: game.id,
                name: game.name,
                image: game.background_image,
                rating: game.rating,
                release_date: game.released,
                genres: game.genres.map((genre)=> genre.name),
                platforms: game.platforms.map((platf)=> platf.platform.name),
            };
        });

        response = await axios.get(data.next);

        games = [...games, ...saveGames];
    }
    return games;

 }catch(error){
        throw{ status: error?.status || 500, message: error?.message || error};  
 }

};

const videoGames = async ()=>{

    try {
        
            const gamesxDb = await getVideogameDb();
            const gamesxApi = await getVideogameApi();

            return [...gamesxDb, ...gamesxApi];
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };        
    }
};


const getVideogameId = async (id) =>{

    try {
        
        if(id.includes("-")){

            let game = await Videogame.findOne({
                    where:{ id}, 
                    include: [
                        {model: Genre, through: {attributes: []}},
                        {model: Platform, through: {attributes: []}},
                    ], 

            });

            if(!game) throw { status: 400, message: "Error, Videogame not exist"};

            // game = JSON.stringify(game); only with fetch
            // game = JSON.parse(game);  only with fetch

            game.genres = game.genres.map((genre) => genre.name);
            game.platforms = game.platforms.map((platform)=> platform.name);

            return game;
        }

        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

        const info = await response.json();

        if(!info.id) throw { status: 400, message: "Error, Videogame not exist"};
        
        const game = {

            id: info.id,
            name: info.name,
            description: info.description,
            release_date: info.released,
            rating: info.rating,
            image: info.background_image,
            genres: info.genres.map((genre)=> genre.name),
            platforms: info.platforms.map((platf)=> platf.name),
        };

        return game;


    } catch (error) {
        
        throw { status: error?.status || 500, message: error.message || error};
    
    }
};

const getVideogameName = async (name) =>{

    try {
        
        const res = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);

        const info = await res.json();

        let gamesDb  = await getVideogameDb();

        gamesDb = gamesDb.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));

        if(!info.count && !gamesDb.length) throw{ status: 400, message: `Error, game not found: ${name}`};

        const gamesApi = info.results?.map((game) => {

            return {
                id: game.id,
                name: game.name,
                image: game.background_image,
                rating: game.rating,
                release_date: game.released,
                genres: game.genres?.map((genre)=> genre.name),
                platforms: game.platforms?.map((platf)=> platf.name),

            };
        });

        const saveGames =  [...gamesDb, ...gamesApi];

        return saveGames.splice(0,15);

    } catch (error) {
        throw{ status: error?.status || 500, message: error?.message || error};
    }


};

const postVideogame = async (videogame) =>{


    try {
        
        const { name, description, image, release_date, rating, genres, platforms} = videogame;

        if(!name || !description || !platforms) throw { status: 400, message: "Missing data"};

        const searchGame = await Videogame.findOne({ where: {name}});

        if(searchGame) throw { status:400, message: "game exists"};

        const game = await Videogame.create({

            name, 
            description,
            image, 
            release_date,
            rating,
        });


        const genresFind  =  await Genre.findAll({where:{ name: genres}});

        const platformFind = await Platform.findAll({ where: {name: platforms}});

        await game.addGenres(genresFind);
        await game.addPlatforms(platformFind);

        return "Videogame created";


    } catch (error) {
        
        throw { status: error?.status || 500, message: error?.message || error};

    }
};


const putVideogame = async (id, rating) => {

    try {
        if(!id.includes("-")) throw { status: 400, message: "Error, this Id can't be modified"};

        await Videogame.update({rating}, {where: {id}});

        return "Videogame Updated";

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};


const deleteGame = async (id) =>{

    try {
            if(!id.includes("-")) throw { status: 400, message: "Error, invalid Id, can't be deleted"};

            const game = await Videogame.findOne({where: {id}});

            await game.destroy();

            return "Videogame deleted";

    } catch (error) {
        throw {status: error?.status || 500, message: error?.message || error};

    }
};


module.exports = {
    getVideogameDb,
    getVideogameApi,
    videoGames,
    getVideogameId,
    getVideogameName,
    putVideogame,
    postVideogame,
    deleteGame,

};
