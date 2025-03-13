'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('items', { 
      id: Sequelize.INTEGER,
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id',
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'products'
          },
          key: 'id',
        },
      },
      quantity: Sequelize.INTEGER
    });
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('items');
  }
};
