const { Router } = require("express");
const Usuario = require("../models/usuario");
const UsuarioController = require("../controllers/UsuarioController");

const router = Router();

router.get("/usuarios", UsuarioController.listarUsuarios);
router.get("/usuarios/:id", UsuarioController.obterUsuarioPorId);
router.post("/usuarios", UsuarioController.criarUsuario);
router.put("/usuarios/:id", UsuarioController.atualizarUsuario);

module.exports = router;
