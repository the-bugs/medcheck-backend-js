const { Router } = require("express");
const AuthController = require("../controllers/AuthController");
const authGuard = require("./middleware/auth");

const router = Router();

router.post("/auth/login", AuthController.login);
router.get("/auth/me", authGuard(), AuthController.me);

module.exports = router;
