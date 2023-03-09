const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth")

const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

// =============Registration of a user = Sign-Up ============================

router.post("/register", validateBody(schemas.schemaRegister), ctrl.register  );

// =============Sign in ============================

router.post("/login", validateBody(schemas.schemaLogin), ctrl.login);

// =============Current user ============================
router.get("/current", authenticate,   ctrl.getCurrent);

// =============Log Out ============================

router.post("/logout",  authenticate, ctrl.logout);

module.exports = router;