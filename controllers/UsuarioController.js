const database = require("../models");

class UsuarioController {
  static async listarUsuarios(request, response) {
    try {
      const usuarios = await database.Usuario.findAll();
      return response.status(200).json(usuarios);
    } catch (error) {
      return response.status(590).json(error.message);
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
}

module.exports = UsuarioController;
