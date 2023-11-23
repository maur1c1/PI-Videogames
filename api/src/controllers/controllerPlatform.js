const { getPlatforms, getPlatformName, postPlatform, postPlatform, deletePlatform} = require("../data/platformData");

const getPlatforms = async (req, res)=> {

    try {

        const allPlatforms = await getPlatforms();

        res.status(200).json(allPlatforms);

    } catch (error) {
        res.status(error?.status || 500).json(error.message);
    }
};

const getPlatformName = async (req, res)=> {

    try {
        
        const {name} =req.params;

        const platform = await getPlatformName(name);
        res.status(200).json(platform);

    } catch (error) {

        res.status(error?.status || 500).json(error.message);

    }
};

const postPlatform = async (req, res)=> {

    try {
        
        const {name} = req.query;

        const createPlatform = await postPlatform(name);
        
        res.status(201).json(createPlatform);
    } catch (error) {
        res.status(error?.status || 500).json(error.message);
    }
};

const putPlatform = async (req, res)=> {

    try {
        
        const {id, name} = req.query;

        const updatedPlatform =  await putPlatform(id, name);
        
        res.status(200).json(updatedPlatform);

    } catch (error) {
        res.status(error?.status || 500).json(error.message);
    }
};

const deletePlatform = async (req, res) => {

    try {
        
        const {id} = req.query;

        const platformDeleted = await deletePlatform(id);

        res.status(200).json(platformDeleted);

    } catch (error) {
        res.status(error?.status || 500).json(error.message);
    }
};


module.exports = {

    getPlatforms,
    getPlatformName,
    postPlatform,
    putPlatform,
    deletePlatform,
}