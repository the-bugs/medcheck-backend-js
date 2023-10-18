"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Medicos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      senha: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING,
      },
      sexo: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING,
      },
      numeroRegistro: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      idEspecialidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Especialidades",
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
    await queryInterface.dropTable("Medicos");
  },
};
