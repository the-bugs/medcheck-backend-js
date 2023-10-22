const { Router } = require("express");
const UserController = require("../controllers/UserController");
const authGuard = require("./middleware/auth");
const Roles = require('../helpers/roles');
const router = Router();

router.get("/usuarios", authGuard([Roles.Admin]), UserController.list);
router.get("/usuarios/:id", authGuard([Roles.Admin]), UserController.findById);
router.put("/usuarios/:id", authGuard([Roles.Admin]), UserController.update);

module.exports = router;
