'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.addColumn('Addresses', 'localidad_id', Sequelize.INTEGER);
      await queryInterface.addColumn('Addresses', 'provincia_id', Sequelize.INTEGER);
      await queryInterface.changeColumn('Addresses', 'localidad', Sequelize.STRING);
      await queryInterface.changeColumn('Addresses', 'provincia', Sequelize.STRING);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Addresses', 'localidad_id');
    await queryInterface.removeColumn('Addresses', 'provincia_id');
    await queryInterface.changeColumn('Addresses', 'localidad', Sequelize.INTEGER);
    await queryInterface.changeColumn('Addresses', 'provincia', Sequelize.INTEGER);
  }
};
