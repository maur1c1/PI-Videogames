
const getVideogames = async (req, res) =>{

    try {
        const {name} = req.query;

        res.status(200).json();

    } catch (error) {
        
        res.status(error?.status || 500).json(error.message);

    }
};

