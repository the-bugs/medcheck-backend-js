const { Router } = require("express");
const Administrador = require("../models/administrador");
const AdminController = require("../controllers/AdministradorController");

const router = Router();

router.get("/administradores", AdminController.obterAdmin);
router.get("/administradores/:id", AdminController.obterAdminPorId);
router.post("/administradores", AdminController.criarAdmin);
router.put("/administradores/:id", AdminController.atualizarAdministrador);

module.exports = router;
