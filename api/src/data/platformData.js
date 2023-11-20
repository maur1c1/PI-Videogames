const { Platform} = require("../db");
const {getVideogames} = require("../handlers/videogameHandler");


const getPlatforms =  async () => {

    try {
        
        let platformsDb = await Platform.findAll();

        if(platformsDb.length) return platformsDb;

        const videogames = await getVideogames();

        videogames.map((videogame) => {
            videogame.platforms.map((platform )=> Platform.findOrCreate( { where: { name: platform}}))
        });

        platformsDb = await Platform.findAll();

        return platformsDb;

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error}
    }
};

const getPlatformName =  async (name)=>{

    try {
        const platformsDb = await Platform.findAll();

        const platformFilter = platformsDb.filter((platform)=> platform.name === name);

        if(!platformFilter.length) throw { status: 400, message: "platform not exists"};

        return platformFilter[0];

    } catch (error) {
        
        throw { status: error?.status || 500, message: error?.status || error}
    }
};

const postPlatform = async (name) => {

    try {
            const upadatePlatform  = await Platform.findOne({where: {name}});

            if(upadatePlatform) throw {status: 404, message: "Platform already exists"};

            await Platform.create({name});

            return "Platform Created successfully";

    } catch (error) {
        throw { status: error?.status ||500, message: error?.message || error}
    }
};

const putPlatform = async (id, name) => {

    try {
        
        const platform = await Platform.findByPk(id);

        if(!platform) throw { status: 404, message: "platform not exists"};

        await Platform.update({name}, { where: {id}});

        return "Platform Upadated completely";
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error}
    }
};


const deletePlatform = async (id) => {

    try {

        const platform = await Platform.findByPk(id);

        if(!platform) throw { status: 404, message: "Platform not exists"}

        await platform.destroy();

        return "Platform deleted";


    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error}
    }
};

module.exports = {
    getPlatforms,
    getPlatformName,
    postPlatform,
    putPlatform,
    deletePlatform,
}

