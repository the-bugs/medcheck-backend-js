"use strict";
const tipoConsulta = require("../../helpers/consulta.js");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Consultas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dataMarcacao: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE,
      },
      tipoConsulta: {
        allowNull: true,
        unique: false,
        defaultValue: tipoConsulta.Particular,
        type: Sequelize.STRING,
      },
      isRealizada: {
        allowNull: false,
        defaultValue: false,
        unique: false,
        type: Sequelize.BOOLEAN,
      },
      idAgenda: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Agendas",
          key: "id",
        },
      },
      idPaciente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Pacientes",
          key: "id",
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
