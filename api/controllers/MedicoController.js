const database = require("../models");
const UserController = require("./UserController");

class MedicoController {
  static async obterMedico(request, response) {
    // Obtém o parâmetro de consulta 'nome' da URL
    const { nome } = request.query;

    try {
      // Verifica se o parâmetro 'nome' foi fornecido
      if (!nome) {
        // Se 'nome' não foi fornecido, retorna todas as especialidades
        const medicos = await database.Medico.findAll({ include: 'usuario' });
        return response.status(200).json(medicos);
      }

      // Se 'nome' foi fornecido, busca especialidades pelo nome
      const usuario = await database.Usuario.findOne({
        where: { nome: nome }
      });

      if (usuario) {
        const medicoPorNome = await database.Medico.findOne({ where: { usuarioId: usuario.id }, include: 'usuario' });
        return response.status(200).json(medicoPorNome);
      } else {
        return response.status(404).json({
          message: "Medico não encontrada para o nome fornecido.",
        });
      }
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async obterMedicoPorId(request, response) {
    const { id } = request.params;

    try {
      const medico = await database.Medico.findOne({
        where: { id: Number(id) },
        include: 'usuario'
      });

      if (medico == null) {
        return response
          .status(404)
          .json({ message: "Medico não encontrado." });
      }

      return response.status(200).json(medico);
    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async obterMedicoPorIdDeEspecialidade(request, response) {
    const { id } = request.params;

    try {
      const medicos = await database.Medico.findAll({
        include: [
          {
            model: database.Usuario,
            as: 'usuario',
            attributes: ['nome'],
          },
          {
            model: database.Especialidade,
            as: 'especialidade',
          },
        ],
        attributes: {
          exclude: [
            "id",
            "usuarioId",
            "sexo",
            "idEspecialidade",
            "createdAt",
            "updatedAt",
            "especialidade.id",
            "especialidade.createdAt",
            "especialidade.updatedAt"
          ]
        },
        where: { idEspecialidade: Number(id) },
        raw: true,
      });

      if (medicos.length === 0) {
        return response.status(404).json({ message: "Nenhum médico encontrado para a especialidade." });
      }

      return response.status(200).json(medicos);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }


  static async criarMedico(request, response) {
    const { nome, email, senha, numeroRegistro, idEspecialidade, sexo } = request.body;
    if ((nome, email, senha)) {
      try {
        let oldUser = await database.Usuario.findOne({
          where: { email: email },
        });

        if (oldUser == null) {
          const especialidade = await database.Especialidade.findByPk(Number(idEspecialidade));

          if (!especialidade) {
            return response.status(404).json({
              message: "Especialidade não encontrada.",
            });
          }

          const usuario = await UserController.create({ nome, email, senha, tipo: 'medico' });
          const newMedico = await database.Medico.create({
            usuarioId: usuario.id,
            sexo,
            numeroRegistro,
            idEspecialidade
          });

          const medico = await database.Medico.findOne({
            where: { id: newMedico.id },
            include: ['usuario', 'especialidade']
          });

          return response.status(201).json(medico);
        } else {
          return response.status(404).json({
            message: "Já existe Medico com essas informações.",
          });
        }
      } catch (error) {
        return response.status(500).json(error.message);
      }
    } else {
      return response.status(400).json({ message: "Dados incompletos." });
    }
  }

  static async atualizarMedico(request, response) {
    const { id } = request.params;
    const { email, senha, nome, idEspecialidade } = request.body;
    try {
      let medico = await database.Medico.findByPk(Number(id), { include: 'usuario' });

      if (!medico) {
        return response
          .status(404)
          .json({ message: "Medico não encontrado." });
      }

      if (email && usuario.email == email) {
        return response
          .status(400)
          .json({ message: "E-mail já cadastrado!" });
      } else {
        if (email || senha || nome) {
          await medico.usuario.update({ email, senha, nome });
        }
        if (idEspecialidade) {
          const especialidade = await database.Especialidade.findByPk(Number(idEspecialidade));
          if (!especialidade) {
            return response.status(404).json({
              message: "Especialidade não encontrada, Médico não atualizado",
            });
          }
        }
        await medico.update(request.body);
      }

      medico = await database.Medico.findOne({
        where: { id: id },
        attributes: { exclude: ["senha"] },
        include: 'usuario'
      });

      return response.status(201).json(medico);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async removerMedico(request, response) {
    const { id } = request.params;
    try {
      let medico = await database.Medico.findByPk(Number(id), { include: 'usuario' });

      if (!medico) {
        return response
          .status(404)
          .json({ message: "Medico não encontrado." });
      }
      const { usuario } = medico;
      await usuario.destroy();

      return response.status(200).json(true);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

module.exports = MedicoController;
