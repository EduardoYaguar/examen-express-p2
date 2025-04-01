'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('ropaxcolores', [
    {
      ropa_id: 1,
      color_id: 1
    },
    {
      ropa_id: 1,
      color_id: 4
    },
    {
      ropa_id: 2,
      color_id: 2
    },
    {
      ropa_id: 2,
      color_id: 8
    },
    {
      ropa_id: 3,
      color_id: 2
    },
    {
      ropa_id: 3,
      color_id: 6
    },
    {
      ropa_id: 4,
      color_id: 4
    },
    {
      ropa_id: 5,
      color_id: 5
    },
    {
      ropa_id: 6,
      color_id: 15
    }
   ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ropaxcolores', null, {});
  }
};
