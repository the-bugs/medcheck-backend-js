"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Consultas", {
      idConsulta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dataConsulta: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dataMarcacao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      tipoConsulta: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING,
      },
      isRealizada: {
        allowNull: true,
        unique: false,
        type: Sequelize.BOOLEAN,
      },
      idMedico: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Medicos",
          key: "idMedico",
        },
      },
      idPaciente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Pacientes",
          key: "idPaciente",
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
    await queryInterface.dropTable("Consultas");
  },
};
