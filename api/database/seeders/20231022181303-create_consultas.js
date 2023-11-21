"use strict";
const tipoConsulta = require("../../helpers/consulta.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Consultas",
      [
        {
          idAgenda: 1,
          dataMarcacao: new Date("2023-10-15"),
          isRealizada: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idAgenda: 2,
          dataMarcacao: new Date("2023-10-16"),
          isRealizada: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idAgenda: 3,
          dataMarcacao: new Date("2023-10-17"),
          isRealizada: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Consultas", null, {});
  },
};
