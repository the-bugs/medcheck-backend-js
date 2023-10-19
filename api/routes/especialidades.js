const { Router } = require("express");
const Especialidade = require("../models/especialidade");
const EspecialidadeController = require("../controllers/EspecialidadeController");

const router = Router();

router.get("/especialidades", EspecialidadeController.obterEspecialidades);
router.get(
  "/especialidades/:id",
  EspecialidadeController.obterEspecialidadePorId
);
router.post("/especialidades", EspecialidadeController.criarEspecialidade);
router.put(
  "/especialidades/:id",
  EspecialidadeController.atualizarEspecialidade
);
router.delete(
  "/especialidades/:id",
  EspecialidadeController.excluirEspecialidade
);

module.exports = router;
