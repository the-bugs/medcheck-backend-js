const { Router } = require("express");
const MedicoController = require("../controllers/MedicoController");
const authGuard = require("./middleware/auth");
const Roles = require('../helpers/roles');
const router = Router();

router.post("/medicos", MedicoController.criarMedico);
router.get("/medicos", authGuard([Roles.Admin]), MedicoController.obterMedico);
router.get("/medicos/:id", authGuard([Roles.Admin, Roles.Medico]), MedicoController.obterMedicoPorId);
router.put("/medicos/:id", authGuard([Roles.Admin, Roles.Medico]), MedicoController.atualizarMedico);
router.delete("/medicos/:id", authGuard([Roles.Admin, Roles.Medico]), MedicoController.removerMedico);

module.exports = router;
