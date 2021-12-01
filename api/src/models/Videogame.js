const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define ('videogame', {
      id          : {type: DataTypes.UUID,    allowNull: false, defaultValue: DataTypes.UUIDV1, primaryKey : true,},
      name        : {type: DataTypes.STRING,  allowNull: false,},
      description : {type: DataTypes.STRING,  allowNull: false,},
      released    : {type: DataTypes.DATE,    allowNull: true,},
      rating      : {type: DataTypes.DECIMAL, allowNull: true,},
      platforms   : {type: DataTypes.STRING,  allowNull: false,},
      image       : {type: DataTypes.STRING,  allowNull: true,},
  });
};
