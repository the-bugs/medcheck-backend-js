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
}

module.exports = UsuarioController;
