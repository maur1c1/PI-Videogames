const { getPlatforms, getPlatformName, putPlatform, postPlatform, deletePlatform, deletePlatform} = require("../data/platformData");

const getPlatforms = async ()=> {

    try {
        
        const platforms = await getPlatforms();

        return platforms;

    } catch (error) {
        throw error;
    }
};

const getPlatformName = async (name) => {

    try {
        const platform =  await getPlatformName(name);

        return platform;
    } catch (error) {
        throw error;
    }
};

const postPlatform = async (name) => {
    try {
        
        const createPlatform = await postPlatform(name);
        return createPlatform;
    } catch (error) {
        throw error;    
    }
};


const putPlatform = async (id, name) => {

    try {
        
         const updatePlatform = await putPlatform(id, name); 

         return updatePlatform;
    } catch (error) {
        throw error;
    }
};

const deletePlatform = async (id) => {

    try {
        
        const platformDelete = await deletePlatform(id);
    } catch (error) {
        throw error;
    }

};

module.exports = {

    getPlatforms,
    getPlatformName,
    postPlatform,
    putPlatform,
    deletePlatform,

};

