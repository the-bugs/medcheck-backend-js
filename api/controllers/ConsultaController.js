const database = require("../models");

class ConsultaController {
  static async obterConsultas(request, response) {
    const { idPaciente } = request.query;

    try {
      if (!idPaciente) {
        // Se 'idPaciente' não foi fornecido, retorna todas as consultas
        const consultas = await database.Consulta.findAll();
        return response.status(200).json(consultas);
      }

      // Se 'idPaciente' foi fornecido, busca o prontuário pelo idPaciente
      const consultasPorPaciente = await database.Consulta.findAll({
        where: { idPaciente },
      });

      if (consultasPorPaciente == null) {
        return response.status(404).json({
          message: "Consultas não encontrados para esse paciente.",
        });
      } else {
        return response.status(200).json(consultasPorPaciente);
      }
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async obterConsultaPorId(request, response) {
    const { id } = request.params;

    try {
      const consulta = await database.Consulta.findByPk(Number(id));

      if (consulta == null) {
        return response
          .status(404)
          .json({ message: "Consulta não encontrada." });
      }

      return response.status(200).json(consulta);
    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async criarConsulta(request, response) {
    const { idMedico, dataConsulta, } = request.body;

    if (idMedico && dataConsulta) {
      try {
        var medico = await database.Medico.findByPk(Number(idMedico));

        if (!medico) {
          return response.status(404).json({ message: `Médico não encontrado.` });
        }

        const consulta = await database.Consulta.create({
          dataConsulta: dataConsulta,
          dataMarcacao: null,
          isRealizada: false,
          idMedico: idMedico,
          idPaciente: null
        })
        return response.status(201).json(consulta);

      } catch (error) {
        return response.status(500).json(error.message);
      }
    } else {
      return response.status(400).json({ message: "Dados incompletos." });
    }
  }

  static async agendarConsulta(request, response) {
    const { idAgenda, idPaciente, } = request.body;

    try {
      var agenda = await database.Agenda.findByPk(Number(idAgenda));
      var paciente = await database.Paciente.findByPk(Number(idPaciente));

      if (!paciente) {
        return response.status(404).json({ message: `Paciente com id: ${idPaciente} não encontrado.` });
      }

      if (!agenda) {
        return response.status(404).json({ message: `Agenda com id: ${idAgenda} não encontrada.` });
      }

      if (agenda && agenda.idPaciente != null) {
        return response.status(400).json({ message: `Agenda indisponível para marcação.` });
      }

      const consulta = await database.Consulta.create({
        idAgenda: idAgenda,
        dataMarcacao: Date.now(),
        isRealizada: false,
      });

      await database.Agenda.update(
        {
          disponivel: false,
          idPaciente: idPaciente,
        }, { where: { id: idAgenda } }
      );
      return response.status(201).json(consulta);
      
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

}

module.exports = ConsultaController;
