"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Genres",
      [
        {
          name: "Rock",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pop",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Jazz",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Blues",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Hip Hop",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Reggae",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Country",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Classical",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Electronic",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Metal",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Genres', null, {});
  },
};
