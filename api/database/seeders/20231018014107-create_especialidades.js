"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Especialidades",
      [
        { nome: "Cardiologia", createdAt: new Date(), updatedAt: new Date() },
        { nome: "Dermatologia", createdAt: new Date(), updatedAt: new Date() },
        { nome: "Ortopedia", createdAt: new Date(), updatedAt: new Date() },
        { nome: "Pediatria", createdAt: new Date(), updatedAt: new Date() },
        { nome: "Ginecologia", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Especialidades", null, {});
  },
};
