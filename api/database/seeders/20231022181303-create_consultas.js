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
          dataMarcacao: new Date("2023-11-21"),
          isRealizada: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idAgenda: 2,
          dataMarcacao: new Date("2023-11-22"),
          isRealizada: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idAgenda: 3,
          dataMarcacao: new Date("2023-11-23"),
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
