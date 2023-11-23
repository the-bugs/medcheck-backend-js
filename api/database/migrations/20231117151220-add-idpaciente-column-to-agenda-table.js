'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Agendas', 'idPaciente', {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: null,
          after: 'idMedico',
          references: {
            model: "Pacientes",
            key: "id",
          },
        }, { transaction: t })
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Agendas', 'idPaciente', { transaction: t }),
      ]);
    });
  }
};
