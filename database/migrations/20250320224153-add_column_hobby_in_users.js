'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.addColumn('users', 'hobby',{ type: Sequelize.STRING, allowNull: false, defaultValue: 'Futbol' });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('users','hobby');
  }
};
