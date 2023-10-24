"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Prontuarios",
      [
        {
          idPaciente: 1,
          descricao: "Histórico de doenças cardíacas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idPaciente: 2,
          descricao: "Problemas de pele recorrentes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idPaciente: 3,
          descricao: "Fratura no braço direito",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Prontuarios", null, {});
  },
};
