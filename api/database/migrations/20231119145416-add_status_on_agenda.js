'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Agendas', 'Status', {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        }, { transaction: t })
      ]);
    });

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Agendas', 'Status', { transaction: t }),
      ]);
    });
  }
};
