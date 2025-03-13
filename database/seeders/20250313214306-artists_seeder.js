"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      "Artists",
      [
        {
          name: "The Rolling Stones",
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Taylor Swift",
          genre_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Miles Davis",
          genre_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "B.B. King",
          genre_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kendrick Lamar",
          genre_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bob Marley",
          genre_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Johnny Cash",
          genre_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ludwig van Beethoven",
          genre_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Daft Punk",
          genre_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Metallica",
          genre_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Artists', null, {});
  },
};
