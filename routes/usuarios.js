const { Router } = require("express");
const Usuario = require("../models/usuario");
const UsuarioController = require("../controllers/UsuarioController");

const router = Router();

router.get("/usuarios", UsuarioController.listarUsuarios);
router.get("/usuarios/:id", UsuarioController.obterUsuarioPorId);
router.post("/usuarios", UsuarioController.criarUsuario);
router.put("/usuarios/:id", UsuarioController.atualizarUsuario);

router.post("/usuarios", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (nome && email && senha) {
      const usuario = await Usuario.create({ nome, email, senha });
      res.status(201).json(usuario);
    } else {
      res.status(400).json({ message: "Dados incompletos." });
    }
  } catch (error) {
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

router.put("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    if (id && nome && email && senha) {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        await Usuario.update({ nome, email, senha });
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ message: "Usuário não encontrado." });
      }
    } else {
      res.status(400).json({ message: "Dados incompletos." });
    }
  } catch (error) {
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

router.delete("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        await Usuario.destroy({ where: { id } });
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ message: "Usuário não encontrado." });
      }
    } else {
      res.status(400).json({ message: "Dados incompletos." });
    }
  } catch (error) {
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

module.exports = router;
