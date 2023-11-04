const { Router } = require("express");
const PacienteController = require("../controllers/PacienteController");
const authGuard = require("./middleware/auth");
const Roles = require('../helpers/roles');
const router = Router();

router.post("/pacientes", PacienteController.criarPaciente);
router.get("/pacientes", authGuard([Roles.Admin]), PacienteController.obterPaciente);
router.get("/pacientes/:id", authGuard([Roles.Admin, Roles.Paciente]), PacienteController.obterPacientePorId);
router.put("/pacientes/:id", authGuard([Roles.Admin, Roles.Paciente]), PacienteController.atualizarPaciente);

module.exports = router;
