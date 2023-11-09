const database = require("../models");
const UserController = require("./UserController");

class AdministradorController {
  static async obterAdmin(request, response) {
    // Obtém o parâmetro de consulta 'nome' da URL
    const { nome } = request.query;

    try {
      // Verifica se o parâmetro 'nome' foi fornecido
      if (!nome) {
        // Se 'nome' não foi fornecido, retorna todas as especialidades
        const administradores = await database.Administrador.findAll({ include: 'usuario' });
        return response.status(200).json(administradores);
      }

      // Se 'nome' foi fornecido, busca especialidades pelo nome
      const usuario = await database.Usuario.findOne({
        where: { nome: nome }
      });

      if (usuario) {
        const adminPorNome = await database.Administrador.findOne({ where: { usuarioId: usuario.id }, include: 'usuario' });
        return response.status(200).json(adminPorNome);
      } else {
        return response.status(404).json({
          message: "Admin não encontrada para o nome fornecido.",
        });
      }
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async obterAdminPorId(request, response) {
    const { id } = request.params;

    try {
      const admin = await database.Administrador.findOne({
        where: { id: Number(id) },
        include: 'usuario'
      });

      if (admin == null) {
        return response
          .status(404)
          .json({ message: "Administrador não encontrado." });
      }

      return response.status(200).json(admin);
    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async criarAdmin(request, response) {
    const { nome, email, senha } = request.body;

    if ((nome, email, senha)) {
      try {
        let oldUser = await database.Usuario.findOne({
          where: { email: email },
        });

        if (oldUser == null) {
          const usuario = await UserController.create({ nome, email, senha, tipo: 'administrador' });
          const newAdmin = await database.Administrador.create({
            usuarioId: usuario.id,
          });

          const admin = await database.Administrador.findOne({
            where: { id: newAdmin.id },
            include: 'usuario'
          });

          return response.status(201).json(admin);
        } else {
          return response.status(404).json({
            message: "Já existe Administrador com essas informações.",
          });
        }
      } catch (error) {
        return response.status(500).json(error.message);
      }
    } else {
      return response.status(400).json({ message: "Dados incompletos." });
    }
  }

  static async atualizarAdministrador(request, response) {
    const { id } = request.params;
    const { email, senha } = request.body;

    try {
      let admin = await database.Administrador.findByPk(Number(id));

      if (!admin) {
        return response
          .status(404)
          .json({ message: "Administrador não encontrado." });
      }

      if (email || senha) {
        if (admin.email == email) {
          return response
            .status(400)
            .json({ message: "E-mail já cadastrado!" });
        } else {
          if (email && senha) {
            await admin.update({ email: email, senha: senha });
          } else if (email) {
            await admin.update({ email: email });
          } else if (senha) {
            await admin.update({ senha: senha });
          } else {
            return response
              .status(400)
              .json({ message: "Requisição inválida." });
          }
        }

        admin = await database.Administrador.findOne({
          where: { id: id },
          attributes: { exclude: ["senha"] },
        });

        return response.status(201).json(admin);
      } else {
        return response.status(400).json({ message: "Requisição inválida." });
      }
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async removerAdministrador(request, response) {
    const { id } = request.params;

    try {
      let admin = await database.Administrador.findByPk(Number(id), { include: 'usuario' });
      if (!admin) {
        return response
          .status(404)
          .json({ message: "Administrador não encontrado." });
      }

      const { usuario } = admin;
      await usuario.destroy();

      return response.status(200).json(true);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

module.exports = AdministradorController;
