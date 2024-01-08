const jwt =  require("jsonwebtoken");
const {JWT_KEY} = require("../../config/app-config")
//const traceAndThrowError = require("../../utils/errorHandling/custom-error")
//const {appConstants} = require("../../../config/app-constants/constants");
const Users = require("../models/user")
 
//const {errors: {errorMessage}} = appConstants

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            throw new Error('Token not provided');
        }
        const decoded = jwt.verify(token, JWT_KEY);
        const user = await Users.findOne({
            _id: decoded._id,
        });
        if(!user) throw new Error("User authentication failed!");
        req.user = user;
        req._id = user._id;
        next()
    } catch (error) {
        res.status(401).send({ code: 401, message: "Unauthorized!" });
    }
};

module.exports = auth;