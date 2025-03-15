"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Addresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      calle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      altura: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: true,
      },
      localidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: false,
      },
      provincia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: false,
      },
      cp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: false,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Addresses");
  },
};
