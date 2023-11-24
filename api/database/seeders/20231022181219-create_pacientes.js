"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pacientes",
      [
        {
          usuarioId: 5,
          sexo: "M",
          cpf: "123.456.789-01",
          dataNascimento: new Date("1990-01-01"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuarioId: 6,
          sexo: "F",
          cpf: "987.654.321-09",
          dataNascimento: new Date("1985-02-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuarioId: 7,
          sexo: "M",
          cpf: "456.789.012-34",
          dataNascimento: new Date("1998-07-20"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pacientes", null, {});
  },
};
