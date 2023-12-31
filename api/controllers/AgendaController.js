const database = require("../models");

class AgendaController {
  static async obterAgendas(request, response) {
    const { idPaciente, idMedico } = request.query;

    try {
      // var query = {
      //   where: {}
      // };
      // // TODO: adicionar filtro de data

      // if (idPaciente) query.where.idPaciente = idPaciente;
      // if (idMedico) query.where.idMedico = idMedico;

      // console.log(query);

      // const agendas = await database.Agenda.findAll(query);
      const agendas = await database.Agenda.findAll();
      return response.status(200).json(agendas);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async obterAgendaPorId(request, response) {
    const { id } = request.params;

    try {
      const agenda = await database.Agenda.findByPk(Number(id));

      if (agenda == null) {
        return response
          .status(404)
          .json({ message: "Agenda não encontrada." });
      }

      return response.status(200).json(agenda);
    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async obterAgendaPorIdMedico(request, response) {
    const { id } = request.params;

    try {
      const agenda = await database.Agenda.findAll({
        where: { idMedico: Number(id) },
      });

      if (agenda == null || agenda.length == 0) {
        return response
          .status(404)
          .json({ message: "Agenda não encontrada." });
      }
      return response.status(200).json(agenda);

    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async criarAgenda(request, response) {
    const { dataAgenda, idMedico } = request.body;

    if (dataAgenda, idMedico) {
      const dataFormatada = new Date(dataAgenda);

      try {
        var agenda = await database.Agenda.findOne({
          where: { dataAgenda: dataFormatada, idMedico },
        });

        if (agenda == null) {
          agenda = await database.Agenda.create(
            {
              dataAgenda: new Date(dataAgenda),
              idMedico
            });
          return response.status(201).json(agenda);
        } else {
          return response
            .status(404)
            .json({ message: "Agenda já existe." });
        }
      } catch (error) {
        return response.status(500).json(error.message);
      }
    } else {
      return response.status(400).json({ message: "Dados incompletos." });
    }
  }

  static async atualizarAgenda(request, response) {
    const { id } = request.params;
    const { dataAgenda } = request.body;

    try {

      if (!dataAgenda) return response.status(400).json({ message: "Dados incompletos." });

      var agenda = await database.Agenda.findByPk(Number(id));

      if (!agenda) {
        return response
          .status(404)
          .json({ message: "Agenda não encontrada." });
      }

      const dataFormatada = new Date(dataAgenda);
      await agenda.update({ dataAgenda: dataFormatada });
      return response.status(200).json(agenda);

    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async excluirAgenda(request, response) {
    const { id } = request.params;

    const agenda = await database.Agenda.findByPk(Number(id));

    try {
      if (agenda == null) {
        return response
          .status(404)
          .json({ message: "Agenda não encontrada." });
      }

      await database.Agenda.destroy({
        where: { id: Number(id) },
      });

      return response
        .status(200)
        .json({ message: `Agenda de ${id} foi deletada!` });
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

}

module.exports = AgendaController;
