const express = require("express");
const { signupController, loginController } = require('../../controllers/auth/auth-controller');

const userRouter = express.Router();

// user credential apis
userRouter.post("/auth/signup", signupController);
userRouter.post("/auth/login", loginController);

module.exports = userRouter;