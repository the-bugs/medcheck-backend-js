"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Consultas",
      [
        {
          idMedico: 1,
          idPaciente: 1,
          dataConsulta: "2023-10-18",
          dataMarcacao: "2023-10-15",
          tipoConsulta: "Particular",
          isRealizada: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 2,
          idPaciente: 2,
          dataConsulta: "2023-10-19",
          dataMarcacao: "2023-10-16",
          tipoConsulta: "Particular",
          isRealizada: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 3,
          idPaciente: 3,
          dataConsulta: "2023-10-20",
          dataMarcacao: "2023-10-17",
          tipoConsulta: "Convênio",
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
