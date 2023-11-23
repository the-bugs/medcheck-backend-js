const { Router } = require("express");
const ConsultaController = require("../controllers/ConsultaController");
const authGuard = require("./middleware/auth");
const Roles = require('../helpers/roles');

const router = Router();

router.get("/consultas", authGuard([Roles.Admin, Roles.Medico, Roles.Paciente]), ConsultaController.obterConsultas);
router.get("/consultas/:id", authGuard([Roles.Admin, Roles.Medico, Roles.Paciente]), ConsultaController.obterConsultaPorId);
router.post("/consultas", authGuard([Roles.Admin, Roles.Medico]), ConsultaController.criarConsulta);
router.post("/consultas/agendar", authGuard([Roles.Admin, Roles.Medico, Roles.Paciente]), ConsultaController.agendarConsulta);
// router.put("/consultas/:id", authGuard([Roles.Admin, Roles.Medico]), ConsultaController.atualizarConsulta);
// router.delete("/consultas/:id", authGuard([Roles.Admin, Roles.Medico]), ConsultaController.excluirAgenda);

module.exports = router;
