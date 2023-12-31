const { Router } = require("express");
const AdminController = require("../controllers/AdministradorController");
const authGuard = require("./middleware/auth");
const Roles = require('../helpers/roles');
const router = Router();

router.get("/administradores", authGuard([Roles.Admin]), AdminController.obterAdmin);
router.get("/administradores/:id", authGuard([Roles.Admin]), AdminController.obterAdminPorId);
router.post("/administradores", authGuard([Roles.Admin]), AdminController.criarAdmin);
router.put("/administradores/:id", authGuard([Roles.Admin]), AdminController.atualizarAdministrador);
router.delete("/administradores/:id", authGuard([Roles.Admin]), AdminController.removerAdministrador);

module.exports = router;
