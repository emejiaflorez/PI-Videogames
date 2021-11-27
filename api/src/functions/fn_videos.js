const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Videogame, Genre } = require("../db");
const axios = require('axios');
const {API_END_POINT_ALL_GAMES, API_END_POINT_SEARCH_GAMES} = process.env;

//Creacion de Video Juego. -----------------------------------------------------------------
async function Add_Video (req, res) {
      const { name, description, released, rating, platforms, image, genres } = req.body;
      try {
        const newVideo = await Videogame.create(
            { name, description, released, rating, platforms, image});
        await newVideo.addGenres(genres);  
        res.json(newVideo);
      } 
      catch (error) { res.send(error); }
}

//Obtener Listado de los Video games tanto de la Api como de la BD.----------------
async function Get_Videos (req, res){
  try {
      const { name } = req.query;
      let allVideos = [];

      //Únicos Endpoints/Flags que pueden utilizar.
      !name ? url = API_END_POINT_ALL_GAMES : url = API_END_POINT_SEARCH_GAMES+{name};

      //Preparacion de la consulta en la Base de Datos.
      const condition = name 
        ? {where: { name :{[Op.like]: name } }}
        : {}
      
      condition.attributes = { exclude: ['createdAt','updatedAt'] }

     //Consulta de Generos asociados a los videos desde la B.D
     const dbVideos = await Videogame.findAll({include: Genre }, condition);
     
     //Traida de los Datos desde la Api_Externa.
     const apiVideos = (await axios.get(url)).data.results;
      
     //Concatenar Arrays. de los datos filtrados desde la Api y BD. y respuesta
     allVideos = apiVideos.concat(dbVideos);

     !name 
       ? res.json(allVideos.length ? allVideos : 'Video games Not found ...')
       : res.json(allVideos.length ? allVideos.slice(0, 15) : 'Video games Not found ...');
  }
  catch(error){res.send(error)}
}

//Obtener detalle de un Video game en particular haciendo uso Id. ---------------------------------
async function Get_Video_ById (req,res){
  try {
    const { id } = req.params ;
    const {name} = req.body;
    
    const dbDog = await Dog.findOne({include : Temperament},{ where: {id: id, name: name}})    
    if (!!dbDog){
        res.json(dbDog)
    }
    else {
      let apiDog = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
      apiDog = apiDog.find(e => e.id == id && e.name == name);
      console.log(apiDog);
      res.json(apiDog);
    }
    
  }
  catch {res.send(error)}
}

module.exports = {Add_Video, Get_Videos, Get_Video_ById}