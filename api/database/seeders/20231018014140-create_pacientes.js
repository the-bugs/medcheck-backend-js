"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pacientes",
      [
        {
          nome: "Paciente1",
          email: "paciente1@example.com",
          senha: "senhaPaciente1",
          sexo: "M",
          cpf: "123.456.789-01",
          dataNascimento: "1990-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Paciente2",
          email: "paciente2@example.com",
          senha: "senhaPaciente2",
          sexo: "F",
          cpf: "987.654.321-09",
          dataNascimento: "1985-02-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Paciente3",
          email: "paciente3@example.com",
          senha: "senhaPaciente3",
          sexo: "M",
          cpf: "456.789.012-34",
          dataNascimento: "1998-07-20",
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
