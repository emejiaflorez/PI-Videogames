const { Genre } = require("../db");
const axios = require('axios');
const {API_END_POINT_GENRES} = process.env;

//Precarga de Todos los Generos a la BD----------------------------------------------------------
async function Precarga_Genres(){ 
    try {
       let genres = (await axios.get(API_END_POINT_GENRES)).data.results;
       await Promise.all(genres.map(g => Genre.findOrCreate({where:{id: g.id, name : g.name}})))
       return "successfully preloaded genres ....."
      }
    catch (error) {
       console.log(error);
       return "Genres have not been uploaded ....."
      }
}

//Obtener todos los Generos de la  BD despues de haber sido precargados desde la Api--------------
 async function Get_Genres(req, res, next) {
    try {
        const genres = await Genre.findAll({attributes: ['id', 'name']});
        res.json(genes || 'Genres not found ....');
       }
    catch (error) {next(error)}
 }

 module.exports = { Precarga_Genres, Get_Genres }
