"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Prontuarios", {
      idProntuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricao: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Prontuarios");
  },
};
