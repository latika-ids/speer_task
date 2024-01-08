const { UsersServicesInstance } = require("../../services/auth/auth-service");
const bodyValidation = require("../../utils/validations/index");

const signupController = async (req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await bodyValidation("userSignup", body);
        const user = await UsersServicesInstance.signUpUser(validatedBody);
        res.send(user);
    } catch (error) {
        console.log("error in user sign-up :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const loginController = async (req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await bodyValidation("userLogin", body);
        const response = await UsersServicesInstance.loginUser(validatedBody);
        res.send(response);
    } catch (error) {
        console.log("error in user login :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    signupController,
    loginController
}