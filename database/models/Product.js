'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL,
    id_categoria: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    genero_id: DataTypes.INTEGER,
    banda_id: DataTypes.INTEGER,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    underscored: true,
  });
  return Product;
};