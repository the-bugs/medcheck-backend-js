const database = require("../models");

class ProntuarioController {
  static async obterProntuarios(request, response) {
    // Obtém o parâmetro de consulta 'nome' da URL
    const { idPaciente } = request.query;

    try {
      // Verifica se o parâmetro 'nome' foi fornecido
      if (!idPaciente) {
        // Se 'idPaciente' não foi fornecido, retorna todas os prontuarios
        const prontuarios = await database.Prontuario.findAll();
        return response.status(200).json(prontuarios);
      }

      // Se 'idPaciente' foi fornecido, busca especialidades pelo idPaciente
      const prontuariosPorPaciente = await database.Prontuario.findAll({
        where: { idPaciente },
      });

      if (prontuariosPorPaciente == null) {
        return response.status(404).json({
          message: "Prontuarios não encontrados para esse paciente.",
        });
      } else {
        return response.status(200).json(prontuariosPorPaciente);
      }
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async obterProntuarioPorId(request, response) {
    const { id } = request.params;

    try {
      const prontuario = await database.Prontuario.findByPk(Number(id));

      if (prontuario == null) {
        return response
          .status(404)
          .json({ message: "Prontuario não encontrado." });
      }

      return response.status(200).json(prontuario);
    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async criarProntuario(request, response) {
    const { descricao, idPaciente } = request.body;

    if (descricao && idPaciente) {
      try {
        var prontuario = await database.Prontuario.findOne({
          where: { descricao },
        });

        var paciente = await database.Paciente.findByPk(Number(idPaciente));

        if (!paciente) {
          return response.status(404).json({ message: `Paciente com id: ${idPaciente} não encontrado.` });
        }

        if (prontuario == null) {
          prontuario = await database.Prontuario.create({
            descricao,
            idPaciente
          });
          return response.status(201).json(prontuario);
        } else {
          return response
            .status(404)
            .json({ message: "Prontuario já existe." });
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
