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
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Medico belongsTo User 1:1
          model: 'Usuarios',
          key: 'id'
        }
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
