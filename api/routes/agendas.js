const { Router } = require("express");
const AgendaController = require("../controllers/AgendaController");
const authGuard = require("./middleware/auth");

const router = Router();

router.get("/agendas", authGuard(), AgendaController.obterAgendas);
router.get(
  "/agendas/:id",
  authGuard(),
  AgendaController.obterAgendaPorId
);
router.post("/agendas", authGuard(), AgendaController.criarAgenda);
router.put(
  "/agendas/:id",
  authGuard(),
  AgendaController.atualizarAgenda
);
router.delete(
  "/agendas/:id",
  authGuard(),
  AgendaController.excluirAgenda
);

module.exports = router;
