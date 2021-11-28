const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require('axios');
const { Videogame, Genre } = require("../db");
const {API_END_POINT_ALL_GAMES, 
       API_END_POINT_SEARCH_GAMES, 
       API_END_POINT_FIL_ID,
       API_KEY} = process.env;

//Creacion de un Nuevo Video Juego. en la BD--------------------------------------
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
      !name ? url = API_END_POINT_ALL_GAMES : url = API_END_POINT_SEARCH_GAMES+name;
      
      //Preparacion de la consulta en la Base de Datos.
      const condition = name 
        ? {where: { name :{[Op.like]: `%${name}%`} }}
        : {}
      
      //condition.attributes = { exclude: ['createdAt','updatedAt'] }
     
      //Consulta de Generos asociados a los videos desde la B.D
      const dbVideos = await Videogame.findAll(condition, {include: Genre });
      
      //Traida de los Datos desde la Api_Externa.
      const apiVideos = (await axios.get(url)).data.results;
      
      //Concatenar Arrays. de los datos filtrados desde la Api y BD. y respuesta
      allVideos = apiVideos.concat(dbVideos);
    
      !name 
        ? res.json(allVideos.length ? allVideos : 'Video games Not found ...')
        : res.json(allVideos.length ? allVideos.slice(0, 15) : 'Video games Not found ...');
       
      //   allVideos.slice(0, 15).map((e)=>{
      //     console.log(e.id, "-", e.name)
      //  })
       
  }
  catch(error){res.send(error)}
}

//Obtener detalle de un Video game en particular haciendo uso Id. ----------------------------
async function Get_Video_ById (req, res){
  try {
    const { id } = req.params ;
    
  //Busqueda en la Base de Datos   
    if (isNaN(id)) {
       const dbVideo = await Videogame.findOne({ where: {id: id}}, {include : Genre}) 
       res.json(dbVideo)
    }
    else 
    {
  //Busqueda en la Api   
       const apiVideo = (await axios.get(API_END_POINT_FIL_ID + id + API_KEY)).data;
       res.json(apiVideo);
    }
  }
  catch(error){res.send(error)}
}

module.exports = {Add_Video, Get_Videos, Get_Video_ById}