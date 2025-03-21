'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullname() {
      return [this.nombre, this.nick_name].join(" ");
    }

    getAge() {
      const hoy = new Date();

      const fechaNac = new Date(this.createdAt);

      let edad = hoy.getFullYear() - fechaNac.getFullYear();
      
      const mes = hoy.getMonth() - fechaNac.getMonth();

      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
      }

      return edad;
    }
    
    static associate(models) {
      User.hasMany(models.Address, {
        foreignKey: 'user_id',
        as: 'address',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    avatar: DataTypes.STRING,
    rol_id: DataTypes.INTEGER,
    nick_name: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    dni: DataTypes.INTEGER,
    hobby: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    underscored: true,
  });
  return User;
};