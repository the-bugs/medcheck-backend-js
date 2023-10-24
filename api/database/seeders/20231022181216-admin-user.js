'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          nome: "Sr. Administrador",
          email: "admin@example.com",
          senha: "senhaAdmin1",
          tipo: "Administrador",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Dr. Cardiologista",
          email: "cardio@example.com",
          senha: "senhaMedico1",
          tipo: "Medico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Dra. Dermatologista",
          email: "derma@example.com",
          senha: "senhaMedico2",
          tipo: "Medico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Dr. Ortopedista",
          email: "orto@example.com",
          senha: "senhaMedico3",
          tipo: "Medico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sr. Paciente 1",
          email: "paciente1@example.com",
          senha: "senhaPaciente1",
          tipo: "Paciente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sr. Paciente 2",
          email: "paciente2@example.com",
          senha: "senhaPaciente2",
          tipo: "Paciente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sr. Paciente 3",
          email: "paciente3@example.com",
          senha: "senhaPaciente3",
          tipo: "Paciente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
