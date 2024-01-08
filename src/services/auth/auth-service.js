const Users = require("../../models/user");

class UsersServices {
    async signUpUser(signUpData) {
        try {
            const user = new Users(signUpData);
            await user.save();
            return user;
        } catch (error) {
            console.log("Sign-up service error :- ", error);
            throw error;
        }
    };

    async loginUser(validatedBody) {
        try {
            const user = await Users.findByCredentials(validatedBody.email, validatedBody.password);
            const token = await user.generateAuthToken();
            return { user, token };
        } catch (error) {
            console.log("Login service error :- ", error);
            throw error;
        }
    };
}

exports.UsersServicesInstance = new UsersServices();