'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ropaxcolores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ropa_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ropas',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      color_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'colores',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('coloresxropa');
  }
};
