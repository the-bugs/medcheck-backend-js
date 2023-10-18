const database = require("../models");

class EspecialidadeController {
  static async listarEspecialidades(request, response) {
    try {
      const especialidades = await database.Especialidade.findAll();
      return response.status(200).json(especialidades);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
}

module.exports = EspecialidadeController;
