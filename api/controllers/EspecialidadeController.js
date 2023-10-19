const database = require("../models");

class EspecialidadeController {
  static async obterEspecialidades(request, response) {
    // Obtém o parâmetro de consulta 'nome' da URL
    const { nome } = request.query;

    try {
      // Verifica se o parâmetro 'nome' foi fornecido
      if (!nome) {
        // Se 'nome' não foi fornecido, retorna todas as especialidades
        const especialidades = await database.Especialidade.findAll();
        return response.status(200).json(especialidades);
      }

      // Se 'nome' foi fornecido, busca especialidades pelo nome
      const especialidadesPorNome = await database.Especialidade.findOne({
        where: { nome: nome },
      });

      if (especialidadesPorNome.length === 0) {
        return response.status(404).json({
          message: "Especialidade não encontrada para o nome fornecido.",
        });
      } else {
        return response.status(200).json(especialidadesPorNome);
      }
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async obterEspecialidadePorId(request, response) {
    const { id } = request.params;

    try {
      const especialidade = await database.Especialidade.findOne({
        where: { id: Number(id) },
      });

      if (especialidade == null) {
        return response
          .status(404)
          .json({ message: "Especialidade não encontrada." });
      }

      return response.status(200).json(especialidade);
    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async criarEspecialidade(request, response) {
    const { nome } = request.body;

    if (nome) {
      try {
        var especialidade = await database.Especialidade.findOne({
          where: { nome: nome },
        });

        if (especialidade == null) {
          especialidade = await database.Especialidade.create({
            nome,
          });
          return response.status(201).json(especialidade);
        } else {
          return response
            .status(404)
            .json({ message: "Especialidade já existe." });
        }
      } catch (error) {
        return response.status(500).json(error.message);
      }
    } else {
      return response.status(400).json({ message: "Dados incompletos." });
    }
  }

  static async atualizarEspecialidade(request, response) {
    const { id } = request.params;
    const { nome } = request.body;

    try {
      var especialidade = await database.Especialidade.findByPk(Number(id));

      if (!especialidade) {
        return response
          .status(404)
          .json({ message: "Especialidade não encontrada." });
      }

      // Verifica se o nome fornecido é diferente do nome atual
      if (nome !== especialidade.nome) {
        // Verifica se já existe uma especialidade com o novo nome
        const especialidadeExistente = await database.Especialidade.findOne({
          where: { nome: nome },
        });

        if (especialidadeExistente) {
          return response
            .status(400)
            .json({ message: "Especialidade já existe." });
        }

        await especialidade.update({ nome: nome });
        especialidade = await database.Especialidade.findByPk(Number(id));

        return response.status(200).json(especialidade);
      } else {
        return response
          .status(400)
          .json({ message: "Especialidade já existe." });
      }
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async excluirEspecialidade(request, response) {
    const { id } = request.params;

    const especialidade = await database.Especialidade.findOne({
      where: { id: Number(id) },
    });

    try {
      if (especialidade == null) {
        return response
          .status(404)
          .json({ message: "Especialidade não encontrada." });
      }

      const nomeEspecialidade = especialidade.nome;

      await database.Especialidade.destroy({
        where: { id: Number(id) },
      });
      return response
        .status(200)
        .json({ message: `Especialidade ${nomeEspecialidade} foi deletada!` });
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
}

module.exports = EspecialidadeController;
