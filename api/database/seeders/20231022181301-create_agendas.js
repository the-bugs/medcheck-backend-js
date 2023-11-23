"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Agendas",
      [
        {
          idMedico: 1,
          dataAgenda: new Date("2023-11-22"),
          disponivel: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 2,
          dataAgenda: new Date("2023-11-23"),
          disponivel: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 3,
          dataAgenda: new Date("2023-11-24"),
          disponivel: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 3,
          dataAgenda: new Date("2023-12-01"),
          disponivel: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 3,
          dataAgenda: new Date("2023-12-02"),
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
