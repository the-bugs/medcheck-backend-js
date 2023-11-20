"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Agendas",
      [
        {
          idMedico: 1,
          dataAgenda: new Date("2023-10-19"),
          disponivel: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 2,
          dataAgenda: new Date("2023-10-19"),
          disponivel: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 3,
          dataAgenda: new Date("2023-10-20"),
          disponivel: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Agendas", null, {});
  },
};
