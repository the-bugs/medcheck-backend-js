const database = require("../models");

class UsuarioController {
  static async listarUsuarios(request, response) {
    try {
      const usuarios = await database.Usuario.findAll();
      return response.status(200).json(usuarios);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async obterUsuarioPorId(request, response) {
    const { id } = request.params;

    try {
      const usuario = await database.Usuario.findOne({
        where: { id: Number(id) },
      });

      if (usuario == null) {
        return response
          .status(404)
          .json({ message: "Usuário não encontrado." });
      }

      return response.status(200).json(usuario);
    } catch (error) {
      return response.status(590).json(error.message);
    }
  }

  static async criarUsuario(request, response) {
    const { nome, email, senha, funcao } = request.body;
    if (nome && email && senha && funcao) {
      try {
        const usuario = await database.Usuario.create(dadosNovoUsuario);
        return response.status(201).json(usuario);
      } catch (error) {
        return response.status(500).json(error.message);
      }
    } else {
      return response.status(400).json({ message: "Dados incompletos." });
    }
  }
}

module.exports = UsuarioController;
