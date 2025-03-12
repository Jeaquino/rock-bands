'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     **/
    await queryInterface.bulkInsert('Rols', [
      {
        name: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Auditor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'User',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     
     * Example:
     */ await queryInterface.bulkDelete('Rols', null, {});

  }
};
