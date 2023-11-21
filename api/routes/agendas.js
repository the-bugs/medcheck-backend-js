const { Router } = require("express");
const AgendaController = require("../controllers/AgendaController");
const authGuard = require("./middleware/auth");
const Roles = require('../helpers/roles');

const router = Router();

router.get("/agendas", authGuard(), AgendaController.obterAgendas);
router.get("/agendas/:id", authGuard(), AgendaController.obterAgendaPorId);
router.get("/agendas/medicos/:id", authGuard(), AgendaController.obterAgendaPorIdMedico);
router.post("/agendas", authGuard([Roles.Admin, Roles.Medico]), AgendaController.criarAgenda);
router.put("/agendas/:id", authGuard([Roles.Admin, Roles.Medico]), AgendaController.atualizarAgenda);
router.delete("/agendas/:id", authGuard([Roles.Admin, Roles.Medico]), AgendaController.excluirAgenda);

module.exports = router;
