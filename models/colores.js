'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      colores.belongsToMany(models.ropa, {
        through: 'ropaxcolores',
        foreignKey: 'color_id',
      });
    }
  }
  colores.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'colores',
  });
  return colores;
};