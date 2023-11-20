const { isFriday } = require("date-fns/esm/fp");
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
    const {
      dataConsulta,
      tipoConsulta,
      idMedico,
      idPaciente
    } = request.body;

    if (idMedico && idPaciente) {
      try {
        var medico = await database.Medico.findByPk(Number(idMedico));
        var paciente = await database.Paciente.findByPk(Number(idPaciente));

        if (!paciente) {
          return response.status(404).json({ message: `Paciente com id: ${idPaciente} não encontrado.` });
        }

        if (!medico) {
          return response.status(404).json({ message: `Médico com id: ${idMedico} não encontrado.` });
        }

        if (idMedico && idPaciente) {
          const consulta = await database.Consulta.create(
            {
              dataConsulta: dataConsulta,
              dataMarcacao: Date.now(),
              tipoConsulta: tipoConsulta,
              isRealizada: false,
              idMedico: idMedico,
              idPaciente: idPaciente
            })
          return response.status(201).json(consulta);
        }
      } catch (error) {
        return response.status(500).json(error.message);
      }
    } else {
      return response.status(400).json({ message: "Dados incompletos." });
    }
  }

  static async atualizarProntuario(request, response) {
    const { id } = request.params;
    const { descricao } = request.body;

    try {
      var prontuario = await database.Prontuario.findByPk(Number(id));

      if (!prontuario) {
        return response
          .status(404)
          .json({ message: "Prontuario não encontrada." });
      }

      await prontuario.update({ descricao });

      return response.status(200).json(prontuario);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async excluirProntuario(request, response) {
    const { id } = request.params;

    const prontuario = await database.Prontuario.findOne({
      where: { id: Number(id) },
    });

    try {
      if (prontuario == null) {
        return response
          .status(404)
          .json({ message: "Prontuario não encontrado." });
      }

      await database.Prontuario.destroy({
        where: { id: Number(id) },
      });
      return response
        .status(200)
        .json({ message: `Prontuario ${id} foi deletado!` });
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
}

module.exports = ProntuarioController;
