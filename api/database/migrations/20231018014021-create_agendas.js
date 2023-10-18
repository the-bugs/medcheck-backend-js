"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Agendas", {
      idAgenda: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dataAgenda: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      idMedico: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Medicos",
          key: "idMedico",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Agendas");
  },
};
