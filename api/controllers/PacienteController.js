const database = require("../models");
const UserController = require("./UserController");

class PacienteController {
  static async obterPaciente(request, response) {
    // Obtém o parâmetro de consulta 'nome' da URL
    const { nome } = request.query;

    try {
      // Verifica se o parâmetro 'nome' foi fornecido
      if (!nome) {
        // Se 'nome' não foi fornecido, retorna todas as especialidades
        const paicentes = await database.Paciente.findAll({ include: 'usuario' });
        return response.status(200).json(paicentes);
      }

      // Se 'nome' foi fornecido, busca especialidades pelo nome
      const usuario = await database.Usuario.findOne({
        where: { nome: nome }
      });

      if (usuario) {
        const pacientePorNome = await database.Paciente.findOne({ where: { usuarioId: usuario.id }, include: 'usuario' });
        return response.status(200).json(pacientePorNome);
      } else {
        return response.status(404).json({
          message: "Paciente não encontrada para o nome fornecido.",
        });
      }
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async obterPacientePorId(request, response) {
    const { id } = request.params;

    try {
      const paciente = await database.Paciente.findOne({
        where: { id: Number(id) },
        include: 'usuario'
      });

      if (paciente == null) {
        return response
          .status(404)
          .json({ message: "Paciente não encontrado." });
      }

      return response.status(200).json(admin);
    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async criarPaciente(request, response) {
    const { nome, email, senha, cpf, dataNascimento, sexo } = request.body;

    if ((nome, email, senha)) {
      try {
        let oldUser = await database.Usuario.findOne({
          where: { email: email },
        });

        if (oldUser == null) {
          const usuario = await UserController.create({ nome, email, senha, tipo: 'paciente' });
          const newPaciente = await database.Paciente.create({
            usuarioId: usuario.id,
            cpf,
            sexo,
            dataNascimento
          });

          const admin = await database.Paciente.findOne({
            where: { id: newPaciente.id },
            include: 'usuario'
          });

          return response.status(201).json(admin);
        } else {
          return response.status(404).json({
            message: "Já existe Paciente com essas informações.",
          });
        }
      } catch (error) {
        return response.status(500).json(error.message);
      }
    } else {
      return response.status(400).json({ message: "Dados incompletos." });
    }
  }

  static async atualizarPaciente(request, response) {
    const { id } = request.params;
    const { email, senha, nome } = request.body;
    try {
      let paciente = await database.Paciente.findByPk(Number(id), { include: 'usuario' });

      if (!paciente) {
        return response
          .status(404)
          .json({ message: "Paciente não encontrado." });
      }


      if (email && usuario.email == email) {
        return response
          .status(400)
          .json({ message: "E-mail já cadastrado!" });
      } else {
        if (email || senha || nome) {
          await paciente.usuario.update({ email, senha, nome });
        }
        await paciente.update(request.body);
      }

      paciente = await database.Paciente.findOne({
        where: { id: id },
        attributes: { exclude: ["senha"] },
        include: 'usuario'
      });

      return response.status(201).json(paciente);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

module.exports = PacienteController;
