'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkUpdate('Agendas',
      {
        idPaciente: 1,
        disponivel: false,
      },
      { idMedico: 1 }
    );

    await queryInterface.bulkUpdate('Agendas',
      {
        idPaciente: 2,
        disponivel: false,
      },
      { idMedico: 2 }
    );

    await queryInterface.bulkUpdate('Agendas',
      {
        idPaciente: 3,
        disponivel: false,
      },
      { idMedico: 3 }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Agendas", null, {});
  }
};
