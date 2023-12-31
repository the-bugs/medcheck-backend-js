const { Router } = require("express");
const EspecialidadeController = require("../controllers/EspecialidadeController");
const authGuard = require("./middleware/auth");

const router = Router();

router.get("/especialidades", EspecialidadeController.obterEspecialidades);
router.get("/especialidades/:id", EspecialidadeController.obterEspecialidadePorId);
router.post("/especialidades", authGuard(), EspecialidadeController.criarEspecialidade);
router.put(
  "/especialidades/:id",
  authGuard(),
  EspecialidadeController.atualizarEspecialidade
);
router.delete(
  "/especialidades/:id",
  authGuard(),
  EspecialidadeController.excluirEspecialidade
);

module.exports = router;
