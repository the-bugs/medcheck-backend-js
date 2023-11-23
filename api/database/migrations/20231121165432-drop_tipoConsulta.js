'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Consultas', 'tipoConsulta');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Consultas', 'tipoConsulta', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Particular',
    });
  }
};
