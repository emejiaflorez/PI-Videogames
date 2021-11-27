const {Platform } = require("../db");
const axios = require('axios');
const {API_END_POINT_ALL_GAMES} = process.env;

//Precarga de Todos los Generos a la BD----------------------------------------------------------
async function Precarga_PlatForms(){ 
    try {
      let plat_forms = []; 
      let results = (await axios.get(API_END_POINT_ALL_GAMES)).data.results;
      for (let i = 0; i < results.length; i++){
          results[i].platforms.map((e)=>{
            plat_forms.push({id: e.platform.id, name: e.platform.name})
          })
      }
      //Eliminar duplicados de un Array de objetos
      var hash = {};
      plat_forms = plat_forms.filter((e) => {
        var exists = !hash[e.id];
        hash[e.id] = true;
        return exists;
      });

      await Promise.all(plat_forms.map((p) => Platform.findOrCreate({where:{id: p.id, name: p.name}})))
      return "successfully preloaded platforms ....."
      }
    catch (error) {
       console.log(error);
       return "Platforms have not been uploaded ....."
      }
}

module.exports = { Precarga_PlatForms }