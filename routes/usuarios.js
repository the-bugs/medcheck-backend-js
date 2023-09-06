const { Router } = require('express');
const Usuario = require('../models/usuario');

const router = Router();

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({ message: "Um erro aconteceu." });
    }
});

router.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const usuario = await Usuario.findByPk(id);
            if (usuario) {
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

router.post('/usuarios', async (req, res) => {
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

router.put('/usuarios/:id', async (req, res) => {
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