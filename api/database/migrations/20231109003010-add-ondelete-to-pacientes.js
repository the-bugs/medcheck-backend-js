'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeConstraint(
        'pacientes',
        'pacientes_ibfk_1',
        { transaction }
      );
      await queryInterface.addConstraint('pacientes', {
        type: 'FOREIGN KEY',
        name: 'pacientes_ibfk_1',
        fields: ['usuarioId'],
        references: {
          table: 'usuarios',
          field: 'id',
        },
        onDelete: 'CASCADE',
        transaction
      });
      return transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeConstraint(
        'pacientes',
        'pacientes_ibfk_1',
        { transaction }
      );
      await queryInterface.addConstraint('pacientes', {
        type: 'FOREIGN KEY',
        name: 'pacientes_ibfk_1',
        fields: ['usuarioId'],
        references: {
          table: 'usuarios',
          field: 'id',
        },
        transaction
      });
      return transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
