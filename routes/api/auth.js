const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authen, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authen, ctrl.getCurrent);

router.post("/logout", authen, ctrl.logout);

router.patch("/avatars", authen, upload.single("avatar"), ctrl.updAvatar);

module.exports = router;
