"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Medicos",
      [
        {
          idEspecialidade: 1,
          nome: "Dr. Cardiologista",
          email: "cardio@example.com",
          senha: "senhaMedico1",
          sexo: "M",
          numeroRegistro: "CR12345",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idEspecialidade: 2,
          nome: "Dra. Dermatologista",
          email: "derma@example.com",
          senha: "senhaMedico2",
          sexo: "F",
          numeroRegistro: "CR67890",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idEspecialidade: 3,
          nome: "Dr. Ortopedista",
          email: "orto@example.com",
          senha: "senhaMedico3",
          sexo: "M",
          numeroRegistro: "CR54321",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Medicos", null, {});
  },
};
