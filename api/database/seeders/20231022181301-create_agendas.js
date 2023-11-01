"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Agendas",
      [
        {
          idMedico: 1,
          dataAgenda: "2023-10-18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 2,
          dataAgenda: "2023-10-19",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMedico: 3,
          dataAgenda: "2023-10-20",
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
