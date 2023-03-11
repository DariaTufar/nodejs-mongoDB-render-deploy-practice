const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

// =============Registration of a user = Sign-Up ============================
// ============http://localhost:7070/api/users/register
router.post("/register", validateBody(schemas.schemaRegister), ctrl.register);

// =============Sign in ============================
// ============http://localhost:7070/api/users/login
router.post("/login", validateBody(schemas.schemaLogin), ctrl.login);

// =============Current user ============================
// http://localhost:7070/api/users/current
router.get("/current", authenticate, ctrl.getCurrent);

// =============Log Out ============================
// ============localhost:7070/api/users/logout

router.post("/logout", authenticate, ctrl.logout);

// =============Adding Avatars===========================
// ============http://localhost:7070/api/users/avatars
router.patch(  "/avatars",  authenticate,  upload.single("avatar"),  ctrl.updateAvatar);

module.exports = router;
