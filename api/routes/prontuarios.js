const { Router } = require("express");
const Prontuario = require("../models/prontuario");
const ProntuarioController = require("../controllers/ProntuarioController");
const authGuard = require("./middleware/auth");

const router = Router();

router.get("/prontuarios", authGuard(), ProntuarioController.obterProntuarios);
router.get(
  "/prontuarios/:id",
  authGuard(),
  ProntuarioController.obterProntuarioPorId
);
router.post("/prontuarios", authGuard(), ProntuarioController.criarProntuario);
router.put(
  "/prontuarios/:id",
  authGuard(),
  ProntuarioController.atualizarProntuario
);
router.delete(
  "/prontuarios/:id",
  authGuard(),
  ProntuarioController.excluirProntuario
);

module.exports = router;
