"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Álbumes",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Instrumentos ",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Instrumentos de Viento",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Instrumentos de Percusión",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Accesorios para Instrumentos",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Vinilos",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Instrumentos de Viento",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Partituras y Libros",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Micrófonos y Audio",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Software de Producción Musical",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Equipos de DJ",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
