'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    profile: DataTypes.STRING,
    rol_id: DataTypes.INTEGER,
    nick_name: DataTypes.STRING,
    hobbies: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};