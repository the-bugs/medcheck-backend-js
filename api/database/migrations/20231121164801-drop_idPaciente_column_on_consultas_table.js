'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Consultas', 'idPaciente');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Consultas");
  }
};
