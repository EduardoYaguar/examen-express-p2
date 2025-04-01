'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('ropas', [
    {
      nombre: 'Camisa',
      tipo: 'Camisa',
      talla: 'M',
      precio: 20.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Pantalón',
      tipo: 'Pantalón',
      talla: 'M',
      precio: 25.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Chaqueta',
      tipo: 'Chaqueta',
      talla: 'M',
      precio: 30.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Vestido',
      tipo: 'Vestido',
      talla: 'L',
      precio: 37.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Falda',
      tipo: 'Falda',
      talla: 'L',
      precio: 16.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Bufanda',
      tipo: 'Bufanda',
      talla: 'S',
      precio: 23.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Gorro',
      tipo: 'Gorro',
      talla: 'M',
      precio: 18.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ropas', null, {});
  }
};
