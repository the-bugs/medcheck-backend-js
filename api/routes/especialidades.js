const { Router } = require("express");
const Especialidade = require("../models/especialidade");
const EspecialidadeController = require("../controllers/EspecialidadeController");

const router = Router();

router.get("/especialidades", EspecialidadeController.listarEspecialidades);

module.exports = router;
