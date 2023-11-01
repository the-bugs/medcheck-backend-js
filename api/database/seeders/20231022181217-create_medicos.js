"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Medicos",
      [
        {
          idEspecialidade: 1,
          usuarioId: 2,
          sexo: "M",
          numeroRegistro: "CR12345",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idEspecialidade: 2,
          usuarioId: 3,
          sexo: "F",
          numeroRegistro: "CR67890",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idEspecialidade: 3,
          usuarioId: 4,
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
