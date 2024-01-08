const joi = require("joi");
joi.objectId = require('joi-objectid')(joi);

class AuthValidation {
    constructor() {
        this.userSignupValidationSchema = joi.object({
            name: joi.string().required().min(4).max(20),
            userName: joi.string().optional().min(4).max(20),
            email: joi.string().email().lowercase().required(),
            password: joi.string().min(8).max(16).required(),
       });

        this.userLoginValidationSchema = joi.object({
            email: joi.string().email().lowercase().required(),
            password: joi.string().min(8).max(16).required(),
        });
    };
};

const authValidationObject = new AuthValidation();

module.exports = authValidationObject;