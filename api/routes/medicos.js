const { Router } = require("express");
const MedicoController = require("../controllers/MedicoController");
const authGuard = require("./middleware/auth");
const Roles = require('../helpers/roles');
const router = Router();

router.get("/medicos", MedicoController.obterMedico);
router.get("/medicos/:id", MedicoController.obterMedicoPorId);
router.post("/medicos", authGuard([Roles.Admin, Roles.Medico]), MedicoController.criarMedico);
router.put("/medicos/:id", authGuard([Roles.Admin, Roles.Medico]), MedicoController.atualizarMedico);
router.delete("/medicos/:id", authGuard([Roles.Admin, Roles.Medico]), MedicoController.removerMedico);

module.exports = router;
