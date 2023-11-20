require('dotenv').config();
const { Genre } = require("../db");
const {API_KEY} = process.env;
const axios = require("axios");


const getGenre = async () =>{

    try {

            let genresDb = await Genre.findAll();

            if(genresDb.length) return genresDb;

            // const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

            // const data = await res.json();

            const info = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

            info.results.map((genre)=> Genre.findOrCreate({
               where:{ name: genre.name}
            }))

            info.results.map((genre) =>
                Genre.findOrCreate({ where: { name: genre.name}})
            );

            genresDb = await Genre.findAll();

            return genresDb;


    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error}
    }
};

const getGenrexName  = async (name)=>{

    try {
            const  genresDb = await Genre.findAll();

            const genre =  genresDb.filter((genre)=> genre.name === name);

            if(!genre.length) 
                throw {
                status: 404, message: "genre not found"};
                
            return genre[0];
            
    } catch (error) {

        throw { status: error?.status || 500, message: error?.message || error};

    }

};


const putGenre = async (id, name) => {

    try {
        
        const genre = await Genre.findByPk(id);

        if(!genre) throw { status: 404, message: "Genre not found"};

        await Genre.update({name}, {where: {id}});

        return "Genre updated";
        
    } catch (error) {

            throw { status: error?.status || 500, message: error?.message || error};
    }
};

const postGenre = async (name) => {

        try {
                const genre = await Genre.findOne({ where: {name}});

                if(genre) throw {status: 400, message: "try another genre"};

                await Genre.create({name});

                return "Genre created successfully";

        } catch (error) {
            
                throw { status: error?.status || 500, message: error?.message || error};
        }

};

const deleteGenre = async (id) => {

    try {
            const genre = await Genre.findByPk(id);

            if(!genre) throw { 
                status: 404, message: "Genre not found"
            };

            await genre.destroy();

            return "Genre deleted"
    } catch (error) {
        throw {
            status: error?.status || 500, message: error?.message || error
        };
    }   
};

module.exports =  {

    getGenre,
    getGenrexName,
    putGenre,
    postGenre,
    deleteGenre,

}