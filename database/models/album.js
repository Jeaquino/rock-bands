'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Album.init({
    name: DataTypes.STRING,
    genre_id: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER,
    realease_date: DataTypes.DATE,
    length: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Album',
    underscored: true,
  });
  return Album;
};