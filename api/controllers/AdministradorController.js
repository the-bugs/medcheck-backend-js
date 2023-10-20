const database = require("../models");

class AdministradorController {
  static async obterAdmin(request, response) {
    // Obtém o parâmetro de consulta 'nome' da URL
    const { nome } = request.query;

    try {
      // Verifica se o parâmetro 'nome' foi fornecido
      if (!nome) {
        // Se 'nome' não foi fornecido, retorna todas as especialidades
        const administradores = await database.Administrador.findAll();
        return response.status(200).json(administradores);
      }

      // Se 'nome' foi fornecido, busca especialidades pelo nome
      const adminPorNome = await database.Administrador.findOne({
        where: { nome: nome },
        attributes: { exclude: ["senha"] },
      });

      if (adminPorNome == null) {
        return response.status(404).json({
          message: "Admin não encontrada para o nome fornecido.",
        });
      } else {
        return response.status(200).json(adminPorNome);
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
        attributes: { exclude: ["senha"] },
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
        let admin = await database.Administrador.findOne({
          where: { email: email },
        });

        if (admin == null) {
          await database.Administrador.create({
            nome,
            email,
            senha,
          });

          admin = await database.Administrador.findOne({
            where: { email: email },
            attributes: { exclude: ["senha"] },
          });

          // delete admin.dataValues.senha;

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
}

module.exports = AdministradorController;
